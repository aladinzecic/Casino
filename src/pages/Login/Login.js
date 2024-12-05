import React, { useEffect, useState } from 'react'
import user from "../../assets/icons/user.png"
import password from "../../assets/icons/padlock.png"
import email from "../../assets/icons/email.png"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [loginInfo,setLoginInfo]=useState({
        password:"",
        email:""
    })
    const handleLoginChange = (e) => {
        setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
      };
    const navigate=useNavigate()
    const handleLoginSubmit = async ()=>{
        try{
            const response= await axios.post('http://localhost:3001/auth/login',{
                email:loginInfo.email,
                password:loginInfo.password
            })
            console.log(response)
            if(response.status===200){
                localStorage.setItem("token",loginInfo.username)
                navigate("/Roulette")
            }

        }
        catch(err){
            console.log(err)
        }
    }
  return (
    <>
    <Toaster position="bottom-center"/>
    <div className='log-full'>
        <div className="log-center">
            <h1>Login</h1>
            <input 
                name="email"
                onChange={handleLoginChange}
                className="email" 
                type='email'
                style={{
                    backgroundImage: `url(${user})`,
                    backgroundSize: "15px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "10px",
                    paddingLeft: "30px",        
                    }}
                placeholder="Email"
                autocomplete="off"

            />
            <input 
                name="password"
                onChange={handleLoginChange}
                className="password" 
                type='password'
                style={{
                    backgroundImage: `url(${password})`,
                    backgroundSize: "15px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "10px",
                    paddingLeft: "30px",

                }}
                placeholder="Password"
                autocomplete="current-password"            
                />
            <button className="btn" onClick={()=>handleLoginSubmit()}>Log In</button>
        </div>
    </div>
    </>
  )
}
