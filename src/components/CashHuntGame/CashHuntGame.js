import React, { useContext, useEffect, useRef, useState } from 'react'
import "./CashHuntGame.css"
import { AppContext } from '../../Context/AppContext'

export default function CashHuntGame() {
  const {generateGrid,gridData,grid,setGridData,gridDatagenerateGrid,generateGridData,isHuntGameOn,huntBetMoney,createShuffledArray,setArrOfValues,arrOfValues}=useContext(AppContext)
    const div=useRef(null)
    const [splashPosition,setSplashPosition]=useState([0,0])
    useEffect(()=>{
      console.log(grid)
    },[grid])

      


      const handleSplash = (event) => {

        const mouseX = event.clientX;
        const mouseY = event.clientY;
        // Offset to center the splash image around the cursor
        const splashSize = 50; // Size of the splash image
        setSplashPosition([mouseX-splashSize/2-440, mouseY-splashSize/2-20-(10 * window.innerHeight) / 100]);
    };


      useEffect(()=>{
        setGridData(generateGridData())
        setArrOfValues(createShuffledArray)
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
