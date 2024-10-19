import React,{useContext,useState} from 'react'
import "./PlaceBetCard.css"
import { AppContext } from '../../Context/AppContext'

export default function PlaceBetCard() {
const [lastNumIndex,setLastNumIndex]=useState(0)
  const {setRotateWheelDeg,wheelNumbers,rotateWheelDeg,setWinningNumber}=useContext(AppContext)

  function CalculateSpinningDeg(numb){
    const degPerNum=360/37;
    console.log(degPerNum)
    const index = wheelNumbers.findIndex(num => num === numb);  
    const rotatingDeg=(Math.floor(Math.random()*2)+3)*360+index*degPerNum- lastNumIndex*degPerNum
    setRotateWheelDeg(rotateWheelDeg-rotatingDeg)
    setLastNumIndex(index)
    
  }
  function PlaceBet(){
    const num=Math.floor(Math.random()*37)
    setWinningNumber(null)
    CalculateSpinningDeg(num)
    const interval=setTimeout(() => {
      setWinningNumber(num)
  
    }, 10000);
    return () => {
      clearTimeout(interval)
  };
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
