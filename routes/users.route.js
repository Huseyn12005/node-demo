import express from 'express';
import { protectRoute } from '../middleware/protectRoute.js';
import {
    getMyUserData,
    createUser,
    updateUser,
    patchUser,
    deleteUser
} from '../controllers/users.controller.js';

const router = express.Router();

// GET method
router.get('/', (req, res) => {
    res.json({ message: 'User data'});
});

// GET method
router.get('/user/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `GET request to fetch User data by: ${id}` });
});

router.get('/me', protectRoute, getMyUserData);

// POST - Create user
router.post('/add', createUser);

// PUT - Update user
router.put('/edit/:id', updateUser);

// PATCH - Patch user
router.patch('/patch/:id', patchUser);

// DELETE - Delete user
router.delete('/delete/:id', protectRoute, deleteUser);

export default router;