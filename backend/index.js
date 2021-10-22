const express = require('express');
const app = express();
const port = 3001;

const todo =require('./todo.js');


//will log each time a request is made to the server
// can add route before the function if we want to limit when this middleware function is ran
app.use(function(req, res, next){
    console.log("A new request received at " + Date.now());
    
    //required by all middleware functions
    //can be used on HTTP request methods as well
    //in the case where you have a function call after you get a request
    // https://www.tutorialspoint.com/expressjs/expressjs_middleware.htm
    next();
 });


//make sure that both files are in the same directory
app.use('/todo', todo);

// use this to give a better error message when using invalid routes
app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
 });

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
});