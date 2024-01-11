import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>   //  we can either write React.Fragment, we can either write <div> or we can even 
                      // write <> </> but the point is there has to be a parent element

         <Header title="Abhinandan1"></Header>
         <Header title="Abhinandan2"></Header>


    </div>
  )
}


function Header({title}){   // here we could have simply written (title) , it would still have been fine
                            // but we are doing ({title}) , because we wanted to utilize the destructuring property
  return <div>
    {title}
  </div>
}

export default App