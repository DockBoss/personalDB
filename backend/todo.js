const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Task = require("./schema/taskSchema.js");
// for parsing multipart/form-data
const multer = require("multer");
const upload = multer();

//gets all tasks in DB
router.get("/getAllTasks", function (req, res) {
  Task.find({}, function (err, tasks) {
    if (err) {
      res.status(500).json({ message: "Database error", error: err });
    } else {
      res.json(tasks);
    }
  });
});

//gets active tasks
router.get("/getActiveTasks", function (req, res) {
	Task.find({"completed": false}, function (err, tasks) {
		if (err) {
			res.status(500).json({ message: "Database error", error: err });
		  } else { 
			res.json(tasks);
		  }
	});
});

//posts new task to my_todo db in mongo
router.post("/createTask", upload.array(), function (req, res) {
  const taskInfo = req.body;
  // will create some error handeling for this but not now
  const newTask = new Task({
    task: taskInfo.task,
    description: taskInfo.description,
    category: taskInfo.category,
    completed: false,
    dateCreated: Date.now(),
  });
  newTask.save(function (err, Task) {
    if (err) {
      res.status(500).json({ message: "Database error", error: err });
    } else {
      res.json({ ...taskInfo });
    }
  });
});

//export router to index
module.exports = router;
