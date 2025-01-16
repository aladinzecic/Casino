import React, { useContext, useEffect } from 'react';
import './Wheel.css';
import { motion } from 'framer-motion';
import { AppContext } from '../../Context/AppContext';

export default function Wheel() {
  const { wheelNumbers, rotateWheelDeg, numberOfDivs, winningNumber, getBackgroundColor } = useContext(AppContext);

  const variants1 = {
    initial: {
      rotate: 0, // Početna rotacija
    },
    animate: {
      rotate: rotateWheelDeg, // Rotacija bazirana na unetom uglu
    },
  };

  useEffect(() => {
    console.log(winningNumber);
  }, [winningNumber]);

  return (
    <motion.div
      className="circle-container"
      variants={variants1}
      initial="initial"
      animate="animate"
      transition={{ duration: 10, ease: [0.01, 0.9, 0.83, 1] }}
    >
      {wheelNumbers.map((num, index) => (
        <div
          key={num}
          className="circle-segment"
          style={{
            transform: `rotate(${(360 / numberOfDivs) * index}deg)`, // Rotacija segmenta
            background: getBackgroundColor(num),
          }}
        >
          {num}
        </div>
      ))}
    </motion.div>
  );
}
