import React,{createContext,useState,useRef, useEffect} from "react";
import Matter from 'matter-js';
import { color } from "framer-motion";
import balloon from "../assets/CashHuntIcons/air-hot-balloon.png"
import cactus from "../assets/CashHuntIcons/cactus.png"
import bell from "../assets/CashHuntIcons/christmas-bell.png"
import clock from "../assets/CashHuntIcons/clock.png"
import gift from "../assets/CashHuntIcons/gift-box.png"
import rabbit from "../assets/CashHuntIcons/rabbit.png"
import chest from "../assets/CashHuntIcons/top-hat.png"
import hat from "../assets/CashHuntIcons/treasure.png"
import Proba from '../components/Proba/Proba'
import axios from "axios"
const AppContext=createContext()

function ContextProvider({children}){
    const ref1=useRef(null)

    const wheelNumbers=[0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26]
    const roseNumbers=[1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]
    const purpleNumbers=[2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35]
    const numberOfDivs=37;
    const [money,setMoney]=useState()
    const [isProfileVisible,setIsProfileVisible]=useState(false)
    const [userData,setUserData]=useState(null)
    const [id,setId]=useState()
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
    useEffect(()=>{
      if(money)
      setMoneyF()
    },[money])
    useEffect(()=>{
      if(userData)
      console.log(userData)
    },[userData])

    const getUserData = async()=>{
      try{
          const response= await axios.get(`http://localhost:3001/auth/getUserData/${id}`)

          console.log(response)
          setUserData(response.data.all)
      }
      catch(e){
          console.log(e)
      }
    }
    const setMoneyF = async ()=>{
      console.log(id)
      try{
          const response= await axios.post(`http://localhost:3001/auth/updateMoney`,{
           userId:id,
           money:money
          })
          console.log(response)
      }

      catch(err){
          console.log(err)
      }
  }
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
      const [numOfPlinkoBalls,setNumOfPlinkoBalls]=useState(0)
      const [plinkoBetMoney,setPlinkoBetMoney]=useState(0)
      const plinkoRef=useRef(null)





      const [huntBetMoney,setHuntBetMoney]=useState(0)
      const [huntBetDifficulty,setHuntBetDifficulty]=useState('Low')
      const [isHuntGameOn,setIsHuntGameOn]=useState(false)
      const [arrOfClicked,setArrOfClicked]=useState([])


      const revealAll = () => {
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            setArrOfClicked((prev) => [...prev, i]); // Funkcionalni pristup
          }, i * 40); // Razmak između prikazivanja elemenata
        }
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            setArrOfClicked((prev) => [...prev, 8+i]); // Funkcionalni pristup
          }, 100+i * 40); // Razmak između prikazivanja elemenata
        }
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            setArrOfClicked((prev) => [...prev, 16+i]); // Funkcionalni pristup
          },200+ i * 40); // Razmak između prikazivanja elemenata
        }
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            setArrOfClicked((prev) => [...prev, 8*3+i]); // Funkcionalni pristup
          },300+ i * 40); // Razmak između prikazivanja elemenata
        }
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            setArrOfClicked((prev) => [...prev, 32+i]); // Funkcionalni pristup
          },400 +i * 40); // Razmak između prikazivanja elemenata
        }
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            setArrOfClicked((prev) => [...prev,8*5+ i]); // Funkcionalni pristup
          },500+ i * 40); // Razmak između prikazivanja elemenata
        }
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            setArrOfClicked((prev) => [...prev,48+ i]); // Funkcionalni pristup
          },600+ i * 40); // Razmak između prikazivanja elemenata
        }
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            setArrOfClicked((prev) => [...prev,8*7+ i]); // Funkcionalni pristup
          },700+ i * 40); // Razmak između prikazivanja elemenata
        }
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            setArrOfClicked((prev) => [...prev,8*8+ i]); // Funkcionalni pristup
          },800+ i * 40); // Razmak između prikazivanja elemenata
        }

      } 
      const hideAll = () => {
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            setArrOfClicked((prev) => prev.filter((val)=>val!==i)); // Funkcionalni pristup
          }, i * 40); // Razmak između prikazivanja elemenata
        }
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            setArrOfClicked((prev) => prev.filter((val)=>val!==8+i)); // Funkcionalni pristup
          }, 100+i * 40); // Razmak između prikazivanja elemenata
        }
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            setArrOfClicked((prev) => prev.filter((val)=>val!==16+i)); // Funkcionalni pristup
          },200+ i * 40); // Razmak između prikazivanja elemenata
        }
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            setArrOfClicked((prev) => prev.filter((val)=>val!==24+i)); // Funkcionalni pristup
          },300+ i * 40); // Razmak između prikazivanja elemenata
        }
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            setArrOfClicked((prev) => prev.filter((val)=>val!==32+i)); // Funkcionalni pristup
          },400 +i * 40); // Razmak između prikazivanja elemenata
        }
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            setArrOfClicked((prev) => prev.filter((val)=>val!==40+i)); // Funkcionalni pristup
          },500+ i * 40); // Razmak između prikazivanja elemenata
        }
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            setArrOfClicked((prev) => prev.filter((val)=>val!==48+i)); // Funkcionalni pristup
          },600+ i * 40); // Razmak između prikazivanja elemenata
        }
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            setArrOfClicked((prev) => prev.filter((val)=>val!==56+i)); // Funkcionalni pristup
          },700+ i * 40); // Razmak između prikazivanja elemenata
        }
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            setArrOfClicked((prev) => prev.filter((val)=>val!==64+i)); // Funkcionalni pristup
          },800+ i * 40); // Razmak između prikazivanja elemenata
        }
      }


      function createShuffledArray() {
        const values = [-huntBetMoney,huntBetMoney]; // Moguće vrednosti

        const countPerValue = 72 / values.length; // Broj pojavljivanja svake vrednosti
        console.log(huntBetMoney)
        // Kreiranje niza sa ravnomernim brojem elemenata
        const array = [];
        if(huntBetDifficulty==="Low"){

          for (let value of values) {
            for (let i = 0; i < countPerValue; i++) {
              array.push(value);
            }
          }
        }
        else if(huntBetDifficulty==="Medium"){
          for(let i=0;i<72/0.3;i++){
            array.push(-huntBetMoney);

          }
          for(let i=0;i<72/0.7;i++){
            array.push(2*huntBetMoney);

          }
        }
        else if(huntBetDifficulty==="High"){
          for(let i=0;i<72/0.23;i++){
            array.push(-huntBetMoney);

          }
          for(let i=0;i<72/0.77;i++){
            array.push(3*huntBetMoney);
          }
        }
        // Funkcija za mešanje niza (Fisher-Yates algoritam)
        function shuffle(array) {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Nasumičan indeks
            [array[i], array[j]] = [array[j], array[i]]; // Zamena elemenata
          }
        }
      
        // Višestruko mešanje niza
        for (let i = 0; i < 10; i++) { // Pet puta meša niz
          shuffle(array);
        }
        
        return array;
      }
          const [arrOfValues,setArrOfValues]=useState([])
    const cashHuntIcons=[balloon,cactus,bell,clock,gift,rabbit,chest,hat]
    const [gridData,setGridData]=useState([])
    const [grid,setGrid]=useState([])

    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
          const generateGridData = () => {
                  const gridData = [];
                  cashHuntIcons.forEach((icon) => {
                    for (let i = 0; i < 8; i++) {
                      gridData.push(icon);
                    }
                  });
                  return shuffleArray(gridData);
                };
                
                
                const generateGrid = () =>{
                  const ProbaComponents = [];
                  console.log(gridData[0])
                      for (let i = 0; i < 8; i++) {
                          ProbaComponents.push(
                              <Proba
                                  key={i}
                                  keyy={i}
                                  icon1={gridData[i * 8]}
                                  icon2={gridData[i * 8 + 1]}
                                  icon3={gridData[i * 8 + 2]}
                                  icon4={gridData[i * 8 + 3]}
                                  icon5={gridData[i * 8 + 4]}
                                  icon6={gridData[i * 8 + 5]}
                                  icon7={gridData[i * 8 + 6]}
                                  icon8={gridData[i * 8 + 7]}
                                  way={i===1||i===5?2:i===0||i===4?3:i % 2}
                                  arrOfValues={arrOfValues}
                              />
                          );
                      }
                      setGrid([])
                      setTimeout(() => {
                        
                        setGrid(ProbaComponents)
                      }, 1);

                }
      
      const values={
        grid,
        gridData,
        setGridData,
        generateGrid,
        generateGridData,
        arrOfValues,
        setArrOfValues,
        createShuffledArray,
        revealAll,
        hideAll,
        arrOfClicked,
        setArrOfClicked,
        huntBetMoney,
        setHuntBetMoney,
        huntBetDifficulty,
        setHuntBetDifficulty,
        isHuntGameOn,
        setIsHuntGameOn,
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
        numOfPlinkoBalls,
        setNumOfPlinkoBalls,
        betsRefRoulette,
        plinkoBetMoney,
        setPlinkoBetMoney,
        plinkoRef,
        setId,
        id,
        ref1,
        getUserData,
        userData,
        setUserData,
        setIsProfileVisible,
        isProfileVisible
    }



    return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export {AppContext,ContextProvider};