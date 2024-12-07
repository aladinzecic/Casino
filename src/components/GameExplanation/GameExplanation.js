import React, { useRef } from 'react'
import "./GameExplanation.css"
import logo from "../../assets/icons/mines-dare-2-win-tile-auth__1_-removebg-preview.png"
import ExplanationCard from '../ExplanationCard/ExplanationCard'
import capture from "../../assets/icons/Capture.JPG"
import capture1 from "../../assets/icons/Capture1.JPG"
import capture2 from "../../assets/icons/Capture2.JPG"
export default function GameExplanation({gameName,h1Card1,h1Card2,h1Card3,h3Card1,h3Card2,h3Card3,img1,img2,img3}) {
    const ref1=useRef(null)
  return (
    <div ref={ref1} className='full-page' onClick={()=>{
            ref1.current.style.zIndex="-1"
    }}>
      <h1 className="">{gameName}</h1>
      <img className="explanation-logo" src={logo} alt='' />
      <div className="explainings">
      <ExplanationCard imgSrc={img1} h1Text={h1Card1} h3Text={h3Card1}/>
      <ExplanationCard imgSrc={img2} h1Text={h1Card2} h3Text={h3Card2}/>
      <ExplanationCard imgSrc={img3} h1Text={h1Card3} h3Text={h3Card3}/>

      </div>
      <h2 className="clk-to-cnt">CLICK TO CONTINUE!</h2>
    </div>
  )
}
