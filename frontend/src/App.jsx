import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  // fetch("http://localhost:3000/todos")
  //    .then(async function(res){
  //     const json = await res.json();
  //     setTodos(json.todos);  // json.todos is  actually array is returned 
  //    })

     // this fetch method is one way of solving the problem but it is not recommended , so try not to use it because infinite loop will arise




  // Note: this way of hitting the above fetch request will cause CORS error
  // because when you are on localhost:5173 , you can't send request to localhost:3000 i.e, from one port to another port , more specifically from frontend to backend
  // unless your backend allows it
  // if localhost:5173 allows the silent request then it can happen
  // so simply go to backend folder and run  npm install cors
  return (
  
      <div>

        <CreateTodo></CreateTodo>

        <Todos todos={todos}></Todos>


      </div>
      
 
  )
}

export default App
