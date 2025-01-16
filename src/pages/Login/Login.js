import React, { useContext, useState } from 'react'
import password from "../../assets/icons/padlock.png"
import email from "../../assets/icons/email.png"
import axios from "axios"
import { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext'
import logo from "../../assets/icons/mines-dare-2-win-tile-auth__1_-removebg-preview.png"
import "./Login.css"
export default function Login() {
    const {getUserData,isMobile}=useContext(AppContext)
    const [loginInfo,setLoginInfo]=useState({
        password:"",
        email:""
    })
    const handleLoginChange = (e) => {
        setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
      };
    const navigate=useNavigate()
    const handleLoginSubmit = async () => {
        try {
            const response = await axios.post(`https://casino-backend-s1l5.onrender.com/auth/login`, {
                email: loginInfo.email,
                password: loginInfo.password
            });
            
            if (response.status === 200) {
                const userId = response.data.user.id;
                localStorage.setItem("token", userId);
    
                await getUserData(userId);
                
                navigate("/Roulette");
            }
        } catch (err) {
            console.log(err);
        }
    };
    
    

  return (
    <>
    <Toaster position="bottom-center"/>
    {
        isMobile?
        <div className='mobile-full'>
            <h1 className="">
                Hello <br/>
                Log In!
            </h1>
            <div className="down">
                <h2 className="mobile-h2">Email</h2>
                <input 
                name='email'
                onChange={handleLoginChange}
                className="email-mobile" 
                type='email'
                style={{
                    backgroundImage: `url(${email})`,
                    backgroundSize: "18px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "2px",
                    paddingLeft: "30px", 
                }}
                placeholder="Email"
                autocomplete="off"
            />
            <hr className='hr'/>
                <h2 className="mobile-h2" style={{marginTop:"20px"}}>Password</h2>
                <input 
                name='password'
                onChange={handleLoginChange}
                className="email-mobile" 
                type='password'
                style={{
                    backgroundImage: `url(${password})`,
                    backgroundSize: "18px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "2px",
                    paddingLeft: "30px",
                    
                }}
                placeholder="Password"
                autocomplete="current-password"            
                />
                <hr className='hr'/>
                <button className="btn-mobile" onClick={()=>{
                                handleLoginSubmit()
                            }}>Log In</button>
                <h3 className="mobile-down">
                    Don't have account?
                </h3>
                <h2 className="mobile-down-h2" onClick={()=>navigate("/register")}>Sign Up</h2>
                
            </div>
        </div>
        :
        <div className='log-full'>
        <div className="log-center">
            <div className="left">
                <h2 className="h2">Log In</h2>
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
                            <button className="btn" onClick={()=>{
                                handleLoginSubmit()
                            }}>Log In</button>

            </div>
            <div className="right">
                <h1 className="">Welcome to login</h1>
                <h2 className="">Don't have an account?</h2>
                <button className=""    onClick={()=>navigate("/Register")}>Sign In</button>

            </div>
        </div>
    </div>
    }
    
    </>
  )
}
