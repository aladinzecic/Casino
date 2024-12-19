import React, { useContext } from 'react'
import "./Navbar.css"
import logo from "../../assets/icons/mines-dare-2-win-tile-auth__1_-removebg-preview.png"
import { AppContext } from '../../Context/AppContext'
import prof from "../../assets/icons/profilna.png"
export default function Navbar() {
  const {money,setIsProfileVisible}=useContext(AppContext)
  return (
    <div className='nav'>
      <img className="logo" src={logo} alt=''/>
      <div className="rght">
      <h1 className="">$ {money}</h1>
      <div className="profile-img">
        <img className="" onClick={()=>setIsProfileVisible(true)} src={prof} />
      </div>
      </div>
    </div>
  )
}
