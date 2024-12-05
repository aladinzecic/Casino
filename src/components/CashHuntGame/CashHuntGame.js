import React, { useEffect, useState } from 'react'
import "./CashHuntGame.css"
import balloon from "../../assets/CashHuntIcons/air-hot-balloon.png"
import cactus from "../../assets/CashHuntIcons/cactus.png"
import bell from "../../assets/CashHuntIcons/christmas-bell.png"
import clock from "../../assets/CashHuntIcons/clock.png"
import gift from "../../assets/CashHuntIcons/gift-box.png"
import rabbit from "../../assets/CashHuntIcons/rabbit.png"
import chest from "../../assets/CashHuntIcons/top-hat.png"
import hat from "../../assets/CashHuntIcons/treasure.png"
export default function CashHuntGame() {
    const cashHuntIcons=[balloon,cactus,bell,clock,gift,rabbit,chest,hat]
    const [gridData,setGridData]=useState([])
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

      useEffect(()=>{
        setGridData(generateGridData())
      },[])
      return (
        <div className='grid-container'

        >
          {gridData.map((icon, index) => (
            <div key={index} className='grid-cell'>
              <img className="grid-img" src={icon} />
            </div>
          ))}
        </div>
      );
}
