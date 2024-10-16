import React,{useContext,useEffect,useState} from 'react'
import "./PlaceBetCard.css"
import { AppContext } from '../../Context/AppContext'

export default function PlaceBetCard() {
const [rotatingCircles,setRotatingCircles]=useState(null)
  const {setIsSpinning,setRotateWheelDeg,wheelNumbers,rotateWheelDeg}=useContext(AppContext)
  useEffect(()=>{
    if (PlaceBet) {
      const timeoutId = setTimeout(() => {
          // Nakon 10 sekundi poziva se setRotateWheelDeg
          setRotateWheelDeg(rotateWheelDeg-rotatingCircles); // Dodaj 360 stepeni za još jedan krug
      }, 10000); // 10 sekundi

      // Čisti timeout kada se komponenta demontira
      return () => clearTimeout(timeoutId);
  }
  },[PlaceBet])
  function CalculateSpinningDeg(numb){
    const degPerNum=360/37;
    console.log(degPerNum)
    const index = wheelNumbers.findIndex(num => num === numb);  
    setRotatingCircles(Math.floor(Math.random()*2)+3)
    const rotatingDeg=rotatingCircles*360+index*degPerNum
    setRotateWheelDeg(-rotatingDeg)
  }
  function PlaceBet(){
    const num=Math.floor(Math.random()*37)
    console.log(num)
    CalculateSpinningDeg(num)
    setIsSpinning(true)
  }
  return (
    <div className='place-bet-card'>
        <h3 className="place-bet-card-h4">Place your bet</h3>
        <h5 className="place-bet-card-h6">Bet amount</h5>
        <input className="card-enter-amount" placeholder='Amount'></input>
        <div className="percent-div">
            <button className="percent-button">1/2</button>
            <button className="percent-button">1/3</button>
            <button className="percent-button">1/4</button>
            <button className="percent-button">Full</button>
        </div>
        <button className="place-bet-button"
        onClick={()=>PlaceBet()}
        >Place a bet</button>
    </div>
  )
}
