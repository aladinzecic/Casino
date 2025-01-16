import React,{useState,useContext} from 'react'
import "./RouletteNumbers.css"
import chip from "../../assets/icons/chip.webp"
import { AppContext } from '../../Context/AppContext'
export default function RouletteNumbers() {
    const {roseNumbers,purpleNumbers,userBet,setUserBet,isMobile}=useContext(AppContext)
    const allNumbers = [];
    const [isHovered,setIsHovered]=useState(null);
    for(let i=1;i<=12;i++){
        allNumbers.push(i*3)
    }
    for(let i=1;i<=12;i++){
        allNumbers.push(i*3-1)
    }
    for(let i=1;i<=12;i++){
        allNumbers.push(i*3-2)
    }
const  addOpacity=(num)=>{
if(isHovered==="even"&&num%2===1)return 0.1
else if(isHovered==="odd"&&num%2===0)return 0.1
else if(isHovered==="right-half"&&num>0&&num<19)return 0.1
else if(isHovered==="left-half"&&num>18)return 0.1
else if (isHovered==="purple"&&roseNumbers.includes(num))return 0.1
else if (isHovered==="rose"&&purpleNumbers.includes(num))return 0.1
else if (isHovered==="thirds-first"&&num%3!==0)return 0.1
else if (isHovered==="thirds-second"&&(num+1)%3!==0)return 0.1
else if (isHovered==="thirds-third"&&(num+2)%3!==0)return 0.1
else return 1
}


    const getBackgroundColor = (number) => {
        if (roseNumbers.includes(number)) {
          return '#BC4EFF';
        } else if (purpleNumbers.includes(number)) {
          return '#461797';
        }
      };
      return (
        <div className={isMobile?"number-board-mobile":"number-board"}>
            <div className="board-up">
            <div className="zero" key={0} onClick={()=>setUserBet(0)}
              style={{                fontSize:isMobile?"24px":"",
                opacity:isHovered!=null?"0.1":"1"}}                            
              
              >0
            {userBet===0 && (
        <div className="proba">
          <img className="chip" src={chip} alt="chip" />
          <img className="chip" src={chip} alt="chip" />
        </div>
      )}
            </div>
            <div className='number-board-red-black'>
            {allNumbers.map((number) => (
              <div
                className='num'
                key={number}
                style={{
                  fontSize:isMobile?"24px":"",
                  backgroundColor: getBackgroundColor(number),
                  opacity: addOpacity(number)
                }}
                onClick={()=>{
                  setUserBet(number)
                }}
              >
                {number}
                {userBet===number && (
        <div className="proba">
          <img className="chip" src={chip} alt="chip" />
          <img className="chip" src={chip} alt="chip" />
        </div>
      )}
              </div>
            ))}
          </div>
          <div className="right-thirds" >
            <div className="num third" onClick={()=>setUserBet("thirds-first")}
                            onMouseEnter={()=>setIsHovered("thirds-first")}
                            onMouseLeave={()=>setIsHovered(null)}
                            style={{
                              fontSize:isMobile?"24px":"",
                            }}
              >2:1
            {userBet==="thirds-first" && (
        <div className="proba">
          <img className="chip" src={chip} alt="chip" />
          <img className="chip" src={chip} alt="chip" />
        </div>
      )}
            </div>
            <div className="num third" onClick={()=>setUserBet("thirds-second")}
                            onMouseEnter={()=>setIsHovered("thirds-second")}
                            onMouseLeave={()=>setIsHovered(null)}
                            style={{
                              fontSize:isMobile?"24px":"",
                            }}
              >2:1
            {userBet==="thirds-second" && (
        <div className="proba">
          <img className="chip" src={chip} alt="chip" />
          <img className="chip" src={chip} alt="chip" />
        </div>
      )}
            </div>
            <div className="num third" onClick={()=>setUserBet("thirds-third")}
                            onMouseEnter={()=>setIsHovered("thirds-third")}
                            onMouseLeave={()=>setIsHovered(null)}
                            style={{
                              fontSize:isMobile?"24px":"",
                            }}
              >2:1
            {userBet==="thirds-third" && (
        <div className="proba">
          <img className="chip" src={chip} alt="chip" />
          <img className="chip" src={chip} alt="chip" />
        </div>
      )}
            </div>
          </div>
            </div>
            <div className="board-down">
              <div className="long-field"
              onClick={()=>setUserBet("left-half")}
              onMouseEnter={()=>setIsHovered("left-half")}
              onMouseLeave={()=>setIsHovered(null)}
              style={{
                fontSize:isMobile?"24px":"",
              }}
              >
                1-18
                {userBet==="left-half" && (
        <div className="proba">
          <img className="chip" src={chip} alt="chip" />
          <img className="chip" src={chip} alt="chip" />
        </div>
      )}
                </div>
              <div className="long-field" onClick={()=>setUserBet("even")}
                onMouseEnter={()=>setIsHovered("even")}
                onMouseLeave={()=>setIsHovered(null)}
                style={{
                  fontSize:isMobile?"24px":"",
                }}
                >
                Even
                {userBet==="even" && (
        <div className="proba">
          <img className="chip" src={chip} alt="chip" />
          <img className="chip" src={chip} alt="chip" />
        </div>
      )}
                </div>
              <div className="long-field red-bet" onClick={()=>setUserBet("rose")}
                                          onMouseEnter={()=>setIsHovered("rose")}
                                          onMouseLeave={()=>setIsHovered(null)}>
              {userBet==="rose" && (
        <div className="proba">
          <img className="chip" src={chip} alt="chip" />
          <img className="chip" src={chip} alt="chip" />
        </div>
      )}
              </div>
              <div className="long-field black-bet" onClick={()=>setUserBet("purple")}
                                          onMouseEnter={()=>setIsHovered("purple")}
                                          onMouseLeave={()=>setIsHovered(null)}>
              {userBet==="purple" && (
        <div className="proba">
          <img className="chip" src={chip} alt="chip" />
          <img className="chip" src={chip} alt="chip" />
        </div>
      )}
              </div>
              <div className="long-field" onClick={()=>setUserBet("odd")}
                          onMouseEnter={()=>setIsHovered("odd")}
                          onMouseLeave={()=>setIsHovered(null)}
                          style={{
                            fontSize:isMobile?"24px":"",
                          }}
                >
                Odd
                {userBet==="odd" && (
        <div className="proba">
          <img className="chip" src={chip} alt="chip" />
          <img className="chip" src={chip} alt="chip" />
        </div>
      )}
                </div>
              <div className="long-field" onClick={()=>setUserBet("right-half")}
                                          onMouseEnter={()=>setIsHovered("right-half")}
                                          onMouseLeave={()=>setIsHovered(null)}
                                          style={{
                                            fontSize:isMobile?"24px":"",
                                          }}
                >
                19-36
                {userBet==="right-half" && (
        <div className="proba">
          <img className="chip" src={chip} alt="chip" />
          <img className="chip" src={chip} alt="chip" />
        </div>
      )}
                </div>
            </div>
        </div>
      );
      
}
