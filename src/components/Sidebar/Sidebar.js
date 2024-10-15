import React from 'react'
import "./Sidebar.css"
import roulettepng from "../../assets/icons/roulette-active.png"
import plinkopng from "../../assets/icons/plinko.png"
import minespng from "../../assets/icons/mines.png"
import slotpng from "../../assets/icons/slots.png"
export default function Sidebar() {
  return (
    <div className='side'>
      <div className="active side-box">
      <img className="crash-img" src={roulettepng} alt=''/>
      <h4 className="h4-side-active">Roulette</h4>
      </div>
      <div className="side-box">
      <img className="crash-img" src={plinkopng} alt=''/>
      <h4 className="h4-side">Plinko</h4>

      </div>
      <div className="side-box">
      <img className="crash-img" src={minespng} alt=''/>
      <h4 className="h4-side">Mines</h4>

      </div>
      <div className="side-box">
      <img className="crash-img" src={slotpng} alt=''/>
      <h4 className="h4-side">Slots</h4>

      </div>
    </div>
  )
}
