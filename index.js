import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouters from './routes/users.route.js'
import todoRouters from './routes/todos.route.js'

dotenv.config();

const app = express();

app.use(cors({}));
// Middleware to parse JSON
app.use(express.json());

app.use("/api/users",userRouters)
app.use("/api/todos",todoRouters)

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process with failure
  }
};

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
  connectDB();
});