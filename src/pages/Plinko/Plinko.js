import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const Plinko = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    // Kreiraj Matter.js engine i runner
    const engine = Matter.Engine.create();
    const runner = Matter.Runner.create();

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        wireframes: false,
      },
    });

    // Inicijalno dodaj statičnu piramidu lopti
    const radius = 20;
    const startX = 400;
    const startY = 100;
    const addRowOfBalls = (numBalls, offsetY) => {
      const balls = [];
      const padding = 25; // Razmak između lopti po X osi

      for (let i = 0; i < numBalls; i++) {
        const x = startX - (numBalls - 1) * (radius + padding) + i * 2 * (radius + padding);
        const ball = Matter.Bodies.circle(x, startY + offsetY, radius, {
          isStatic: true,
          render: { fillStyle: '#3498db' },
        });
        balls.push(ball);
      }
      Matter.World.add(engine.world, balls);
    };
    
    addRowOfBalls(3, 0);
    addRowOfBalls(4, 4 * radius);
    addRowOfBalls(5, 8 * radius);

    // Event listener za kreiranje loptice na klik
    const handleMouseClick = (event) => {
      // Koordinate klika miša u odnosu na scenu
      const rect = render.canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      // Kreiraj novu lopticu na mestu klika
      const ball = Matter.Bodies.circle(mouseX, mouseY, radius, {
        restitution: 0.8,
        render: { fillStyle: '#e74c3c' },
      });

      Matter.World.add(engine.world, ball);
    };

    // Dodaj listener za klik
    render.canvas.addEventListener('mousedown', handleMouseClick);

    // Pokreni runner i render
    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    // Čišćenje kada se komponenta unmountuje
    return () => {
      Matter.World.clear(engine.world);
      Matter.Engine.clear(engine);
      Matter.Runner.stop(runner);
      Matter.Render.stop(render);
      render.canvas.remove();
      render.canvas.removeEventListener('mousedown', handleMouseClick);
    };
  }, []);

  return <div ref={sceneRef}></div>;
};

export default Plinko;
