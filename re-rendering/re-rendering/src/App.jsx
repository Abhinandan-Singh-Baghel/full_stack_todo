import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let counter = 4;

function App(){

  const [todos, setTodos] = useState([{
    id: 0,
    title: "go to gym",
    description: "go to gym from 1-2"
  },
  {
    id: 1,
    title: "eat food",
    description: "eat food from 2-4"
  },
  {
    id: 2,
    title: "study math",
    description: "study math from 4-6"
  }]);

  const [counter, setCouter] = useState(0);

  function increaseCount(){
    setCouter(counter + 1);
  }

  const filteredTodos = todos.filter(x => x.id % 2 == 0);

  return (
    <div>
      <button onClick={increaseCount} Increase Count ></button>
      {filteredTodos.map(todo => <Todo title = {todo.title} description= {todo.description}></Todo>)}
    </div>
  )

}



const Todo = React.memo(function({title, description}){
  return <div>
    <h1>
      {title}
    </h1>
    <h3>
      {description}
    </h3>
  </div>
})





export default App