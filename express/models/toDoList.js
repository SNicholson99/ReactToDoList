const mongoose = require("mongoose");


var todoSchema = {
  "title": String,
  "isComplete": Boolean
  };

var Todo = mongoose.model('ToDoList', todoSchema);

module.exports = Todo;
