const express = require("express");
const router = express.Router();

// Import controller
const { createTodo } = require("../controllers/createTodo");

// Define routes
router.post("/createTodos", createTodo);

// Export router
module.exports = router;
