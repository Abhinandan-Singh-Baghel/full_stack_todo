import React, { useCallback, useRef, useEffect, useState, useLayoutEffect } from 'react'
import Profile from './Components/Profile'
import {memo} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Dashboard from './Components/Dashboard'
// import Landing from './Components/Landing'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// single page application
// client side bundle
// client side routing


const App = () => {
  const user = {
    avatar: 'write the path to goku.png',
    name: 'Abhinandan Singh Baghel',
    email: 'asbaghel23@iitk.ac.in',
    username: 'kakarot',

    
  };

  return (
    <div className='app'>
      <h1>My App</h1>
      <Profile user={user}/>

    </div>
  )
}


export default App;