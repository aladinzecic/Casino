import React, { useContext } from 'react'
import "./ProtectedRoute.css"
import { useNavigate } from 'react-router-dom'
import police from "../../assets/icons/police.png"
import { AppContext } from '../../Context/AppContext'
export default function ProtectedRoute({children}) {
    const navigate=useNavigate()
    const token=localStorage.getItem("token")
      if(token) return <>{children}</>
    else 
  return (
    <div className='protected-full'>
      <img className="" src={police} />
      <h1 className="">access denied</h1>
      <button className="" onClick={()=>navigate("/Login")}> Go to Login</button>
    </div>
  )
}
