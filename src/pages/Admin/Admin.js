import React, { useEffect, useState } from 'react'
import "./Admin.css"
import userActive from "../../assets/icons/check (3).png"
import addUser from "../../assets/icons/add-contact.png"
import user from "../../assets/icons/user (2).png"
import arr from "../../assets/icons/right-up.png"
import money from "../../assets/icons/money.png"
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
export default function Admin() {
      const [users, setUsers] = useState([])

    const [totalUsers,setTotalUsers]=useState()
    const [newUsers,setNewUsers]=useState()
    const [activeUsers,setActiveUsers]=useState()
    const [depositedMoney,setDepositedMoney]=useState()
    const [withdrawnMoney,setWithdrawnMoney]=useState()


    const fetchUsers = async () => {
      const response = await axios.get("https://casino-backend-s1l5.onrender.com/auth/users")
      setUsers(response.data)
    }
const getAdminData = async () => {
  try {
    const response = await axios.get(
      "https://casino-backend-s1l5.onrender.com/auth/getAdminData"
    );

    // Direktno pristupi brojevima
    setTotalUsers(response.data.totalUsers);
    setNewUsers(response.data.newUsers);
    setActiveUsers(response.data.activeUsers);
    setWithdrawnMoney(response.data.withdrawnMoney);
    setDepositedMoney(response.data.totalDeposited);
  } catch (e) {
    console.error(e);
  }
};

const banUser = async (id) => {
  await axios.post("https://casino-backend-s1l5.onrender.com/auth/ban-user", { id })
}
    useEffect(() => {
        getAdminData();
        fetchUsers();
        const interval = setInterval(() => {
          getAdminData();
        }, 60000); 
    
        return () => clearInterval(interval);
      }, []);
  return (
    <div className='admin-full-page'>
              <div><Toaster position="bottom-center"/></div>
        
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
                            <h1 className="">$ {depositedMoney}</h1>
                        </div>
                        </div>
                        <div className="left-box">
                        <div className="box-circle">
                            <img className="" src={money} alt=''/>
                        </div>
                        <div className="left-box-right">
                            <h3 className="">Withdrawn money</h3>
                            <h1 className="">$ {withdrawnMoney}</h1>
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
                            <h1 id='largeH1' className="">$ {depositedMoney-withdrawnMoney}</h1>
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

      {users.map((user) => (
        <div className="rect" key={user.id}>
          <h3>{user.username}</h3>
          <h3>{user.email}</h3>

          <div className="circle" onClick={() => {
            banUser(user.id)
            toast.success('User successfuly banned', {
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
                      });
            }}>
            <h3 className="bold">x</h3>
          </div>
        </div>
      ))}

    </div>
    
    </div>  
  )
}
