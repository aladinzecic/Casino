import React,{useContext} from 'react'
import "./Mines.css"
import WinningsCard from '../../components/WinningsCard/WinningsCard'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/NavBar/Navbar'
import MinesBetCard from '../../components/MinesBetCard/MinesBetCard'
import MinesTable from '../../components/MinesTable/MinesTable'
import { AppContext } from '../../Context/AppContext'
import toast, { Toaster } from 'react-hot-toast'
import GameExplanation from '../../components/GameExplanation/GameExplanation'
import capture from "../../assets/icons/Capture.JPG"
import capture1 from "../../assets/icons/Capture1.JPG"
import capture2 from "../../assets/icons/Capture2.JPG"
import ProfileSideBar from '../../components/ProfileSideBar/ProfileSideBar'
export default function Mines() {
  const {userMoneyMinesBet,setNumOfCorrectFields,setMoney,setCashoutMines,cashoutMines,minesGameOn,setMinesGameOn,betsRef,setBetsContentMines,betsContentMines}=useContext(AppContext)
  function CashOut(){
    if(minesGameOn){
      setMoney((prev) => Math.round((prev + cashoutMines) * 100) / 100);
      setNumOfCorrectFields(0)
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
      if(betsRef.current.children.length%2==0){
        setBetsContentMines([
          <div className="nzm">
          <h3 className="winnings-card-bet">${userMoneyMinesBet}</h3>
            <h3 className="winnings-card-bet">{Math.round((cashoutMines/userMoneyMinesBet) * 100) / 100}x</h3>
            <h3 className="winnings-card-green">${cashoutMines}</h3>
          </div>,
          ...betsContentMines
        ])
      }
      else{
        setBetsContentMines([
          <div className="znam">
          <h3 className="winnings-card-bet">${userMoneyMinesBet}</h3>
          <h3 className="winnings-card-bet">{Math.round((cashoutMines/userMoneyMinesBet) * 100) / 100}x</h3>
          <h3 className="winnings-card-green">${cashoutMines}</h3>
          </div>,
        ...betsContentMines
        ])
      }
      setTimeout(() => {
        setMinesGameOn(false);
      }, 2000);
      setCashoutMines(0)
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
<>
<div className='mines-full'>
      <div><Toaster position="bottom-center"/></div>
          <ProfileSideBar/>
    
      <Navbar/>
        <div className="mines-main">
        <Sidebar activee={2}/>
            <div className="mines-left-main">
                <MinesBetCard/>
                <WinningsCard/>
            </div>

            <div className="mines-right-main">
              <button className="cash-out-btn" onClick={()=>CashOut()}>Cash Out {cashoutMines!==0&&'$'&&cashoutMines}</button>
              <MinesTable/>
            </div>
        </div>
    </div>
    <GameExplanation 
    gameName="MINES" 
    h1Card1={"CONFIGURE"} 
    h1Card2={"BET"} 
    h1Card3={"WIN"} 
    h3Card1={"Chose the number of bombs and avoid them! More bombs higher the PRIZE."} 
    h3Card2={"Press BET to play! With every guess you get more money"} 
    h3Card3={"You can cashout after first field but longer you stay in game higher the cashout"}
    img1={capture}
    img2={capture1}
    img3={capture2}
    />
</>
  )
}
