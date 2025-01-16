import React, { useContext, useEffect, useRef } from 'react'
import "./CashHuntGame.css"
import { AppContext } from '../../Context/AppContext'

export default function CashHuntGame() {
  const {generateGrid,gridData,grid,setGridData,generateGridData,isHuntGameOn,createShuffledArray,setArrOfValues}=useContext(AppContext)
    const div=useRef(null)
    useEffect(()=>{
      console.log(grid)
    },[grid])



      useEffect(()=>{
        setGridData(generateGridData())
        setArrOfValues(createShuffledArray)
        // eslint-disable-next-line
      },[])
      useEffect(()=>{
        setArrOfValues(createShuffledArray)
        // eslint-disable-next-line
      },[isHuntGameOn])

      useEffect(() => {
        if (gridData.length > 0) {
            generateGrid();
        }
        // eslint-disable-next-line
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
        <div className='grid-container'    ref={div}
>
    {
        grid
    }
</div>
        </>
      );
}
