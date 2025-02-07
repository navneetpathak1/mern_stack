import { Client } from 'pg'; 

export async function getClient() {
    const client = new Client(" postgresql://NAVNEET:NAVNEETPATHAK@localhost:5432/NavneetDB");
    await client.connect();
    return client;
}
