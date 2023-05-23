import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Admin from './components/Admin';
import Navbar from './components/Navbar';
function App() {

  return (
    <div >
     
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={< Home/>} />
    <Route path="/user" element={< Home/>} />
    <Route path="/admin" element={<Admin />} />
     </Routes>
</Router>
    </div>
  )
}

export default App
