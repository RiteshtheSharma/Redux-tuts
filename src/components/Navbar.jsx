import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div style={{width:'100vw',height:'40px',marginBottom:'10px',backgroundColor:'red',display:'flex',justifyContent:"space-around"}}>
    <Link to=""> Home</Link>
    <Link to="/admin"> Admin</Link>



    </div>
  )
}

export default Navbar