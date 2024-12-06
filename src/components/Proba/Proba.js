import React, { useState, useEffect, useContext, useRef } from "react";
import {motion} from "framer-motion"
import "./Proba.css"
import { AppContext } from "../../Context/AppContext";
export default function Proba({icon1,icon2,icon3,icon4,icon5,icon6,icon7,icon8,way}) {
    const [iconsEven, setIconsEven] = useState([icon1,icon2,icon3,icon4,icon5,icon6,icon7,icon8,icon1]);
    const [iconsOdd, setIconsOdd] = useState([icon1,icon2,icon3,icon4,icon5,icon6,icon7,icon8,icon1,icon2,icon3,icon4,icon5,icon6,icon7,icon8]);
    const [counter, setCounter] = useState(1);
    const {isHuntGameOn,setIsHuntGameOn}=useContext(AppContext)
    const ref1=useRef(null)
    const variants = {
      left: {
        initial: { transform: "translateX(0)" },
        animate: { transform: "translateX(-100%)" },
      },
      right: {
        initial: { transform: "translateX(0)" },
        animate: { transform: "translateX(50%)" },
      },
    };
    





    useEffect(() => {
if(way===0&&isHuntGameOn){
            const interval = setInterval(() => {
          setCounter((prev) => (prev + 1) % iconsEven.length); // Povećava counter na sledeći index
    
          setIconsEven((prevIcons) => {
            // Pomera ikone ulevo i dodaje novu ikonu na desnu stranu
            return [...prevIcons, prevIcons[(counter) % iconsEven.length]];
          });
        }, 125); // Ažurira se svakih 2 sekunde
    
        return () => clearInterval(interval); // Čisti interval kad se komponenta unmountuje
}
else if(way===3&&isHuntGameOn){
            const interval = setInterval(() => {
          setCounter((prev) => (prev + 1) % iconsEven.length); // Povećava counter na sledeći index
    
          setIconsEven((prevIcons) => {
            // Pomera ikone ulevo i dodaje novu ikonu na desnu stranu
            return [...prevIcons, prevIcons[(counter) % iconsEven.length]];
          });
        }, 60); // Ažurira se svakih 2 sekunde
    
        return () => clearInterval(interval); // Čisti interval kad se komponenta unmountuje
}

      }, [counter, iconsEven.length,isHuntGameOn])

      useEffect(()=>{
        if(isHuntGameOn){
          setTimeout(()=>{
            setIsHuntGameOn("ende")
          },5000)
        }
      },[isHuntGameOn])

    
      return (
        <div className="carousel-container">
          <motion.div 
          ref={ref1}
          className={way===1?"carousel-track-right":
          way===2?"carousel-track-right-fast":
          way===3?"carousel-track-left-fast":
          "carousel-track-left"}
          variants={way === 0 || way === 3 ? variants.left : variants.right}
          initial="initial"
          animate={isHuntGameOn||isHuntGameOn==="ende"?"animate":"initial"}
          transition={{
            ease:"linear",
            duration: way===0?1:way===1?2:way===2?1:way===3?0.5:1,
            repeat: way===0?5:way===1?2:way===2?5:way===3?11:1,
            repeatType: "forwards"
          }}
          onAnimationComplete={(()=>{
            if(way===0)
            ref1.current.style.transform=`translateX(${0}px)`
            if(way===1)
            ref1.current.style.transform=`translateX(${0}px)`
            if(way===2)
            ref1.current.style.transform=`translateX(${0}px)`
            if(way===3)
            ref1.current.style.transform=`translateX(${0}px)`
          })}
          >
            {way===1||way===2?iconsOdd.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt={`icon-${index}`}
                className="carousel-icon"
              />
            )):
            iconsEven.map((icon, index) => (
                <img
                  key={index}
                  src={icon}
                  alt={`icon-${index}`}
                  className="carousel-icon"
                />
              ))
            }
          </motion.div>
        </div>
      );
    }