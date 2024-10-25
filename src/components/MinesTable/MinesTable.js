import React, { useContext, useEffect, useState } from 'react';
import './MinesTable.css';
import { AppContext } from '../../Context/AppContext';

export default function MinesTable() {
  const { numOfBombs, minesGameOn, setMinesGameOn } = useContext(AppContext);
  const gridSize = 5;
  const [bombsIndexes, setBombsIndexes] = useState([]);
  const [revealed, setRevealed] = useState(Array(gridSize * gridSize).fill(''));

  function GenerateMines() {
    const newBombsIndexes = [];
    while (newBombsIndexes.length < numOfBombs) {
      const rand = Math.floor(Math.random() * (gridSize * gridSize));
      if (!newBombsIndexes.includes(rand)) {
        newBombsIndexes.push(rand);
      }
    }
    setBombsIndexes(newBombsIndexes);
  }

  function CheckBomb(index) {
    if (bombsIndexes.includes(index)) {
      console.log('game over');
      setMinesGameOn(false);
      setRevealed((prev) => {
        const newRevealed = [...prev];
        newRevealed[index] = 'bomb';
        return newRevealed;
      });
    } else {
      setRevealed((prev) => {
        const newRevealed = [...prev];
        newRevealed[index] = 'diamond';
        return newRevealed;
      });
    }
  }

  useEffect(() => {
    if (minesGameOn) {
      GenerateMines();
      setRevealed(Array(gridSize * gridSize).fill(''));
      console.log(2222)

    }
    else{
      console.log(1111)
      setRevealed(Array(gridSize * gridSize).fill(''));

    }
  }, [minesGameOn]);

  const gridItems = revealed.map((status, i) => (
    <div
      key={i}
      className={`grid-item ${status}`}
      onClick={() => {
        if (minesGameOn) CheckBomb(i);
      }}
    ></div>
  ));

  return <div className="grid-container">{gridItems}</div>;
}
