import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import "./PlinkoScene.css"
const PlinkoScene = () => {
  const sceneRef = useRef(null);
  const renderRef = useRef(null);
  const engineRef = useRef(Matter.Engine.create());
  const runnerRef = useRef(Matter.Runner.create());

  const radius = 8; // Poluprečnik lopti
  const startX = 150; // Početna x-koordinata za dodavanje lopti
  const startY = 100; // Početna y-koordinata za dodavanje lopti

  // Funkcija za dodavanje lopti u redove
  const addRowOfBalls = (numBalls, offsetY) => {
    const balls = [];
    const padding = 40;

    for (let i = 0; i < numBalls; i++) {
      const x = startX - (numBalls - 1) * (radius + padding) + i * 2 * (radius + padding);
      const ball = Matter.Bodies.circle(x+250, startY + offsetY, radius, {
        isStatic: true,
        render: { fillStyle: '#fff' },
      });
      balls.push(ball);
    }
    Matter.World.add(engineRef.current.world, balls);
  };

  const addRowOfRectangles = (numBalls) => {
    const rectangles = [];
    const padding = 40;

    for (let i = 0; i < numBalls; i++) {
      const rectangle = Matter.Bodies.rectangle(150+i*100, 455, 80, 15, {
        isStatic: true,
        render: { fillStyle: '#3498db' },
        label: 'Rectangle', // Dodajemo labelu da identifikujemo pravougaonik
      });
      rectangles.push(rectangle);
    }
    Matter.World.add(engineRef.current.world, rectangles);
  };

  // Funkcija za kreiranje nove lopte na slučajnoj poziciji unutar scene
  const makeBall = () => {
    const randX = Math.floor(Math.random() * 200) + 300;
    const randY = Math.floor(Math.random() * 10) + 20;

    const ball = Matter.Bodies.circle(randX, randY, 15, {
      restitution: 0.9,
      frictionAir: 0.045,
      render: { fillStyle: '#C137E5' },
    });

    Matter.World.add(engineRef.current.world, ball);
  };

  useEffect(() => {
    if (sceneRef.current && !renderRef.current) {
      const canvases = sceneRef.current.getElementsByTagName('canvas');
      while (canvases.length > 0) {
        canvases[0].remove();
      }

      renderRef.current = Matter.Render.create({
        element: sceneRef.current,
        engine: engineRef.current,
        options: { width: 900, height: 460, wireframes: false,background: '#0C012B' },
      });

      Matter.Runner.run(runnerRef.current, engineRef.current);
      Matter.Render.run(renderRef.current);

      // Dodajemo lopte u redove
      addRowOfBalls(3, 0);
      addRowOfBalls(4, 10 * radius);
      addRowOfBalls(5, 20 * radius);
      addRowOfBalls(6, 30 * radius);
      addRowOfBalls(7, 40 * radius);
      addRowOfRectangles(6)
    }

    return () => {
      Matter.World.clear(engineRef.current.world);
      Matter.Engine.clear(engineRef.current);
      Matter.Runner.stop(runnerRef.current);
      if (renderRef.current) {
        Matter.Render.stop(renderRef.current);
        renderRef.current.canvas.remove();
        renderRef.current = null;
      }
    };
  }, []);

  return (
    <>
    <button onClick={makeBall} className='cash-out-btn'>Add Ball</button>
    <div style={{ width: '100%', height: '100%', display:"flex",justifyContent:"center"}} ref={sceneRef}/>
    </>
  );
};

export default PlinkoScene;
