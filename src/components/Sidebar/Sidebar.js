import React from 'react'
import "./Sidebar.css"
import rouletteActivepng from "../../assets/icons/roulette-active.png"
import roulettePng from "../../assets/icons/roulette.png"
import plinkopng from "../../assets/icons/plinko.png"
import minesPng from "../../assets/icons/mines.png"
import minesActivePng from "../../assets/icons/mines-active.png"
import slotpng from "../../assets/icons/slots.png"
export default function Sidebar({activee}) {
  console.log("Activee value: ", activee);
  return (
    <div className='side'>
      <div className="active side-box">
      
        {activee === 1 
          ? <img className="crash-img" src={rouletteActivepng} alt='' /> 
          : <img className="crash-img" src={roulettePng} alt='' />
        }
        
      
      <h4 className={activee===1?"h4-side-active":"h4-side"}>Roulette</h4>
      </div>
      <div className="side-box">
      <img className="crash-img" src={plinkopng} alt=''/>
      <h4 className="h4-side">Plinko</h4>

      </div>
      <div className="side-box">
      {activee === 2
          ? <img className="crash-img" src={minesActivePng} alt='' /> 
          : <img className="crash-img" src={minesPng} alt='' />
        }      
              <h4 className={activee===2?"h4-side-active":"h4-side"}>Mines</h4>


      </div>
      <div className="side-box">
      <img className="crash-img" src={slotpng} alt=''/>
      <h4 className="h4-side">Slots</h4>

      </div>
    </div>
  )
}
