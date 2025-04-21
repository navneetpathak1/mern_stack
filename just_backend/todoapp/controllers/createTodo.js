const Todo = require("../models/todo");

exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;

        const response = await Todo.create({ title, description });

        res.status(200).json({
            success: true,
            data: response,
            message: "Created successfully",
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            success: false,
            data: "Internal error",
            message: error.message,
        });
    }
};
