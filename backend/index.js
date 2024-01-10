const express = require('express');
const app = express();
const { createTodo } = require("./types");

app.use(express.json());

// body{
    // title: String,
    // description: String,
//}



app.post("/todo", function(req, res){

    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);

    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return ;
    }

    // put it in mongodb


})

app.get("/todos", function(req, res){

})

app.put("/completed", function(req, res){

})







const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server started on PORT: ${PORT}`);
})