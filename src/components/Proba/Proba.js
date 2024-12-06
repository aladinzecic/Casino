import React, { useState, useEffect } from "react";

import "./Proba.css"
export default function Proba({icon1,icon2,icon3,icon4,icon5,icon6,icon7,icon8,way}) {
    const [iconsEven, setIconsEven] = useState([icon1,icon2,icon3,icon4,icon5,icon6,icon7,icon8,icon1]);
    const [iconsOdd, setIconsOdd] = useState([icon1,icon2,icon3,icon4,icon5,icon6,icon7,icon8,icon1,icon2,icon3,icon4,icon5,icon6,icon7,icon8]);
    const [counter, setCounter] = useState(1);
    useEffect(() => {

// if(way===0){
//             const interval = setInterval(() => {
//           setCounter((prev) => (prev + 1) % iconsEven.length); // Povećava counter na sledeći index
    
//           setIconsEven((prevIcons) => {
//             // Pomera ikone ulevo i dodaje novu ikonu na desnu stranu
//             return [...prevIcons, prevIcons[(counter) % iconsEven.length]];
//           });
//         }, 125); // Ažurira se svakih 2 sekunde
    
//         return () => clearInterval(interval); // Čisti interval kad se komponenta unmountuje
// }
// else if(way===3){
//             const interval = setInterval(() => {
//           setCounter((prev) => (prev + 1) % iconsEven.length); // Povećava counter na sledeći index
    
//           setIconsEven((prevIcons) => {
//             // Pomera ikone ulevo i dodaje novu ikonu na desnu stranu
//             return [...prevIcons, prevIcons[(counter) % iconsEven.length]];
//           });
//         }, 60); // Ažurira se svakih 2 sekunde
    
//         return () => clearInterval(interval); // Čisti interval kad se komponenta unmountuje
// }

      }, [counter, iconsEven.length])
    
      return (
        <div className="carousel-container">
          <div className={way===1?"carousel-track-right":way===2?"carousel-track-right-fast":way===3?"carousel-track-left-fast":"carousel-track-left"}>
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
          </div>
        </div>
      );
    }