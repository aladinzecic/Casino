import React, { useEffect, useState } from 'react'
import "./Login.css"
import user from "../../assets/icons/user.png"
import password from "../../assets/icons/padlock.png"
import email from "../../assets/icons/email.png"
import axios from "axios"

export default function LogIn() {
    const handleSubmit = async ()=>{
        try{
            const response= await axios.post('http://localhost:3001/auth/register',{
                username:"aladin",
                email:"aladin@",
                password:"aladin"
            })
            console.log(response)
        }
        catch(err){
            console.log(err)
        }
    }
  return (
    <div className='log-full'>
        <div className="log-center">
            <h1 >Log In</h1>
            <input 
                className="username" 
                type='text'
                style={{
                    backgroundImage: `url(${user})`,
                    backgroundSize: "15px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "10px",
                    paddingLeft: "30px",        
                    }}
                placeholder="Username"
            />
            <input 
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
            <input 
                className="email" 
                type='email'
                style={{
                    backgroundImage: `url(${email})`,
                    backgroundSize: "15px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "10px",
                    paddingLeft: "30px", 
                }}
                placeholder="Email"
                autocomplete="off"
            />
            <button className="btn" onClick={()=>handleSubmit()}>Log In</button>
        </div>
    </div>
  )
}
