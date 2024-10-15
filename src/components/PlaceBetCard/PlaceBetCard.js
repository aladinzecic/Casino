import React from 'react'
import "./PlaceBetCard.css"

export default function PlaceBetCard() {
  return (
    <div className='place-bet-card'>
        <h4 className="place-bet-card-h4">Place your bet</h4>
        <h6 className="place-bet-card-h6">Bet amount</h6>
        <input className="card-enter-amount" placeholder='Amount'></input>
        <div className="percent-div">
            <button className="percent-button">1/2</button>
            <button className="percent-button">1/3</button>
            <button className="percent-button">1/4</button>
            <button className="percent-button">Full</button>
        </div>
        <button className="place-bet-button">Place a bet</button>
    </div>
  )
}
