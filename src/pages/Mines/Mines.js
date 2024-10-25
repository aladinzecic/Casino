import React,{useContext} from 'react'
import "./Mines.css"
import WinningsCard from '../../components/WinningsCard/WinningsCard'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/NavBar/Navbar'
import MinesBetCard from '../../components/MinesBetCard/MinesBetCard'
import MinesTable from '../../components/MinesTable/MinesTable'
import { AppContext } from '../../Context/AppContext'
import toast, { Toaster } from 'react-hot-toast'
export default function Mines() {
  const {minesGameOn,setMinesGameOn}=useContext(AppContext)
  function CashOut(){
    if(minesGameOn){
      console.log("pobeda")
      toast.success('POBEDAAA.', {
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
    }
    else{
      toast.error('You didnt even start the game retard.', {
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
    }
  }
  return (
<div className='mines-full'>
      <div><Toaster position="bottom-center"/></div>
      <Navbar/>
        <div className="mines-main">
        <Sidebar activee={2}/>
            <div className="mines-left-main">
                <MinesBetCard/>
                <WinningsCard/>
            </div>

            <div className="mines-right-main">
              <button className="cash-out-btn" onClick={()=>CashOut()}>Cash Out</button>
              <MinesTable/>
            </div>
        </div>
    </div>
  )
}
