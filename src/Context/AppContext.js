import React,{createContext,useState} from "react";
const AppContext=createContext()

function ContextProvider({children}){
    const wheelNumbers=[0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26]
    const [isSpinning,setIsSpinning]=useState(false)
    const [rotateWheelDeg,setRotateWheelDeg]=useState(0)

    const values={
        wheelNumbers,
        isSpinning,
        setIsSpinning,
        rotateWheelDeg,
        setRotateWheelDeg
    }



    return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export {AppContext,ContextProvider};