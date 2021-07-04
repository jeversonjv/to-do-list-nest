import { Document } from "mongoose";

export interface Task extends Document {
    description: String,
    completed: Boolean
}