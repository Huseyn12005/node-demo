import { Todo } from "../models/todo.model.js";

export const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json({ message: "Todos fetched successfully", data: todos });
    } catch (error) {
        res.status(500).json({ message: "Error fetching todos", error });
    }
}

export const getTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findById(id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.status(200).json({ message: "Todo fetched successfully", data: todo });
    } catch (error) {
        res.status(500).json({ message: "Error fetching todo", error });
    }
}

export const createTodo = async (req, res) => {
    const { title, description } = req.body;
  
    const todo = new Todo({
      title,
      description
    });
  
    try {
      const savedTodo = await todo.save();
      res.status(201).json(savedTodo);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

export const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }  
        res.status(200).json({ message: "Todo updated successfully", data: updatedTodo });
    } catch (error) {
        res.status(500).json({ message: "Error updating todo", error });
    }
}

export const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if (!deletedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.status(200).json({ message: "Todo deleted successfully", data: deletedTodo });
    } catch (error) {
        res.status(500).json({ message: "Error deleting todo", error });
    }
}
  