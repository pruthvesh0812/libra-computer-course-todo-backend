const express = require("express")

const app = express()

const PORT = 5000

app.use(express.json())

// todo array
let todos = [
    {
        id:"1",
        title:"go to gym",
        description:"go to gym at 5pm"
    },
    {
        id:"2",
        title:"study full stack",
        description:"revise express code"
    }
]

app.get("/getTodos",(req,res)=>{
    res.json({message:"success",data:todos})
})

app.post("/addtodo",(req,res)=>{
    const todo = req.body
    console.log(todo,"new todo")
    todos.push(todo)
    res.json({message:"todo added successfully"})
})

app.delete("/deleteTodo/:id",(req,res)=>{
    const params = req.params
    const id = params.id

    const filteredTodos = todos.filter((todo)=>{ return todo.id !== id})
    todos = [...filteredTodos]
    console.log(todos,"after deleting todos")
    res.json({message:"successfully deleted todos"})
})

app.put("/updateTodos",(req,res)=>{
    const updateTodo = req.body
    todos.forEach((todo)=>{
        if(todo.id == updateTodo.id){
            todo.title = updateTodo.title;
            todo.description = updateTodo.description;
        }
        return;
    })
    console.log("todos updated successfully:",todos);
    res.json({message:"todos updated successfully"})
})

app.listen(PORT, ()=>{
    console.log("server running on port:",PORT);
})