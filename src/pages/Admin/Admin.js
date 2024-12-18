import React from 'react'
import "./Admin.css"
import userActive from "../../assets/icons/check (3).png"
import addUser from "../../assets/icons/add-contact.png"
import user from "../../assets/icons/user (2).png"
import arr from "../../assets/icons/right-up.png"
import money from "../../assets/icons/money.png"
export default function Admin() {
  return (
    <div className='admin-full-page'>
        <div className="admin-full-page-top">
            <div className="admin-full-page-top-left">
                <div className="left-div">
                    <div className="left-left">
                        <div className="left-box">
                        <div className="box-circle">
                            <img className="" src={money} />
                        </div>
                        <div className="left-box-right">
                            <h3 className="">Deposited money</h3>
                            <h1 className="">$ 2358</h1>
                        </div>
                        </div>
                        <div className="left-box">
                        <div className="box-circle">
                            <img className="" src={money} />
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
                            <img className="" src={money} />
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
                            <img className="" src={userActive} />
                        </div>
                        <div className="left-box-right">
                            <h3 className="">Active Users</h3>
                            <h1 className="">17</h1>
                        </div>
                    </div>
                    <div className="left-box">
                        <div className="box-circle">
                            <img className="" src={addUser} />
                        </div>
                        <div className="left-box-right">
                            <h3 className="">New Users</h3>
                            <h1 className="">3</h1>
                        </div>
                    </div>
                    </div>
                    <div className="right-right">
                    <div className="right-box">
                        <div id='largeImg' className="box-circle">
                            <img className="" src={user} />
                        </div>
                        <div id='imgRel' className="box-circle">
                            <img className="" src={arr} />
                        </div>
                        <div className="left-box-right">
                            <h3 id='largeH3' className="">Total Users</h3>
                            <h1 id='largeH1' className="">323</h1>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
        <div className="admin-full-page-bot">

        </div>
    </div>  
  )
}
