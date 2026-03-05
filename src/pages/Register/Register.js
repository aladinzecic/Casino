import React, { useState, useContext } from 'react'
import "./Register.css"
import user from "../../assets/icons/user.png"
import password from "../../assets/icons/padlock.png"
import email from "../../assets/icons/email.png"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext'

export default function Register() {

    const { isMobile } = useContext(AppContext)
    const navigate = useNavigate()

    const [loginInfo, setLoginInfo] = useState({
        password: "",
        email: "",
        username: ""
    })

    const handleLoginChange = (e) => {
        setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value })
    }

    const validateForm = () => {
        const { username, email, password } = loginInfo

        const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

        if (!usernameRegex.test(username)) {
            toast.error("Username must be 3-20 characters (letters, numbers, _)")
            return false
        }

        if (!emailRegex.test(email)) {
            toast.error("Enter valid email address")
            return false
        }

        if (!passwordRegex.test(password)) {
            toast.error("Password must be at least 6 characters with 1 letter and 1 number")
            return false
        }

        return true
    }

    const handleSubmit = async () => {

        if (!validateForm()) return

        try {
            const response = await axios.post(
                'https://casino-backend-s1l5.onrender.com/auth/register',
                loginInfo
            )

            if (response.status === 201) {
                toast.success('Account successfully created!', {
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#713200',
                        fontSize: '18px'
                    }
                })

                setTimeout(() => {
                    navigate("/Login")
                }, 2000)
            }

        } catch (err) {
            toast.error("Registration failed")
            console.log(err)
        }
    }

    return (
        <>
            <Toaster position="bottom-center" />

            {isMobile ?

                <div className='mobile-full'>
                    <h1>Create your <br /> account</h1>

                    <div className="down">

                        <h2 className="mobile-h2">Username</h2>
                        <input
                            name='username'
                            onChange={handleLoginChange}
                            className="email-mobile"
                            type='text'
                            minLength={3}
                            maxLength={20}
                            autoComplete="off"
                            style={{
                                backgroundImage: `url(${user})`,
                                backgroundSize: "18px",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "2px",
                                paddingLeft: "30px",
                            }}
                            placeholder="Username"
                        />
                        <hr className='hr' />

                        <h2 className="mobile-h2">Email</h2>
                        <input
                            name='email'
                            onChange={handleLoginChange}
                            className="email-mobile"
                            type='email'
                            autoComplete="off"
                            style={{
                                backgroundImage: `url(${email})`,
                                backgroundSize: "18px",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "2px",
                                paddingLeft: "30px",
                            }}
                            placeholder="Email"
                        />
                        <hr className='hr' />

                        <h2 className="mobile-h2">Password</h2>
                        <input
                            name='password'
                            onChange={handleLoginChange}
                            className="email-mobile"
                            type='password'
                            minLength={6}
                            autoComplete="new-password"
                            style={{
                                backgroundImage: `url(${password})`,
                                backgroundSize: "18px",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "2px",
                                paddingLeft: "30px",
                            }}
                            placeholder="Password"
                        />
                        <hr className='hr' />

                        <button className="btn-mobile" onClick={handleSubmit}>
                            Register
                        </button>

                        <h3 className="mobile-down">
                            Already have account?
                        </h3>
                        <h2 className="mobile-down-h2" onClick={() => navigate("/Login")}>
                            Sign in
                        </h2>
                    </div>
                </div>

                :

                <div className='log-full'>
                    <div className="log-center">
                        <div className="left">

                            <h2 className="h2">Register</h2>

                            <h3>USERNAME</h3>
                            <input
                                name='username'
                                onChange={handleLoginChange}
                                className="username"
                                type='text'
                                minLength={3}
                                maxLength={20}
                                placeholder="Username"
                            />

                            <h3>EMAIL</h3>
                            <input
                                name='email'
                                onChange={handleLoginChange}
                                className="email"
                                type='email'
                                placeholder="Email"
                            />

                            <h3>PASSWORD</h3>
                            <input
                                name='password'
                                onChange={handleLoginChange}
                                className="password"
                                type='password'
                                minLength={6}
                                placeholder="Password"
                            />

                            <button className="btn" onClick={handleSubmit}>
                                Register
                            </button>
                        </div>

                        <div className="right">
                            <h1>Welcome!</h1>
                            <h2>Already have an account?</h2>
                            <button onClick={() => navigate("/Login")}>
                                Log In
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}