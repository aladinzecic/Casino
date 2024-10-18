import React,{useContext,useEffect} from 'react'
import "./Wheel.css"
import {motion} from "framer-motion"
import { AppContext } from '../../Context/AppContext';

export default function Wheel() {
    const {isSpinning,wheelNumbers,rotateWheelDeg}=useContext(AppContext)
    const numberOfDivs=37;
    const roseNumbers=[1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]
    const purpleNumbers=[2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35]
    const variants1 = {
        initial: {
            transform: `rotate(0deg)`  // Dodaj 'deg' za ispravan CSS
        },
        animate: {
            transform: `rotate(${rotateWheelDeg}deg)`  // 'rotateWheelDeg' treba biti broj i 'deg' kao jedinica
        },
    };
    

      useEffect(()=>{
console.log(rotateWheelDeg)
      },[rotateWheelDeg])
    const getBackgroundColor = (number) => {
        if (roseNumbers.includes(number)) {
          return '#BC4EFF';
        } else if (purpleNumbers.includes(number)) {
          return '#461797';
        }
        else return "#0baf34"
      };
  return (
    <motion.div className="circle-container"
    variants={variants1}
    initial="initial"
    animate={isSpinning?"animate":"initial"}
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
