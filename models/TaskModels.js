import mongoose, { model, Schema, Types } from "mongoose";

const TaskSchema = new Schema({
  name: { type: String, required: true, unique: true },
  content: { type: String, required: true, unique: true },
  CreateAt: { type: Date, default: Date.now() },
});

const Tasks = mongoose.model("Tasks", TaskSchema);

export default Tasks;
