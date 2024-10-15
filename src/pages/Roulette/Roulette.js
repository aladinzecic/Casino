import React from 'react'
import "./Roulette.css"
import Navbar from '../../components/NavBar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import PlaceBetCard from '../../components/PlaceBetCard/PlaceBetCard'
import WinningsCard from '../../components/WinningsCard/WinningsCard'
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
            </div>
        </div>
    </div>
  )
}
