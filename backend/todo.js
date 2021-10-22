const express = require('express');
const router = express.Router();


//create uri of /todo/getTaskById/given Id
// all you need ot do dynamic routes is /:blank in the uri then use req.params.blank
// can also use regex  :id([0-9]{5}
router.get("/getTaskById/:id", (req, res) => {
    res.send("Looking for Id: " + req.params.id);
});

//creates the uri of ___/todo/getAllTasks
router.get("/getAllTasks", (req, res) => {
    res.json({message: "Hello"});
});
//creates the uri of ___/todo/createTask
router.post("/createTask", (req, res) => {
    res.send("test");
});

//export router to index
module.exports = router;