import React, { useContext } from 'react'
import "./Navbar.css"
import logo from "../../assets/icons/mines-dare-2-win-tile-auth__1_-removebg-preview.png"
import { AppContext } from '../../Context/AppContext'

export default function Navbar() {
  const {money}=useContext(AppContext)
  return (
    <div className='nav'>
      <img className="logo" src={logo} alt=''/>
      <h1 className="">$ {money}</h1>
    </div>
  )
}
