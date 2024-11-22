import React,{useContext} from 'react'
import "./Roulette.css"
import Navbar from '../../components/NavBar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import PlaceBetCard from '../../components/PlaceBetCard/PlaceBetCard'
import WinningsCard from '../../components/WinningsCard/WinningsCard'
import RouletteNumbers from '../../components/RouletteNumbers/RouletteNumbers'
import Wheel from '../../components/Wheel/Wheel'
import arrow from "../../assets/icons/arrow.png"
import { AppContext } from '../../Context/AppContext'
import capture from "../../assets/icons/Capture3.JPG"
import capture1 from "../../assets/icons/Capture4.JPG"
import capture2 from "../../assets/icons/Capture6.JPG"
import GameExplanation from '../../components/GameExplanation/GameExplanation'
import { Toaster } from 'react-hot-toast'
export default function Roulette() {
const {winningNumber,getBackgroundColor,rouletteResults}=useContext(AppContext)
  return (
    <>
          <div><Toaster position="bottom-center"/></div>
    <div className='roulette-full'>
      <Navbar/>
        <div className="roulette-main">
        <Sidebar activee={1}/>
            <div className="roulette-left-main">
                <PlaceBetCard/>
                <WinningsCard/>
                
            </div>

            <div className="roulette-right-main">
                <RouletteNumbers/>
                <div className="results-text">    {rouletteResults.win ? "You won!":""}
                </div>
                <div className="winning-number"
                style={{background:getBackgroundColor(winningNumber)}}
                >{winningNumber}</div>
                <img className="arrow" alt='' src={arrow} />
                <Wheel/>
            </div>
        </div>
    </div>
    <GameExplanation
    gameName="ROULLETE" 
    h1Card1={"CONFIGURE"} 
    h1Card2={"BET"} 
    h1Card3={"WIN"} 
    h3Card1={"Click on  field you want to bet. You can hover field and winning numbers will be highlited"} 
    h3Card2={"Select amonut of money you want to bet and press BET to play!"} 
    h3Card3={"Depending on a bet you made you win different prizes!"}
    img1={capture}
    img2={capture2}
    img3={capture1}
    />
    </>
  )
}
