import React, { useEffect, useState } from 'react'
import "./Admin.css"
import userActive from "../../assets/icons/check (3).png"
import addUser from "../../assets/icons/add-contact.png"
import user from "../../assets/icons/user (2).png"
import arr from "../../assets/icons/right-up.png"
import money from "../../assets/icons/money.png"
import axios from 'axios'
export default function Admin() {
    const [totalUsers,setTotalUsers]=useState()
    const [newUsers,setNewUsers]=useState()
    const [activeUsers,setActiveUsers]=useState()
    const getAdminData= async ()=>{
        try{
            const response=await axios.get("https://casino-backend-s1l5.onrender.com/auth/getAdminData")
            console.log(response.data.activeUsers[0].activeUsers)
            setTotalUsers(response.data.totalUsers[0].count)
            setNewUsers(response.data.newUsers[0].dailyUsers)
            setActiveUsers(response.data.activeUsers[0].activeUsers)
        }   
        catch(e){
            console.log(e)
        }
    }
    useEffect(() => {
        // Funkcija koja se poziva svakih minut
        getAdminData();
        const interval = setInterval(() => {
          getAdminData();
        }, 60000); // 60000 ms = 1 minut
    
        // Čišćenje intervala prilikom demontaže komponente
        return () => clearInterval(interval);
      }, []);
  return (
    <div className='admin-full-page'>
        <div className="admin-full-page-top">
            <div className="admin-full-page-top-left">
                <div className="left-div">
                    <div className="left-left">
                        <div className="left-box">
                        <div className="box-circle">
                            <img className="" src={money} alt=''/>
                        </div>
                        <div className="left-box-right">
                            <h3 className="">Deposited money</h3>
                            <h1 className="">$ 2358</h1>
                        </div>
                        </div>
                        <div className="left-box">
                        <div className="box-circle">
                            <img className="" src={money} alt=''/>
                        </div>
                        <div className="left-box-right">
                            <h3 className="">Withdrawn money</h3>
                            <h1 className="">$ 1784</h1>
                        </div>
                        </div>
                    </div>
                    <div className="left-right">
                        <div className="right-box">

                        <div id='largeImg' className="box-circle">
                            <img className="" src={money} alt=''/>
                        </div>

                        <div className="left-box-right">
                            <h3 id='largeH3' className="">Profit</h3>
                            <h1 id='largeH1' className="">$ 574</h1>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="admin-full-page-top-right">
                <div className="right-div">
                    <div className="right-left">
                    <div className="left-box">
                        <div className="box-circle">
                            <img className="" src={userActive} alt=''/>
                        </div>
                        <div className="left-box-right">
                            <h3 className="">Active Users</h3>
                            <h1 className="">{activeUsers}</h1>
                        </div>
                    </div>
                    <div className="left-box">
                        <div className="box-circle">
                            <img className="" src={addUser} alt=''/>
                        </div>
                        <div className="left-box-right">
                            <h3 className="">New Users</h3>
                            <h1 className="">{newUsers}</h1>
                        </div>
                    </div>
                    </div>
                    <div className="right-right">
                    <div className="right-box">
                        <div id='largeImg' className="box-circle">
                            <img className="" src={user} alt=''/>
                        </div>
                        <div id='imgRel' className="box-circle">
                            <img className="" src={arr} alt=''/>
                        </div>
                        <div className="left-box-right">
                            <h3 id='largeH3' className="">Total Users</h3>
                            <h1 id='largeH1' className="">{totalUsers}</h1>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
            <div className="admin-full-page-bot">
                <div className="down-box">
                    <h2 className="">ROULLETE</h2>
                    <h1 className="">31%</h1>
                </div>
                <div className="down-box">
                    <h2 className="">PLINKO</h2>
                    <h1 className="">12%</h1>
                    
                </div>
                <div className="down-box">
                    <h2 className="">MINES</h2>
                    <h1 className="">37%</h1>

                </div>
                <div className="down-box">
                    <h2 className="">CASH HUNT</h2>
                    <h1 className="">23%</h1>

                </div>
        </div>
    </div>  
  )
}
