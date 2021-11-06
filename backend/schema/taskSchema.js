//import mongoose  makes mongo easier for node apparently
const mongoose = require("mongoose");

// create model for todo tasks
const taskSchema = mongoose.Schema({
    task: String,
    description: String,
    category: String,
    completed: { type: Boolean, default: false },
    dateCreated: { type: Date, default: Date.now },
  });
  // create model from schema
  const Task = mongoose.model("Tasks", taskSchema);
  module.exports = Task;