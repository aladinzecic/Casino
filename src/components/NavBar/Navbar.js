import React from 'react'
import "./Navbar.css"
import logo from "../../assets/icons/mines-dare-2-win-tile-auth__1_-removebg-preview.png"
export default function Navbar() {
  return (
    <div className='nav'>
      <img className="logo" src={logo} alt=''/>
    </div>
  )
}
