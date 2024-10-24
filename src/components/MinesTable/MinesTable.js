import React,{useContext, useEffect, useState} from 'react'
import "./MinesTable.css"
import {AppContext} from "../../Context/AppContext"
export default function MinesTable() {
  const {numOfBombs}=useContext(AppContext)
  const [bombsIndexes,setBombsIndexes]=useState([])
  const gridSize = 5; 
  const gridItems = [];
  const [revealed, setRevealed] = useState(Array(gridSize * gridSize).fill(''));



  function GenerateMines() {
    let rand;
    const newBombsIndexes = [...bombsIndexes];
  
    for (let i = 0; i < numOfBombs; i++) {
      rand = Math.floor(Math.random() * 25); 
  
      if (!newBombsIndexes.includes(rand)) {
        newBombsIndexes.push(rand);
      } else {
        i--; 
      }
    }
    setBombsIndexes(newBombsIndexes); 
  }

  function CheckBomb(num) {

    if (bombsIndexes.includes(num)) {
      console.log('game over');
      setRevealed((prev) => {
        const newRevealed = [...prev];
        newRevealed[num] = 'bomb'; 
        return newRevealed;
      });
    } else {
      setRevealed((prev) => {
        const newRevealed = [...prev];
        newRevealed[num] = 'diamond';
        return newRevealed;
      });
    }
  }
  useEffect(() => {
    GenerateMines();
  }, []);
  for (let i = 0; i < gridSize * gridSize; i++) {
    gridItems.push(<div key={i} className={`grid-item ${revealed[i]}`} onClick={()=>CheckBomb(i)}></div>);
  }
  return (
    <div className='grid-container'>
      {gridItems}
    </div>
  )
}
