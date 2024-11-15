import React, { useContext } from 'react'
import PlinkoScene from '../../components/PlinkoScene/PlinkoScene'
import MinesBetCard from '../../components/MinesBetCard/MinesBetCard'
import WinningsCard from '../../components/WinningsCard/WinningsCard'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/NavBar/Navbar'
import { Toaster } from 'react-hot-toast'
import { AppContext } from '../../Context/AppContext'
import "./Plinko.css"
export default function Plinko() {
  const {makeBall}=useContext(AppContext)
  return (
    <>
<div className='plinko-full'>
      <div><Toaster position="bottom-center"/></div>
      <Navbar/>
        <div className="plinko-main">
        <Sidebar activee={1}/>
            <div className="plinko-left-main">
                <MinesBetCard/>
                <WinningsCard/>
            </div>

            <div className="plinko-right-main">
              <PlinkoScene/>
            </div>
        </div>
    </div>

</>
  )
}
