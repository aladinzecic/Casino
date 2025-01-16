import React, {useContext } from 'react'
import "./WinningsCard.css"
import { AppContext } from '../../Context/AppContext';
export default function WinningsCard() {
  const {betsRef,betsContentMines}=useContext(AppContext)

  return (
    <div ref={betsRef} className='winnings-card'>
      <h3 id='right' className="winnings-card-h3">Your recent bets</h3>
      <div className="winnings-card-header">
        <h3 className="winnings-card-h3">Bet</h3>
        <h3 className="winnings-card-h3">Coef</h3>
        <h3 className="winnings-card-h3">Payout</h3>
      </div>

      {betsContentMines}
      
    </div>
  )
}
