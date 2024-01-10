const express = require('express');
const app = express();
const { createTodo, updateTodo } = require("./types");
const { todo } = require('./db');

app.use(express.json());

// body{
    // title: String,
    // description: String,
//}



app.post("/todo", async function(req, res){

    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return ;
    }

    // put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })




})

app.get("/todos", async function(req, res){
    const todos = await todo.find({});
    console.log(todos) // this is a promise , it takes generally very long time to resolve because my mongodb server is on the different part of the word , so it is best to use await

    res.json({
        todos
    })


})

app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({
        msg: "Todo marked as completed"
    })

})







const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server started on PORT: ${PORT}`);
})