const mongoose = require("mongoose");

// mongodb+srv://abhinandansinghbaghel2001:<password>@cluster0.3fjqkhz.mongodb.net/

mongoose.connect("mongodb+srv://abhinandansinghbaghel2001:cYfhJfMRLe23S7Ln@cluster0.3fjqkhz.mongodb.net/new_Year_project");


const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})


const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}