import React, { useEffect, useContext } from 'react'
import "./WinningsCardRoulette.css"
import { AppContext } from '../../Context/AppContext';
export default function WinningsCardRoulette() {
  const {betsRef,betsContentRoulette,betsRefRoulette}=useContext(AppContext)

  return (
    <div ref={betsRefRoulette} className='winnings-card'>
      <h3 id='right' className="winnings-card-h3">Your recent bets</h3>
      <div className="winnings-card-header">
        <h3 className="winnings-card-h3">Bet</h3>
        <h3 className="winnings-card-h3">Field</h3>
        <h3 className="winnings-card-h3">Coef</h3>
        <h3 className="winnings-card-h3">Payout</h3>
      </div>

      {betsContentRoulette}
      
    </div>
  )
}
