import React,{useState,useContext} from 'react'
import "./MinesBetCard.css"
import {AppContext} from "../../Context/AppContext"
export default function MinesBetCard() {
    
    const {numOfBombs,setNumOfBombs}=useContext(AppContext);
  return (
    <div className='mines-bet-card'>
        <h3 className="mines-bet-card-h4">Place your bet</h3>
        <h5 className="mines-bet-card-h6">Bet amount</h5>
        <input className="mines-enter-amount" placeholder='Amount'></input>
        <h5 className="mines-bet-card-h6">Bombs amount</h5>
        <div className="mines-enter-bombs" >
            <button className="bombs-btn minus" onClick={()=>{if(numOfBombs>1)setNumOfBombs(numOfBombs-1)}}>-</button>
            <div className="bombs-amount">
                <img className="" src="" />
                <h3 className="">{numOfBombs}</h3>
            </div>
            <button className="bombs-btn plus" onClick={()=>{if(numOfBombs<24)setNumOfBombs(numOfBombs+1)}}>+</button>

        </div>
        <input  className="" type='range' value={numOfBombs}  min={1} max={24}     onChange={(e) => {setNumOfBombs(+e.target.value)}}
        />
        <div className="bombs-div">
            <button className={numOfBombs===1?"bombNum-button-active":"bombNum-button"} onClick={()=>setNumOfBombs(1)}>1</button>
            <button className={numOfBombs===5?"bombNum-button-active":"bombNum-button"} onClick={()=>setNumOfBombs(5)}>5</button>
            <button className={numOfBombs===10?"bombNum-button-active":"bombNum-button"} onClick={()=>setNumOfBombs(10)}>10</button>
            <button className={numOfBombs===24?"bombNum-button-active":"bombNum-button"} onClick={()=>setNumOfBombs(24)}>24</button>
        </div>
        <button className="mines-bet-button"
        
        >Place a bet</button>
    </div>
  )
}
