import React,{useContext,useRef,useState} from 'react'
import "./PlaceBetCard.css"
import { AppContext } from '../../Context/AppContext'
import toast from 'react-hot-toast';

export default function PlaceBetCard() {
const [lastNumIndex,setLastNumIndex]=useState(0)
const [userMoneyBet,setUserMoneyBet]=useState(0)
  const {money,setMoney,setMoneyButtons,moneyButtons,setRotateWheelDeg,wheelNumbers,rotateWheelDeg,setWinningNumber,winCheck,userBet,setRouletteResults}=useContext(AppContext)
  const inputRef=useRef(null)
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
    setRouletteResults({
      money:0,
      win:false
  });
    CalculateSpinningDeg(num)
    const interval=setTimeout(() => {
      setWinningNumber(num)
      if(userMoneyBet){
      winCheck(userMoneyBet,num,userBet)
      }
      else{
        if(moneyButtons==="Full")
        winCheck(money,num,userBet)
      else if(moneyButtons==="1/2")
        winCheck(money/2,num,userBet)
      else if(moneyButtons==="1/3")
        winCheck(money/3,num,userBet)
      else if(moneyButtons==="1/4")
        winCheck(money/4,num,userBet)
      }
    }, 10000);
    return () => {
      clearTimeout(interval)
  };
  }
  return (
    <div className='place-bet-card'>
        <h3 className="place-bet-card-h4">Place your bet</h3>
        <h5 className="place-bet-card-h6">Bet amount</h5>
        <input
        ref={inputRef}
        type='number'
  className={userMoneyBet?"card-enter-amount-active":"card-enter-amount"}
  placeholder="Amount"
  onChange={(e) => {
    const inputValue = parseFloat(e.target.value) || 0; // Handle NaN cases
    
      setUserMoneyBet(inputValue); // Update only valid values
    
  }}
/>

        <div className="percent-div">
            <button onClick={()=>{setMoneyButtons("1/2") ;setUserMoneyBet(0); inputRef.current.value=""}} className={moneyButtons==="1/2"&&!userMoneyBet?"percent-button-active":"percent-button"}>1/2</button>
            <button onClick={()=>{setMoneyButtons("1/3") ;setUserMoneyBet(0); inputRef.current.value=""}} className={moneyButtons==="1/3"&&!userMoneyBet?"percent-button-active":"percent-button"}>1/3</button>
            <button onClick={()=>{setMoneyButtons("1/4") ;setUserMoneyBet(0); inputRef.current.value=""}} className={moneyButtons==="1/4"&&!userMoneyBet?"percent-button-active":"percent-button"}>1/4</button>
            <button onClick={()=>{setMoneyButtons("Full") ;setUserMoneyBet(0); inputRef.current.value=""}} className={moneyButtons==="Full"&&!userMoneyBet?"percent-button-active":"percent-button"}>Full</button>
        </div>
        <button className="place-bet-button"
        onClick={()=>{
          if(userMoneyBet<=money&&userBet!==-1){
          PlaceBet()
          if(userMoneyBet)
          setMoney(money-userMoneyBet)
          else{
            if(moneyButtons==="Full")
              setMoney(0)
            else if(moneyButtons==="1/2")
              setMoney(money/2)
            else if(moneyButtons==="1/3")
              setMoney(money-money/3)
            else if(moneyButtons==="1/4")
              setMoney(money-money/4)
          }
          }
          else if(userBet===-1){
            toast.error('Place chips on field you want!', {
              style: {
                border: '1px solid #713200',
                padding: '16px',
                color: '#713200',
                fontSize: '18px'
              },
              iconTheme: {
                primary: '#713200',
                secondary: '#FFFAEE',
              },
            });
          }
          else{
            toast.error('Not enough money.', {
              style: {
                border: '1px solid #713200',
                padding: '16px',
                color: '#713200',
                fontSize: '18px'
              },
              iconTheme: {
                primary: '#713200',
                secondary: '#FFFAEE',
              },
            });
          }
        }}
        >Place a bet</button>
    </div>
  )
}
