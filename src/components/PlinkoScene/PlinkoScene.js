import React, { useContext, useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import "./PlinkoScene.css"
import { AppContext } from '../../Context/AppContext';
const PlinkoScene = () => {
  const {plinkoDifficulty}=useContext(AppContext)
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

  const rectangles = [];
  const addRowOfRectangles = (numBalls) => {
    const padding = 40;
    const colors = ['#55046b', '#7c099c', '#c32bed', '#c32bed', '#7c099c', '#55046b'];
  
    for (let i = 0; i < numBalls; i++) {
      const fillColor = colors[i];
      const rectangle = Matter.Bodies.rectangle(150 + i * 100, 450, 80, 20, {
        chamfer: { radius: 3 },
        isStatic: true,
        render: { fillStyle: fillColor },
        label: `Rectangle${i}`,
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
      label: `Ball`,

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

    Matter.Events.on(renderRef.current, 'afterRender', () => {
      const context = renderRef.current.context;
      context.font = 'bold 14px Agdasima';
      
      context.fillStyle = '#fff';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      const lowRiskValues = [1.2, 1.0, 0.8, 0.8, 1.0, 1.2];
      const mediumRiskValues = [2.0, 1.5, 0.7, 0.7, 1.5, 2.0];
      const highRiskValues = [5.0, 2.5, 0.5, 0.5, 2.5, 5.0];

      rectangles.forEach((rect,i) => {
        const { x, y } = rect.position;
        if(lowRiskValues[i]!=undefined){
          if(plinkoDifficulty==='Low'){
            context.fillText(`${lowRiskValues[i]}X`, x, y);
          }
          else if(plinkoDifficulty==='Medium'){
            context.fillText(`${mediumRiskValues[i]}X`, x, y);
          }
          else if(plinkoDifficulty==='High'){
            context.fillText(`${highRiskValues[i]}X`, x, y);
          }
        }
      });
    });
  
    Matter.Events.on(engineRef.current, 'collisionStart', (event) => {
      event.pairs.forEach((pair) => {
        const { bodyA, bodyB } = pair;
    
        rectangles.forEach((rectangle) => {
          if (
            (bodyA.label === 'Ball' && bodyB.label === rectangle.label) ||
            (bodyA.label === rectangle.label && bodyB.label === 'Ball')
          ) {
            const ball = bodyA.label === 'Ball' ? bodyA : bodyB;
            Matter.World.remove(engineRef.current.world, ball);
    
            // Pomeranje pravougaonika nadole za 5 piksela
            Matter.Body.translate(rectangle, { x: 0, y: -2});
    
            // Nakon 500ms vraćamo pravougaonik na originalnu poziciju
            setTimeout(() => {
              Matter.Body.translate(rectangle, { x: 0, y: 2 });
            }, 100);
          }
        });
      });
    });
    
  

  

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
  useEffect(() => {
    if (sceneRef.current && !renderRef.current) {
      const canvases = sceneRef.current.getElementsByTagName('canvas');
      while (canvases.length > 0) {
        canvases[0].remove();
      }
  
      renderRef.current = Matter.Render.create({
        element: sceneRef.current,
        engine: engineRef.current,
        options: { width: 900, height: 460, wireframes: false, background: '#0C012B' },
      });
  
      Matter.Runner.run(runnerRef.current, engineRef.current);
      Matter.Render.run(renderRef.current);
  
      // Add rows of balls and rectangles
      addRowOfBalls(3, 0);
      addRowOfBalls(4, 10 * radius);
      addRowOfBalls(5, 20 * radius);
      addRowOfBalls(6, 30 * radius);
      addRowOfBalls(7, 40 * radius);
      addRowOfRectangles(6);
    }
  
    // Render event to draw text on rectangles
    Matter.Events.on(renderRef.current, 'afterRender', () => {
      const context = renderRef.current.context;
      context.font = 'bold 14px Agdasima';
      context.fillStyle = '#fff';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
  
      const lowRiskValues = [1.2, 1.0, 0.8, 0.8, 1.0, 1.2];
      const mediumRiskValues = [2.0, 1.5, 0.7, 0.7, 1.5, 2.0];
      const highRiskValues = [5.0, 2.5, 0.5, 0.5, 2.5, 5.0];
  
      rectangles.forEach((rect, i) => {
        const { x, y } = rect.position;
        if (plinkoDifficulty === 'Low' && lowRiskValues[i] !== undefined) {
          context.fillText(`${lowRiskValues[i]}X`, x, y);
        } else if (plinkoDifficulty === 'Medium' && mediumRiskValues[i] !== undefined) {
          context.fillText(`${mediumRiskValues[i]}X`, x, y);
        } else if (plinkoDifficulty === 'High' && highRiskValues[i] !== undefined) {
          context.fillText(`${highRiskValues[i]}X`, x, y);
        }
      });
    });
  
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
  }, [plinkoDifficulty]);
  

  
  return (
    <>
    <button onClick={makeBall} className='cash-out-btn'>Add Ball</button>
    <div style={{ width: '100%', height: '100%', display:"flex",justifyContent:"center"}} ref={sceneRef}/>
    </>
  );
};

export default PlinkoScene;
