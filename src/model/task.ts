import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  deadline: {
    type: Date,
  },

  status: {
    type: String,
    default: "unfinished",
    enum: ["unfinished", "complete", "processing"],
  },
});

export const Task = model("Task", taskSchema);
