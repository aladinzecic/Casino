import React,{useContext, useEffect} from 'react'
import {AppContext} from "../../Context/AppContext"
import toast from 'react-hot-toast';
import "./CashBetCard.css"
export default function CashBetCard() {
    const {generateGrid,huntBetMoney,arrOfValues,createShuffledArray,setArrOfValues,hideAll,revealAll,isHuntGameOn,setHuntBetMoney,huntBetDifficulty,setHuntBetDifficulty,setIsHuntGameOn}=useContext(AppContext);
    const startAnimation=()=>{
      revealAll()
      setTimeout(()=>{
        hideAll()
      },2000)
      setTimeout(()=>{
        setIsHuntGameOn(true)
      },3500)
      
    }
    useEffect(()=>{
        console.log(arrOfValues)
    },[arrOfValues])
    return (
      <div className='cash-bet-card'>
          <h3 className="cash-bet-card-h4">Place your bet</h3>
          <h5 className="cash-bet-card-h6">Bet amount per bullet</h5>
          <input
          className={"cash-enter-amount"}
          placeholder="Amount"
          type='number'
    onChange={(e) => {
      
      const inputValue = parseFloat(e.target.value) || 0; // Handle NaN cases
      if(inputValue>0)
        setHuntBetMoney(inputValue); // Update only valid values
      
    }}
  />
  
  
          <h5 className="cash-bet-card-h6">Difficulty</h5>
          <div className="bombs-div">
              <button className={huntBetDifficulty==='Low'?"bombNum-button-active":"bombNum-button"} onClick={() => { 
                if (isHuntGameOn!==false) setHuntBetDifficulty('Low');
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
              <button className={huntBetDifficulty==='Medium'?"bombNum-button-active":"bombNum-button"} onClick={() => { 
                if (isHuntGameOn!==false) setHuntBetDifficulty('Medium'); 
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
              <button className={huntBetDifficulty==='High'?"bombNum-button-active":"bombNum-button"} onClick={() => { 
                if (isHuntGameOn!==false) setHuntBetDifficulty('High'); 
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
          <button className="place-bet-button" 
          onClick={() => {
            if(huntBetMoney){
              generateGrid()
              if(isHuntGameOn==="ender"||isHuntGameOn==="ende")
              setIsHuntGameOn(false)
              setArrOfValues(createShuffledArray()); // Ažurira niz sa novim vrednostima
              startAnimation(); // Pokreće animaciju
            }
            else{
              toast.error('Unesi genge momak!', {
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
          >Start game</button>
          
      </div>
    )
}
