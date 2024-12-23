import React, { useState, useEffect, useContext, useRef } from "react";
import {motion} from "framer-motion"
import "./Proba.css"
import { AppContext } from "../../Context/AppContext";
import toast from "react-hot-toast";
export default function Proba({icon1,icon2,icon3,icon4,icon5,icon6,icon7,icon8,way,keyy}) {
    const [iconsEven, setIconsEven] = useState([icon1,icon2,icon3,icon4,icon5,icon6,icon7,icon8,icon1]);
    const [iconsOdd, setIconsOdd] = useState([icon1,icon2,icon3,icon4,icon5,icon6,icon7,icon8,icon1,icon2,icon3,icon4,icon5,icon6,icon7,icon8]);
    const [counter, setCounter] = useState(1);
    const {money,huntBetMoney,setMoney,isHuntGameOn,setIsHuntGameOn,arrOfClicked,setArrOfClicked,arrOfValues}=useContext(AppContext)
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
if(way===0&&isHuntGameOn===true){
            const interval = setInterval(() => {
          setCounter((prev) => (prev + 1) % iconsEven.length); // Povećava counter na sledeći index
    
          setIconsEven((prevIcons) => {
            // Pomera ikone ulevo i dodaje novu ikonu na desnu stranu
            return [...prevIcons, prevIcons[(counter) % iconsEven.length]];
          });
        }, 125); // Ažurira se svakih 2 sekunde
    
        return () => clearInterval(interval); // Čisti interval kad se komponenta unmountuje
}
else if(way===3&&isHuntGameOn===true){
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
              <>
              <motion.div

            style={{
              position: "absolute",
              zIndex:"-10",
              top: 0,
              left: 0,
              marginLeft: `${55 * index}px`, // Dodaje "px" jedinicu
              borderRadius: `5px`, // Dodaje "px" jedinicu
              marginTop: `${0}px`, // Dodaje "px" jedinicu
              width: "45px",
              height: "45px",
              backgroundColor: "#f0f0f0", // Pozadina za broj
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.4rem",
              fontWeight: "bold",
              backfaceVisibility: "hidden", // Sakriva stranu kada nije okrenuta
            }}
          >
{way === 2
  ? arrOfValues[keyy * 8 + index-8] // Ako je way 2, koristi ovu vrednost
  : arrOfValues[keyy * 8 + index ] // Ako nije, koristi ovu (minus 8)
}
          </motion.div>
          <motion.img
              onClick={()=>{
                if (way===2) {
                  if(isHuntGameOn){

                    console.log(keyy*8+index-8)
                    setArrOfClicked((prev)=>[...prev,keyy*8+index-8])
                    setMoney((prev)=>prev+arrOfValues[keyy*8+index-8])
                  }
                  else{
                    toast.error('zapocni grui!', {
                      style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#713200',
                        fontSize: '18px'
                      },
                      iconTheme: {
                        primary: '#713200',
                        secondary: '#FFFAEE',
                      },
                    });
                  }

                }
                else{
                  if(isHuntGameOn){

                    console.log(keyy*8+index)
                    setArrOfClicked((prev)=>[...prev,keyy*8+index])
                    setMoney((prev)=>prev+arrOfValues[keyy*8+index])
                  }
                  else{
                    toast.error('zapocni grui!', {
                      style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#713200',
                        fontSize: '18px'
                      },
                      iconTheme: {
                        primary: '#713200',
                        secondary: '#FFFAEE',
                      },
                    });
                  }

                }
              }}
              key={keyy*8+index}
              src={icon}
              alt={`icon-${index}`}
              className="carousel-icon"
              animate={
                arrOfClicked.some((item) =>
                  way === 2
                    ? item === keyy * 8 + index - 8
                    : item === keyy * 8 + index
                )
                  ? { rotateX: -90 }
                  : { rotateX: 0, opacity: 1 }
              }
                  transition={{ duration: 0.4, ease: "linear" }}
                  style={{
                    transformOrigin: "center bottom", // Podešava ose rotacije
                  }}
              />
              </>
              
            )):
            iconsEven.map((icon, index) => (
              <>
              <motion.div
            style={{
              position: "absolute",
              zIndex:"-10",
              top: 0,
              left: 0,
              marginLeft: `${55 * index}px`, // Dodaje "px" jedinicu
              borderRadius: `5px`, // Dodaje "px" jedinicu
              marginTop: `${0}px`, // Dodaje "px" jedinicu
              width: "45px",
              height: "45px",
              backgroundColor: "#f0f0f0", // Pozadina za broj
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.4rem",
              fontWeight: "bold",
              backfaceVisibility: "hidden", // Sakriva stranu kada nije okrenuta
            }}

          >
            {arrOfValues[keyy*8+index]}
            </motion.div>
          <motion.img
              key={keyy*8+index}
              onClick={()=>{
                if(!isHuntGameOn){
                  toast.error('zapocni grui!', {
                    style: {
                      border: '1px solid #713200',
                      padding: '16px',
                      color: '#713200',
                      fontSize: '18px'
                    },
                    iconTheme: {
                      primary: '#713200',
                      secondary: '#FFFAEE',
                    },
                  });
                }
                else if(money>=huntBetMoney){
                  setArrOfClicked((prev)=>[...prev,keyy*8+index])
                  setMoney((prev)=>prev+arrOfValues[keyy*8+index])
                }
                else{
                  toast.error('nemas para geng!', {
                    style: {
                      border: '1px solid #713200',
                      padding: '16px',
                      color: '#713200',
                      fontSize: '18px'
                    },
                    iconTheme: {
                      primary: '#713200',
                      secondary: '#FFFAEE',
                    },
                  });
                }

              }

              }
                  src={icon}
                  alt={`icon-${index}`}
                  className="carousel-icon"
                  animate={arrOfClicked.some((item) => item === keyy * 8 + index)
                    ? { rotateX: -90} : { rotateX: 0, opacity: 1 }}
                  transition={{ duration: 0.4, ease: "linear" }}
                  style={{
                    transformOrigin: "center bottom", // Podešava ose rotacije
                  }}
                />
              </>
              
              ))
            }
          </motion.div>
        </div>
      );
    }