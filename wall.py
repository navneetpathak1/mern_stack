import sqlite3
import csv
from collections import defaultdict

def create_database_schema(db_connection):
    """Create the database schema if it doesn't exist"""
    cursor = db_connection.cursor()
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS shipments (
            shipment_id INTEGER PRIMARY KEY,
            product_name TEXT NOT NULL,
            origin TEXT NOT NULL,
            destination TEXT NOT NULL,
            quantity INTEGER NOT NULL
        )
    ''')
    
    db_connection.commit()

def process_spreadsheet_0(db_connection, filename):
    """Process spreadsheet 0 which is self-contained"""
    cursor = db_connection.cursor()
    
    with open(filename, 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            cursor.execute('''
                INSERT INTO shipments (shipment_id, product_name, origin, destination, quantity)
                VALUES (?, ?, ?, ?, ?)
            ''', (row['shipment_id'], row['product_name'], row['origin'], row['destination'], row['quantity']))
    
    db_connection.commit()
    print(f"Processed {filename} - inserted {reader.line_num - 1} rows")

def process_spreadsheets_1_and_2(db_connection, products_file, locations_file):
    """Process spreadsheets 1 and 2 which are dependent on each other"""
    cursor = db_connection.cursor()
    
    # First, read the locations from spreadsheet 2 into a dictionary
    locations = {}
    with open(locations_file, 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            locations[row['shipping_identifier']] = (row['origin'], row['destination'])
    
    # Then process spreadsheet 1, grouping products by shipping identifier
    shipments = defaultdict(list)
    with open(products_file, 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            shipping_id = row['shipping_identifier']
            product_name = row['product_name']
            quantity = int(row['quantity'])
            shipments[shipping_id].append((product_name, quantity))
    
    # Insert into database
    shipment_id = 1  # Starting ID (assuming we need to generate these)
    for shipping_id, products in shipments.items():
        origin, destination = locations.get(shipping_id, ('UNKNOWN', 'UNKNOWN'))
        for product_name, quantity in products:
            cursor.execute('''
                INSERT INTO shipments (shipment_id, product_name, origin, destination, quantity)
                VALUES (?, ?, ?, ?, ?)
            ''', (shipment_id, product_name, origin, destination, quantity))
            shipment_id += 1
    
    db_connection.commit()
    print(f"Processed {products_file} and {locations_file} - inserted {shipment_id - 1} rows")

def main():
    # Connect to SQLite database (creates it if it doesn't exist)
    conn = sqlite3.connect('shipping_database.db')
    
    # Create schema
    create_database_schema(conn)
    
    # Process each spreadsheet
    try:
        # Spreadsheet 0 is self-contained
        process_spreadsheet_0(conn, 'spreadsheet_0.csv')
        
        # Spreadsheets 1 and 2 are dependent
        process_spreadsheets_1_and_2(conn, 'spreadsheet_1.csv', 'spreadsheet_2.csv')
        
        print("Database population completed successfully!")
    except Exception as e:
        print(f"Error occurred: {e}")
    finally:
        conn.close()

if __name__ == '__main__':
    main()