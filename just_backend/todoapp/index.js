const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Initialize environment variables
dotenv.config();

// Create express app
const app = express();

// Middleware
app.use(cors()); // Optional: Enable CORS
app.use(express.json()); // Parse incoming JSON

// Import routes
const todoRoutes = require("./routes/todos.js");

// Use routes
app.use("/api/v1", todoRoutes);

// Import and connect to DB
const dbConnect = require("./config/db.js");

const PORT = process.env.PORT || 4000;

// Default route
app.get("/", (req, res) => {
    res.json({ message: "hello world" });
});

// Connect to DB and start server
dbConnect()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Failed to connect to database:", err);
        process.exit(1);
    });
