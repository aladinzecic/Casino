import React, { useContext, useEffect, useRef, useState } from 'react'
import "./CashHuntGame.css"
import balloon from "../../assets/CashHuntIcons/air-hot-balloon.png"
import cactus from "../../assets/CashHuntIcons/cactus.png"
import bell from "../../assets/CashHuntIcons/christmas-bell.png"
import clock from "../../assets/CashHuntIcons/clock.png"
import gift from "../../assets/CashHuntIcons/gift-box.png"
import rabbit from "../../assets/CashHuntIcons/rabbit.png"
import chest from "../../assets/CashHuntIcons/top-hat.png"
import hat from "../../assets/CashHuntIcons/treasure.png"
import splash from "../../assets/CashHuntIcons/splash.png"
import Proba from '../Proba/Proba'
import { AppContext } from '../../Context/AppContext'

export default function CashHuntGame() {
  const {isHuntGameOn}=useContext(AppContext)
    const div=useRef(null)
    const cashHuntIcons=[balloon,cactus,bell,clock,gift,rabbit,chest,hat]
    const [gridData,setGridData]=useState([])
    const [grid,setGrid]=useState([])
    const [splashPosition,setSplashPosition]=useState([0,0])
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };

      const generateGridData = () => {
        const gridData = [];
        cashHuntIcons.forEach((icon) => {
          for (let i = 0; i < 8; i++) {
            gridData.push(icon);
          }
        });
        return shuffleArray(gridData);
      };

      const generateGrid = () =>{
        const ProbaComponents = [];
        console.log(gridData[0])
            for (let i = 0; i < 8; i++) {
                ProbaComponents.push(
                    <Proba
                        key={i}
                        keyy={i}
                        icon1={gridData[i * 8]}
                        icon2={gridData[i * 8 + 1]}
                        icon3={gridData[i * 8 + 2]}
                        icon4={gridData[i * 8 + 3]}
                        icon5={gridData[i * 8 + 4]}
                        icon6={gridData[i * 8 + 5]}
                        icon7={gridData[i * 8 + 6]}
                        icon8={gridData[i * 8 + 7]}
                        way={i===1||i===5?2:i===0||i===4?3:i % 2}
                    />
                );
            }
            setGrid(ProbaComponents)
      }


      const handleSplash = (event) => {

        const mouseX = event.clientX;
        const mouseY = event.clientY;
        // Offset to center the splash image around the cursor
        const splashSize = 50; // Size of the splash image
        setSplashPosition([mouseX-splashSize/2-440, mouseY-splashSize/2-20-(10 * window.innerHeight) / 100]);
    };


      useEffect(()=>{
        setGridData(generateGridData())
      },[])

      useEffect(() => {
        if (gridData.length > 0) {
            generateGrid();
        }
    }, [gridData]);

      return (
        <>
        {/* <img
        className="splash-img"
        src={splash}
        alt="Splash"
        style={{
          position: "absolute",
          top: `${splashPosition[1]}px`,
          left: `${splashPosition[0]}px`,
          height:"50px",
          width:"50px",
          zIndex:"10",
          pointerEvents: "none", // Prevent the splash image from interfering with clicks
        }}
      /> */}
        <div className='grid-container'
    onClick={handleSplash}
    ref={div}
>
    {
        grid
    }
</div>
        </>
      );
}
