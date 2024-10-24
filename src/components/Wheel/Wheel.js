import React,{useContext,useEffect} from 'react'
import "./Wheel.css"
import {motion} from "framer-motion"
import { AppContext } from '../../Context/AppContext';

export default function Wheel() {
    const {wheelNumbers,rotateWheelDeg,numberOfDivs,winningNumber,getBackgroundColor}=useContext(AppContext)

    const variants1 = {
        initial: {
            transform: `rotate(0deg)`  // Dodaj 'deg' za ispravan CSS
        },
        animate: {
            transform: `rotate(${rotateWheelDeg}deg)`  // 'rotateWheelDeg' treba biti broj i 'deg' kao jedinica
        },
    };
    

      useEffect(()=>{
console.log(winningNumber)
      },[winningNumber])

  return (
    <motion.div className="circle-container"
    variants={variants1}
    initial="initial"
    animate="animate"
    transition={{ duration:"10" , ease:[.01,.9,.83,1] }}

    >
        {wheelNumbers.map((num, index) => (
        <div key={num} className="circle-segment" style={{
          transform: `rotate(${(360 / numberOfDivs) * index}deg)`,
          background: getBackgroundColor(num)
        }}>
          {num}
        </div>
      ))}
    </motion.div>
  )
}
