const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3001;
// for parsing multipart/form-data 
var multer = require('multer');
var upload = multer();
app.use(upload.array()); 

//To parse URL encoded data
app.use(express.urlencoded({extended: true}));

// //To parse json data
 app.use(express.json());

 // to parse cookie data IDK what for but I will probably need it 
 app.use(cookieParser());


//used to enable serving of static files  disabled by default 
//using public as the root route(try saying root route 5 times fast)
//you can use many of these and can add  prefix to the path if you so chose 
//going to /test/fileName serves the file
app.use("/test", express.static('public'));


//will log each time a request is made to the server
// can add route before the function if we want to limit when this middleware function is ran
app.use(function (req, res, next) {
  console.log("A new request received at " + Date.now());

  //required by all middleware functions
  //can be used on HTTP request methods as well
  //in the case where you have a function call after you get a request
  // https://www.tutorialspoint.com/expressjs/expressjs_middleware.htm
  next();
});

//Must be below middleware you want to run before and before middleware you want to run after with next();
//Import? todo
const todo = require("./todo.js");
//creates route where functionality is extended to the todo file and all routes on that file start with /todo
//make sure that both files are in the same directory
app.use("/todo", todo);

// use this to give a better error message when using invalid routes
app.get("*", function (req, res) {
  res.send("Sorry, this is an invalid URL.");
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
