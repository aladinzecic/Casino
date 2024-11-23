import React,{createContext,useState,useRef, useEffect} from "react";
import Matter from 'matter-js';
import { color } from "framer-motion";

const AppContext=createContext()

function ContextProvider({children}){
    const wheelNumbers=[0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26]
    const roseNumbers=[1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]
    const purpleNumbers=[2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35]
    const numberOfDivs=37;
    const [money,setMoney]=useState(200)
    const [betsContentRoulette,setBetsContentRoulette]=useState([])
    const betsRefRoulette=useRef(null)
    const [moneyButtons,setMoneyButtons]=useState("Full")
    const [winningNumber,setWinningNumber]=useState(null)
    const [isSpinning,setIsSpinning]=useState(false)
    const [rotateWheelDeg,setRotateWheelDeg]=useState(0)
    const [userBet,setUserBet]=useState(-1);
    const [rouletteResults, setRouletteResults] = useState({
        money: 0,
        win: null
    });
    const getBackgroundColor = (number) => {
        if (roseNumbers.includes(number)) {
          return '#BC4EFF';
        } else if (purpleNumbers.includes(number)) {
          return '#461797';
        }
        else return "#0baf34"
      };
      const returnX=(userBet)=>{
        if(userBet==="0")return 50
        else if(userBet==="left-half"||userBet==="right-half"||userBet==="even"||userBet==="odd"||userBet==="rose"||userBet==="purple")return 2
        else if(userBet==="thirds-first"||userBet==="thirds-second"||userBet==="thirds-third")return 3
            else return 35
      }
      const winCheck = (userBetMoney,winningNumber,userBet) => {
        let newMoney=0;
        let userWin=true;
        if (userBet===winningNumber) {
            newMoney=winningNumber===0?userBetMoney*50:userBetMoney*35
            setRouletteResults({
                money:newMoney,
                win:userWin
            });
        }
        else if(userBet==="left-half"&&winningNumber>0&&winningNumber<19){
            newMoney=userBetMoney*2
            setRouletteResults({
                money:newMoney,
                win:userWin
            });
        }
        else if(userBet==="right-half"&&winningNumber>18&&winningNumber<37){
            newMoney=userBetMoney*2
            setRouletteResults({
                money:newMoney,
                win:userWin
            });
        }
        else if(userBet==="even"&&winningNumber%2===0){
            newMoney=userBetMoney*2
            setRouletteResults({
                money:newMoney,
                win:userWin
            });
        }
        else if(userBet==="odd"&&winningNumber%2!==0){
            newMoney=userBetMoney*2
            setRouletteResults({
                money:newMoney,
                win:userWin
            });
        }
        else if(userBet==="rose"&&roseNumbers.includes(winningNumber)){
            newMoney=userBetMoney*2
            console.log(newMoney)
            setRouletteResults({
                money:newMoney,
                win:userWin
            });
        }
        else if(userBet==="purple"&&purpleNumbers.includes(winningNumber)){
            newMoney=userBetMoney*2
            setRouletteResults({
                money:newMoney,
                win:userWin
            });
        }
        else if(userBet==="thirds-first"&&winningNumber%3===0){
            newMoney=userBetMoney*3
            setRouletteResults({
                money:newMoney,
                win:userWin
            });
        }
        else if(userBet==="thirds-second"&&(winningNumber+1)%3===0){
            newMoney=userBetMoney*3
            setRouletteResults({
                money:newMoney,
                win:userWin
            });
        }
        else if(userBet==="thirds-third"&&(winningNumber+2)%3===0){
            newMoney=userBetMoney*3
            setRouletteResults({
                money:newMoney,
                win:userWin
            });
        }
        else{
            setRouletteResults({
                money:0,
                win:false
            });
        }
        console.log(money)
        console.log(newMoney)
        if(newMoney)
            setMoney((prevMoney) => {
                console.log("Previous money:", prevMoney);
                console.log("Updating money to:", prevMoney + newMoney);
                return prevMoney + newMoney;
            });

            if(betsRefRoulette.current.children.length%2==0){
                setBetsContentRoulette([
                  <div className="nzm">
                  <h3 className="winnings-card-bet">${userBetMoney}</h3>
                  <h3 className="winnings-card-bet">{userBet}</h3>
                  <h3  className="winnings-card-bet">{returnX(userBet)}x</h3>
                    <h3 style={{ color: newMoney / userBetMoney ? "green" : "red" }}
                 className="winnings-card-green">${newMoney}</h3>
                  </div>,
                  ...betsContentRoulette
                ])
              }
              else{
                setBetsContentRoulette([
                  <div className="znam">
                  <h3 className="winnings-card-bet">${userBetMoney}</h3>
                  <h3 className="winnings-card-bet">{userBet}</h3>
                  <h3  className="winnings-card-bet">{returnX(userBet)}x</h3>
                  <h3 style={{ color: newMoney / userBetMoney ? "green" : "red" }}
                 className="winnings-card-green">${newMoney}</h3>                  </div>,
                ...betsContentRoulette
                ])
              }
        };




      //MINES SECTION//////////////////////////////////////////////////////////////////////////////////////
      const [numOfBombs,setNumOfBombs]=useState(1)
      const [numOfCorrectFields,setNumOfCorrectFields]=useState(0)
      const [minesGameOn,setMinesGameOn]=useState(false)
      const betsRef=useRef(null)
      const [betsContentMines,setBetsContentMines]=useState([])
      const [cashoutMines,setCashoutMines]=useState()
      const [userMoneyMinesBet,setUserMoneyMinesBet]=useState(0)

      const minesMoney=(userBetMoney)=>{
        const moneyy = Math.round((userBetMoney * 25 / (25 - numOfBombs - numOfCorrectFields)) * 100) / 100;
                setCashoutMines(moneyy)
        
      }
      
      const [plinkoDifficulty,setPlinkoDifficulty]=useState('Low')
      const [ballsAmount,setBallsAmount]=useState(1)
      
    const values={
        betsContentRoulette,
        setBetsContentRoulette,
        userMoneyMinesBet,
        setUserMoneyMinesBet,
        numOfCorrectFields,
        setNumOfCorrectFields,
        cashoutMines,
        setCashoutMines,
        minesMoney,
        money,
        setMoney,
        wheelNumbers,
        roseNumbers,
        purpleNumbers,
        numberOfDivs,
        winningNumber,
        setWinningNumber,
        moneyButtons,
        setMoneyButtons,
        isSpinning,
        setIsSpinning,
        rotateWheelDeg,
        setRotateWheelDeg,
        userBet,
        setUserBet,
        rouletteResults,
        setRouletteResults,
        getBackgroundColor,
        winCheck,
        numOfBombs,
        setNumOfBombs,
        minesGameOn,
        setMinesGameOn,
        betsRef,
        betsContentMines,
        setBetsContentMines,
        plinkoDifficulty,
        setPlinkoDifficulty,
        ballsAmount,
        setBallsAmount,
        betsRefRoulette
    }



    return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export {AppContext,ContextProvider};