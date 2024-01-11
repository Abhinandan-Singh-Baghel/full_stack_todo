import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){

  const [title , setTitle] = useState("my name is abhinandan");

  function updateTitle(){
    setTitle("my name is "+ Math.random());
  }


  return (
    <div>

      <button onClick={updateTitle}>Update the title</button>
      <Header title = {title}></Header>
      <Header title = "Abhinandan"></Header>
      <Header title = "Abhinandan"></Header>
      <Header title = "Abhinandan"></Header>
      <Header title = "Abhinandan"></Header>
      <Header title = "Abhinandan"></Header>
      <Header title = "Abhinandan"></Header>

     
    </div>
  )
}


const Header = React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})




export default App