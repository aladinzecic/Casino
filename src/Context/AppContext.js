import React,{createContext,useState} from "react";
const AppContext=createContext()

function ContextProvider({children}){
    const wheelNumbers=[0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26]
    const roseNumbers=[1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]
    const purpleNumbers=[2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35]
    const numberOfDivs=37;
    const [winningNumber,setWinningNumber]=useState(null)
    const [isSpinning,setIsSpinning]=useState(false)
    const [rotateWheelDeg,setRotateWheelDeg]=useState(0)

    const getBackgroundColor = (number) => {
        if (roseNumbers.includes(number)) {
          return '#BC4EFF';
        } else if (purpleNumbers.includes(number)) {
          return '#461797';
        }
        else return "#0baf34"
      };

      const winCheck = (userBetMoney,winningNumber,userBet) => {
        let newMoney;
        let userWin=true;
        if (userBet===winningNumber) {
            newMoney=winningNumber===0?userBetMoney*50:userBetMoney*35
            return {
                money:newMoney,
                win:userWin
            };
        }
        else if(userBet==="left-half"&&winningNumber>0&&winningNumber<19){
            newMoney=userBetMoney*2
            return {
                money:newMoney,
                win:userWin
            };
        }
        else if(userBet==="right-half"&&winningNumber>18&&winningNumber<37){
            newMoney=userBetMoney*2
            return {
                money:newMoney,
                win:userWin
            };
        }
        else if(userBet==="even"&&winningNumber%2===0){
            newMoney=userBetMoney*2
            return {
                money:newMoney,
                win:userWin
            };
        }
        else if(userBet==="odd"&&winningNumber%2!==0){
            newMoney=userBetMoney*2
            return {
                money:newMoney,
                win:userWin
            };
        }
        else if(userBet==="rose"&&roseNumbers.includes(winningNumber)){
            newMoney=userBetMoney*2
            return {
                money:newMoney,
                win:userWin
            };
        }
        else if(userBet==="purple"&&purpleNumbers.includes(winningNumber)){
            newMoney=userBetMoney*2
            return {
                money:newMoney,
                win:userWin
            };
        }
        else if(userBet==="thirds-first"&&winningNumber%3===0){
            newMoney=userBetMoney*3
            return {
                money:newMoney,
                win:userWin
            };
        }
        else if(userBet==="thirds-second"&&(winningNumber+1)%3===0){
            newMoney=userBetMoney*3
            return {
                money:newMoney,
                win:userWin
            };
        }
        else if(userBet==="thirds-third"&&(winningNumber+2)%3===0){
            newMoney=userBetMoney*3
            return {
                money:newMoney,
                win:userWin
            };
        }
        else{
            return {
                money:0,
                win:false
            };
        }
      };

    const values={
        wheelNumbers,
        roseNumbers,
        purpleNumbers,
        numberOfDivs,
        winningNumber,
        setWinningNumber,
        isSpinning,
        setIsSpinning,
        rotateWheelDeg,
        setRotateWheelDeg,
        getBackgroundColor,
        winCheck
    }



    return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export {AppContext,ContextProvider};