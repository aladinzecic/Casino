import React from 'react'
import "./Mines.css"
import WinningsCard from '../../components/WinningsCard/WinningsCard'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/NavBar/Navbar'
import MinesBetCard from '../../components/MinesBetCard/MinesBetCard'
import MinesTable from '../../components/MinesTable/MinesTable'
export default function Mines() {
  return (
<div className='mines-full'>
      <Navbar/>
        <div className="mines-main">
        <Sidebar activee={2}/>
            <div className="mines-left-main">
                <MinesBetCard/>
                <WinningsCard/>
            </div>

            <div className="mines-right-main">
              <MinesTable/>
            </div>
        </div>
    </div>
  )
}
