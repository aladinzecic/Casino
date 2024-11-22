import React, { useContext } from 'react'
import PlinkoScene from '../../components/PlinkoScene/PlinkoScene'
import WinningsCard from '../../components/WinningsCard/WinningsCard'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/NavBar/Navbar'
import { Toaster } from 'react-hot-toast'
import { AppContext } from '../../Context/AppContext'
import "./Plinko.css"
import PlinkoBetCard from '../../components/PlinkoBetCard/PlinkoBetCard'
import GameExplanation from '../../components/GameExplanation/GameExplanation'
import capture7 from "../../assets/icons/Capture7.JPG"
import capture8 from "../../assets/icons/Capture8.JPG"
import capture9 from "../../assets/icons/Capture9.JPG"
export default function Plinko() {
  const {makeBall}=useContext(AppContext)
  return (
    <>
    <div className='plinko-full'>
      <div><Toaster position="bottom-center"/></div>
      <Navbar/>
        <div className="plinko-main">
        <Sidebar activee={3}/>
            <div className="plinko-left-main">
                <PlinkoBetCard/>
                <WinningsCard/>
            </div>

            <div className="plinko-right-main">
              <PlinkoScene/>
            </div>
        </div>
    </div>
    <GameExplanation
    gameName="PLINKO" 
    h1Card1={"CONFIGURE"} 
    h1Card2={"BET"} 
    h1Card3={"WIN"} 
    h3Card1={"Choose bet amount and difficulty you want, the higher the more money you can win"} 
    h3Card2={"Click Add Ball and the ball will be droped from the top!"} 
    h3Card3={"Depending on a difficulty and where ball land you win different prizes!"}
    img1={capture7}
    img2={capture8}
    img3={capture9}
    />
</>
  )
}
