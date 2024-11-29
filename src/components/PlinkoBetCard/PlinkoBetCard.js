import React,{useState,useContext, useEffect} from 'react'
import "./PlinkoBetCard.css"
import {AppContext} from "../../Context/AppContext"
import toast from 'react-hot-toast';
export default function PlinkoBetCard() {
  const {plinkoBetMoney,setPlinkoBetMoney,plinkoDifficulty,setPlinkoDifficulty,numOfPlinkoBalls}=useContext(AppContext);
  useEffect(()=>{
    console.log(plinkoBetMoney)
  },[plinkoBetMoney])
  return (
    <div className='plinko-bet-card'>
        <h3 className="plinko-bet-card-h4">Place your bet</h3>
        <h5 className="plinko-bet-card-h6">Bet amount</h5>
        <input
        className={"plinko-enter-amount"}
        placeholder="Amount"
        type='number'
  onChange={(e) => {
    
    const inputValue = parseFloat(e.target.value) || 0; // Handle NaN cases
    if(inputValue>0)
      setPlinkoBetMoney(inputValue); // Update only valid values
    
  }}
/>


        <h5 className="plinko-bet-card-h6">Difficulty</h5>
        <div className="bombs-div">
            <button className={plinkoDifficulty==='Low'?"bombNum-button-active":"bombNum-button"} onClick={() => { 
              console.log(numOfPlinkoBalls)
              if (numOfPlinkoBalls===0) setPlinkoDifficulty('Low');
              else toast.error('Game is not finished!', {
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
              }}>Low</button>
            <button className={plinkoDifficulty==='Medium'?"bombNum-button-active":"bombNum-button"} onClick={() => { 
              if (numOfPlinkoBalls===0) setPlinkoDifficulty('Medium'); 
              else toast.error('Game is not finished!', {
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
              }}            >Medium</button>
            <button className={plinkoDifficulty==='High'?"bombNum-button-active":"bombNum-button"} onClick={() => { 
              if (numOfPlinkoBalls===0) setPlinkoDifficulty('High'); 
              else toast.error('Game is not finished!', {
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
              }}            >High</button>
        </div>
        
    </div>
  )
}
