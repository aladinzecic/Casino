import React, { useRef, useState } from 'react'
import "./CashHunt.css"
import CashHuntGame from '../../components/CashHuntGame/CashHuntGame'
import canonDown from "../../assets/CashHuntIcons/canon-down.png"
import canonTop from "../../assets/CashHuntIcons/image.png"
import WinningsCard from '../../components/WinningsCard/WinningsCard'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/NavBar/Navbar'
import PlaceBetCard from "../../components/PlaceBetCard/PlaceBetCard"
import { Toaster } from 'react-hot-toast'
import CashBetCard from '../../components/CashBetCard/CashBetCard'
export default function CashHunt() {
  const [rotation, setRotation] = useState(0);
  const cannon=useRef(null)
  

  const handleCanonMove = (event) => {
    if (!cannon.current) return; // Ensure cannon.current exists
    const cannonRect = cannon.current.getBoundingClientRect(); // Access DOM element
    const centerX = cannonRect.left + cannonRect.width / 2; // Center X of the cannon
    const centerY = cannonRect.top + cannonRect.height / 2; // Center Y of the cannon
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const angle = Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI) +90;
    setRotation(angle); // Set rotation angle
  };

  return (
      
    <div className='cash-full'>
    <div><Toaster position="bottom-center"/></div>
    <Navbar/>
      <div className="cash-main">
      <Sidebar activee={3}/>
          <div className="cash-left-main">
              <CashBetCard/>
              <WinningsCard/>
          </div>

          <div className="cash-right-main">
          <div 
      onMouseMove={handleCanonMove}
      ><CashHuntGame/></div>
      <img className="canon canon-down" src={canonDown} />
      <img ref={cannon} className="canon canon-top" src={canonTop} style={{transform: `rotate(${rotation}deg)`}}/>
    </div>
          </div>
      </div>
  )
}
