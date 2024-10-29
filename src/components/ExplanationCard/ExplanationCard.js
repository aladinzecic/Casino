import React from 'react'
import "./ExplanationCard.css"
export default function ExplanationCard({imgSrc,h1Text,h3Text}) {
  return (
    <div className='explanation-card'>
      <img className="" src={imgSrc} alt=''/>
      <h2 className="">{h1Text}</h2>
      <h4 className="">{h3Text}</h4>
    </div>
  )
}
