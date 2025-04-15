import mongoose, { model, Schema, Types } from "mongoose";

export const TaskSchema = new Schema({
  name: { Types: String, required: true, unique: true },
  content: { Types: String, required: true, unique: true },
  CreateAt: { Types: Date, default: Date.now() },
});

const Tasks = mongoose.model("Tasks", TaskSchema);
