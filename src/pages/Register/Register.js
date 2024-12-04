import React, { useEffect, useState } from 'react'
import "./Register.css"
import user from "../../assets/icons/user.png"
import password from "../../assets/icons/padlock.png"
import email from "../../assets/icons/email.png"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const navigate=useNavigate()
    const [loginInfo,setLoginInfo]=useState({
        password:"",
        email:"",
        username:""
    })
    const handleLoginChange = (e) => {
        setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
      };

    const handleSubmit = async ()=>{
        try{
            console.log(loginInfo)
            const responsee= await axios.post('http://localhost:3001/auth/register',{
                username:loginInfo.username,
                email:loginInfo.email,
                password:loginInfo.password
            })
            console.log(responsee)
            if(responsee.status===201){
                toast.success('Account successfuly created!', {
                    style: {
                      border: '1px solid #713200',
                      padding: '16px',
                      color: '#713200',
                      fontSize: '18px'
                    },
                    iconTheme: {
                      primary: '#713200',
                      secondary: '#FFFAEE',
                    },
                  })
            }
            setTimeout(() => {
                navigate("/Login");
            }, 2000);
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
            <h1>Register</h1>
            <input 
                name='username'
                onChange={handleLoginChange}
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
                name='password'
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
            <input 
                name='email'
                onChange={handleLoginChange}
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
            <button className="btn" onClick={()=>handleSubmit()}>Register</button>
        </div>
    </div>
    </>
  )
}
