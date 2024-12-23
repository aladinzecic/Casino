import React, { useContext } from 'react'
import "./ProfileSideBar.css"
import profilna from "../../assets/icons/profilna.png"
import back from "../../assets/icons/right-arrow.png"
import { AppContext } from '../../Context/AppContext'
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom'
export default function ProfileSideBar() {
    
    const {userData,money,setIsProfileVisible,isProfileVisible}=useContext(AppContext)
    const navigate=useNavigate()
    if (!userData) {
        return <></>; // Prikaz dok se podaci učitavaju
      }
      const variants2 = {
          initial: {
            left: `100vw`
        },
        animate: {
            left: `80vw`
        },
    };
    const date = new Date(userData.createdAt);
    const formattedDate = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }).format(date);
  return (
    <motion.div
    variants={variants2}
    initial="initial"
    animate={isProfileVisible===true?"animate":"initial"}
    className='profile-full'>
        <img className="back" onClick={()=>setIsProfileVisible(false)} src={back}  alt='' />
      <div className="circle-profile-img">
        <img className="" src={profilna} />

      </div>
        <h1 className="">{userData.username}</h1>
        <h3 className="">{`Balance: $ ${money}`}</h3>
        <button className="btn1" onClick={()=>navigate("/Deposit")}>Deposit money</button>
        <button className="btn2" onClick={()=>{
          localStorage.clear()
          navigate("/login")
        }}>Log Out</button>
        <h5 className="">{`Created at: ${formattedDate}`}</h5>
    </motion.div>
  )
}
