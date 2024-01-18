import React, { useCallback, useRef, useEffect, useState, useLayoutEffect } from 'react'
import {memo} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Components/Dashboard'
import Landing from './Components/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// single page application
// client side bundle
// client side routing

function App(){

  return (
    <BrowserRouter>

    <Routes>

      <Route path = "/dashboard" element = {<Dashboard/>}/>
      <Route path = "/" element = {<Landing/>}/>
    </Routes>
    
    
    </BrowserRouter>
  )
}



export default App