import { User } from "../models/user.model.js";

export const getMyUserData = async (req, res) => {
    try {
        const user = req.user;
        res.status(200).json({ message: "My user data", data: user });
    } catch (error) {
        res.status(500).json({ message: "Error fetching user data", error });
    }
};

export const createUser = async (req, res) => {
    try {
        const data = req.body;
        const user = new User(data);
        const savedUser = await user.save();
        res.status(201).json({ message: "User created successfully", data: savedUser });
    } catch (error) {
        res.status(400).json({ message: "Error creating user", error });
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully", data: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
};

export const patchUser = async (req, res) => {
    try {
        const { id } = req.params;
        const patchedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!patchedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User patched successfully", data: patchedUser });
    } catch (error) {
        res.status(500).json({ message: "Error patching user", error });
    }
};

export const deleteUser = async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: "Only admins can delete users" });
        }

        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid user ID format" });
        }

        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully", data: deletedUser });
    } catch (error) {
        console.error('Delete user error:', error);
        res.status(500).json({ message: "Error deleting user", error: error.message || error });
    }
};

