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

const todo = require("./todo.js");
const mongoose = require("mongoose");
//connect to db
mongoose.connect("mongodb://localhost:27017/my_db");
db = mongoose.connection;

//uses cors as middleware
app.use(cors());
//ensures that any json or encoded urls are available to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//used to enable serving of static files  disabled by default
//using public as the root route(try saying root route 5 times fast)
//going to /test/fileName serves the file
app.use("/test", express.static("public"));

//will log each time a request is made to the server that is below it, so /test will not log time
// can add route before the function if we want to limit when this middleware function is ran
app.use(function (req, res, next) {
  console.log("A new request received at " + Date.now());
  //tells express that this is middleware and something will run after it
  next();
});

//creates route where functionality is extended to the todo file and all routes on that file start with /todo
app.use("/todo", todo);

// use this to give a better error message when using invalid routes
app.get("*", function (req, res) {
  res.send("Sorry, this is an invalid URL.");
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
