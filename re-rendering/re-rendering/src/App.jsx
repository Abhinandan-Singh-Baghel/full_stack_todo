import React, { useCallback, useEffect, useState } from 'react'
import {memo} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App(){
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    fetch("https://sum-server.100xdevs.com/todos")
      .then(async function(res){
        const json = await res.json();
        setTodos(json.todos); 
      })
  }, [])

  return <div>
   { todos.map(todo => <Todo key = {todo.id} title = {todo.title} description={todo.description}></Todo>)}
  </div>
}



function Todo({id, title, description}){
  return <div>
    <h1>
      {id}
    </h1>
    <h1>
      {title}
    </h1>
    <h4>
      {description}
    </h4>
  </div>
}

export default App