import React, { useContext, useEffect, useState } from 'react'
import "./GameExplanation.css"
import logo from "../../assets/icons/mines-dare-2-win-tile-auth__1_-removebg-preview.png"
import ExplanationCard from '../ExplanationCard/ExplanationCard'
import { AppContext } from '../../Context/AppContext'
import axios from "axios"
export default function GameExplanation({gameName,h1Card1,h1Card2,h1Card3,h3Card1,h3Card2,h3Card3,img1,img2,img3}) {
  const {id,ref1}=useContext(AppContext)
    const [showPage, setShowPage] = useState(false);

    const updatePage= async()=>{
      try{
        const response= await axios.post("https://casino-backend-s1l5.onrender.com/auth/updatePage",{userId:id,page:gameName})
        console.log(response)
      }
      catch(err){
          console.log(err)
      }
    }

    const getPage= async()=>{
      try{
        const response= await axios.get("https://casino-backend-s1l5.onrender.com/auth/getPage",{
          params: {
            userId: id,
            page: gameName
        }
        })
        console.log(response)
        setShowPage(response.data)
        console.log(response.data)
      }
      catch(err){
          console.log(err)
      }
    }
    useEffect(() => {
      if (id) {
        getPage();
      }
      // eslint-disable-next-line
    }, [id]);
  return (
    <>
    {<div ref={ref1} style={{ zIndex: showPage === 1 ? -1 : 1000 }}
 className='full-page' onClick={()=>{
            ref1.current.style.zIndex="-1"
            updatePage()
    }}>
      <h1 className="">{gameName}</h1>
      <img className="explanation-logo" src={logo} alt='' />
      <div className="explainings">
      <ExplanationCard imgSrc={img1} h1Text={h1Card1} h3Text={h3Card1}/>
      <ExplanationCard imgSrc={img2} h1Text={h1Card2} h3Text={h3Card2}/>
      <ExplanationCard imgSrc={img3} h1Text={h1Card3} h3Text={h3Card3}/>

      </div>
      <h2 className="clk-to-cnt">CLICK TO CONTINUE!</h2>
    </div>}
    </>
    
  )
}
