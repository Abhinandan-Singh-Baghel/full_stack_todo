import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){

  const [todos , setTodos] = useState([{
    id: 1,
    title: "Go to gym",
    description: "go to gym today"
  },{
    id: 2,
    title: "Go to class",
    description: "Go to class today"
  },{
    id: 3,
    title: "go to canteen",
    description: "go to canteen today"
  }])

  function addTodo(){
    setTodos([...todos,{
      id:4,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return (
    <div>

      <button onClick={addTodo}>Add a todo</button>

      {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}




    </div>
  )


}

function Todo({title, description}){
  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}






export default App