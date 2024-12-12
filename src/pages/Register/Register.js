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
            <div className="left">
                <h2 className="h2">Sign In</h2>
                <h3 className="">USERNAME</h3>
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
                <h3 className="">EMAIL</h3>
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
                <h3 className="">PASSWORD</h3>
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
                            <button className="btn" onClick={handleSubmit}>Sign In</button>

            </div>
            <div className="right">
                <h1 className="">Welcome to sign in</h1>
                <h2 className="">Already have an account?</h2>
                <button className="" onClick={(()=>navigate("/Login"))}>Log In</button>

            </div>
        </div>
    </div>
    </>
  )
}
