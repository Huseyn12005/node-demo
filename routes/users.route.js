import express from 'express';
import { 
  getAllTodos, 
  getTodoById, 
  createTodo, 
  updateTodo, 
  deleteTodo 
} from '../controllers/todos.controller.js';

const router = express.Router();

// GET method - Get all todos
router.get('/', getAllTodos);

// GET by ID method - Get todo by ID
router.get('/user/:id', getTodoById);

// POST method - Create a new todo
router.post('/add', createTodo);

// PUT method - Update an existing todo
router.put('/edit/:id', updateTodo);

// DELETE method - Delete a todo
router.delete('/delete/:id', deleteTodo);

export default router;
