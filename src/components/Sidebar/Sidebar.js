import React, { useContext } from 'react'
import "./Sidebar.css"
import rouletteActivepng from "../../assets/icons/roulette-active.png"
import roulettePng from "../../assets/icons/roulette.png"
import plinkopng from "../../assets/icons/plinko.png"
import minesPng from "../../assets/icons/mines.png"
import minesActivePng from "../../assets/icons/mines-active.png"
import plinkoActive from "../../assets/icons/plinko-active.png"
import huntingActive from "../../assets/icons/hunting-active.png"
import hunting from "../../assets/icons/hunting.png"
import bulb from "../../assets/icons/question.png"
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext'

export default function Sidebar({activee}) {
  const {setRotateWheelDeg,setWinningNumber,ref1}=useContext(AppContext)
  return (
    <div className='side'>
      <NavLink onClick={(()=>{setRotateWheelDeg(0);setWinningNumber(null)})} style={{ textDecoration: 'none' }} to="/Roulette">
      <div className="active side-box">
      
      {activee === 1 
        ? <img className="crash-img" src={rouletteActivepng} alt='' /> 
        : <img className="crash-img" src={roulettePng} alt='' />
      }
      
    
    <h4 className={activee===1?"h4-side-active":"h4-side"}>Roulette</h4>
    </div>
      </NavLink>
      <NavLink style={{ textDecoration: 'none' }} to="/Plinko">
      <div className="side-box">
      {activee === 3
          ? <img className="crash-img" src={plinkoActive} alt='' /> 
          : <img className="crash-img" src={plinkopng} alt='' />
        }      
              <h4 className={activee===3?"h4-side-active":"h4-side"}>Plinko</h4>


      </div>
      </NavLink>
      <NavLink style={{ textDecoration: 'none' }} to="/Mines">

      <div className="side-box">
      {activee === 2
          ? <img className="crash-img" src={minesActivePng} alt='' /> 
          : <img className="crash-img" src={minesPng} alt='' />
        }      
              <h4 className={activee===2?"h4-side-active":"h4-side"}>Mines</h4>


      </div>
      </NavLink>
      <NavLink style={{ textDecoration: 'none' }} to="/CashHunt">

      <div className="side-box">
      {activee === 4
          ? <img className="crash-img" src={huntingActive} alt='' /> 
          : <img className="crash-img" src={hunting} alt='' />
        }      
              <h4 className={activee===4?"h4-side-active":"h4-side"}>Cash Hunt</h4>


      </div>
      </NavLink>

      <div className="side-box" onClick={()=>{
        ref1.current.style.zIndex="1000"
      }}>
      
           <img className="crash-img" src={bulb} alt='' /> 
          
              
              <h4 className={"h4-side"}>Game Explanation</h4>


      </div>

    </div>
  )
}
