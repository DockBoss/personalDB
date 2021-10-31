//TODO convert everything to async when everything else is working
const express = require("express");
const app = express();
const port = 3001;
// crooss orign reasource sharing, will edit to make safer, but not now
const cors = require("cors");
// const whitelist = ['http://localhost:3000'];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// } // https://daveceddia.com/access-control-allow-origin-cors-errors-in-react-express/

// for parsing multipart/form-data
const multer = require("multer");
const upload = multer();
//Import todo endpoints has noting really useful I need abstract most of the functional code to this file, but I want to get it working first
const todo = require("./todo.js");
//import mongoose  makes mongo easier for node apparently
const mongoose = require("mongoose");
//connect to db
mongoose.connect("mongodb://localhost:27017/my_db");
db = mongoose.connection;
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

//uses cors as middleware
app.use(cors());
//ensures that any json or encoded urls are available to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//used to enable serving of static files  disabled by default
//using public as the root route(try saying root route 5 times fast)
//you can use many of these and can add  prefix to the path if you so chose
//going to /test/fileName serves the file
app.use("/test", express.static("public"));

//will log each time a request is made to the server that is below it, so /test will not log time
// can add route before the function if we want to limit when this middleware function is ran
app.use(function (req, res, next) {
  console.log("A new request received at " + Date.now());

  //required by all middleware functions
  //can be used on HTTP request methods as well
  //in the case where you have a function call after you get a request
  // https://www.tutorialspoint.com/expressjs/expressjs_middleware.htm
  next();
});

//posts new task to my_todo db in mongo
app.post("/tests", upload.array(), function (req, res) {
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
      res.json({...taskInfo});
    }
  });

  // console.log(req.body);
  // res.send("received your request!");
});

//Must be below middleware you want to run before and before middleware you want to run after with next();

//creates route where functionality is extended to the todo file and all routes on that file start with /todo
//make sure that both files are in the same directory
app.use("/todo", todo);

app.get('/getTasks', function(req, res){
  let tasks = Task.find({}, function(err, tasks){
      if (err) {
        res.status(500).json({ message: "Database error", error: err });
      }else {
        res.json(tasks);
      }
  });
});

// use this to give a better error message when using invalid routes
app.get("*", function (req, res) {
  res.send("Sorry, this is an invalid URL.");
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
