import React,{useContext} from 'react'
import {AppContext} from "../../Context/AppContext"
import toast from 'react-hot-toast';
import "./CashBetCard.css"
export default function CashBetCard() {
    const {isHuntGameOn,setHuntBetMoney,huntBetDifficulty,setHuntBetDifficulty,setIsHuntGameOn}=useContext(AppContext);

    return (
      <div className='cash-bet-card'>
          <h3 className="cash-bet-card-h4">Place your bet</h3>
          <h5 className="cash-bet-card-h6">Bet amount</h5>
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
                if (!isHuntGameOn) setHuntBetDifficulty('Low');
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
                if (!isHuntGameOn) setHuntBetDifficulty('Medium'); 
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
                if (!isHuntGameOn) setHuntBetDifficulty('High'); 
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
          <button className="place-bet-button" onClick={()=>setIsHuntGameOn(true)}>Start game</button>
          
      </div>
    )
}
