import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,"Title is required"],
        trim: true,
        maxlength: [50,"Title must be less than 50 characters"],
    },
    description: {
        type: String,
        required: [true,"Description is required"],
        trim: true,
        minlength: [10,"Description must be at least 10 characters"],
        maxlength: [200,"Description must be less than 200 characters"],
    },
    complited: {
        type: Boolean,
        default: false,
    },
    // email: {
    //     type: String,
    //     required: [true,"Email is required"],
    //     trim: true,
    //     unique: [true,"Email already exists"],
    //     validate: {
    //         validator: function(v) {
    //             return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
    //         },
    //         message: props => `${props.value} is not a valid email!`
    //     }
    // }
})

export const Todo = mongoose.model("Todo",todoSchema)