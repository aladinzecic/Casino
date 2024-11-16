import React,{useState,useContext, useEffect} from 'react'
import "./PlinkoBetCard.css"
import {AppContext} from "../../Context/AppContext"
export default function PlinkoBetCard() {
    const {setMinesGameOn,plinkoDifficulty,setPlinkoDifficulty,ballsAmount,setBallsAmount}=useContext(AppContext);

  return (
    <div className='plinko-bet-card'>
        <h3 className="plinko-bet-card-h4">Place your bet</h3>
        <h5 className="plinko-bet-card-h6">Bet amount</h5>
        <input className="plinko-enter-amount" placeholder='Amount'></input>


        <h5 className="plinko-bet-card-h6">Difficulty</h5>
        <div className="bombs-div">
            <button className={plinkoDifficulty==='Low'?"bombNum-button-active":"bombNum-button"} onClick={()=>setPlinkoDifficulty('Low')}>Low</button>
            <button className={plinkoDifficulty==='Medium'?"bombNum-button-active":"bombNum-button"} onClick={()=>setPlinkoDifficulty('Medium')}>Medium</button>
            <button className={plinkoDifficulty==='High'?"bombNum-button-active":"bombNum-button"} onClick={()=>setPlinkoDifficulty('High')}>High</button>
        </div>
        <button className="plinko-bet-button"
        onClick={()=>setMinesGameOn(true)}
        >Place a bet</button>
    </div>
  )
}
