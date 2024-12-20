import React, { useContext, useEffect, useState } from 'react';
import './MinesTable.css';
import { AppContext } from '../../Context/AppContext';
import toast from 'react-hot-toast';

export default function MinesTable() {
  const {money,setMoney,userMoneyMinesBet,cashoutMines,setCashoutMines,minesMoney, setNumOfCorrectFields,numOfBombs, minesGameOn, setMinesGameOn } = useContext(AppContext);
  const gridSize = 5;
  const [bombsIndexes, setBombsIndexes] = useState([]);
  const [revealed, setRevealed] = useState(Array(gridSize * gridSize).fill(''));
useEffect(()=>{
  setMoney(Math.round(money*100)/100)
},[money])
  function GenerateMines() {
    const newBombsIndexes = [];
    while (newBombsIndexes.length < numOfBombs) {
      const rand = Math.floor(Math.random() * (gridSize * gridSize));
      console.log(rand)
      if (!newBombsIndexes.includes(rand)) {
        newBombsIndexes.push(rand);
      }
    }
    setBombsIndexes(newBombsIndexes);
  }

  function CheckBomb(index) {
    if (bombsIndexes.includes(index)) {
      setCashoutMines(0)
      setNumOfCorrectFields(0)
      toast.error('jbgica.', {
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
      setTimeout(() => {
        setMinesGameOn(false);
      }, 2000);
      setRevealed((prev) => {
        const newRevealed = [...prev];
        newRevealed[index] = 'bomb';
        return newRevealed;
      });
    } else {
      setNumOfCorrectFields((prev)=>prev+1)
      setRevealed((prev) => {
        const newRevealed = [...prev];
        newRevealed[index] = 'diamond';
        return newRevealed;
      });
      minesMoney(userMoneyMinesBet)
    }
  }

  useEffect(() => {
    if (minesGameOn) {
      GenerateMines();
      setRevealed(Array(gridSize * gridSize).fill(''));
      console.log("igra zapoceta")

    }
    else{
      console.log("igra zavrsena")
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

  return <div className="grid-containerr">{gridItems}</div>;
}
