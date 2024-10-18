import React from 'react'
import "./Roulette.css"
import Navbar from '../../components/NavBar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import PlaceBetCard from '../../components/PlaceBetCard/PlaceBetCard'
import WinningsCard from '../../components/WinningsCard/WinningsCard'
import RouletteNumbers from '../../components/RouletteNumbers/RouletteNumbers'
import Wheel from '../../components/Wheel/Wheel'
import arrow from "../../assets/icons/arrow.png"
export default function Roulette() {

  return (
    <div className='roulette-full'>
      <Navbar/>
        <div className="roulette-main">
        <Sidebar/>
            <div className="roulette-left-main">
                <PlaceBetCard/>
                <WinningsCard/>
                
            </div>

            <div className="roulette-right-main">
                <RouletteNumbers/>
                <img className="arrow" alt='' src={arrow} />
                <Wheel/>
            </div>
        </div>
    </div>
  )
}
