import React from 'react'
import Navbar2 from './navbar'
import Home2 from './home2'
import App from './App'
import About from './about'
import Create from './create'
import Show from './show'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function Home() {
  return (
    <Router>
        <Navbar2/>
        <Routes>
            <Route path="/" element={<Home2/>}/>
            <Route path="/Home" element={<Home2/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Vote" element={<App/>}/>
            <Route path="/Create" element={<Create/>}/>
            <Route path="/Show" element={<Show/>}/>
        </Routes>
    </Router>
    
  )
}
