import React,{useState} from 'react'
import "./RouletteNumbers.css"
import chip from "../../assets/icons/chip.webp"
export default function RouletteNumbers() {
    const roseNumbers=[1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]
    const purpleNumbers=[2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35]
    const allNumbers = [];
    const [chipVisible,setChipVisible]=useState(-1);
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
        <div className="number-board">
            <div className="board-up">
            <div className="zero" key={0} onClick={()=>setChipVisible(0)}
              style={{opacity:isHovered!=null?"0.1":"1"}}
              >0
            {chipVisible===0 && (
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
                  backgroundColor: getBackgroundColor(number),
                  opacity: addOpacity(number)
                }}
                onClick={()=>{
                  setChipVisible(number)
                }}
              >
                {number}
                {chipVisible===number && (
        <div className="proba">
          <img className="chip" src={chip} alt="chip" />
          <img className="chip" src={chip} alt="chip" />
        </div>
      )}
              </div>
            ))}
          </div>
          <div className=""right-thirds >
            <div className="num third" onClick={()=>setChipVisible("thirds-first")}
                            onMouseEnter={()=>setIsHovered("thirds-first")}
                            onMouseLeave={()=>setIsHovered(null)}
              >2:1
            {chipVisible==="thirds-first" && (
        <div className="proba">
          <img className="chip" src={chip} alt="chip" />
          <img className="chip" src={chip} alt="chip" />
        </div>
      )}
            </div>
            <div className="num third" onClick={()=>setChipVisible("thirds-second")}
                            onMouseEnter={()=>setIsHovered("thirds-second")}
                            onMouseLeave={()=>setIsHovered(null)}
              >2:1
            {chipVisible==="thirds-second" && (
        <div className="proba">
          <img className="chip" src={chip} alt="chip" />
          <img className="chip" src={chip} alt="chip" />
        </div>
      )}
            </div>
            <div className="num third" onClick={()=>setChipVisible("thirds-third")}
                            onMouseEnter={()=>setIsHovered("thirds-third")}
                            onMouseLeave={()=>setIsHovered(null)}
              >2:1
            {chipVisible==="thirds-third" && (
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
              onClick={()=>setChipVisible("left-half")}
              onMouseEnter={()=>setIsHovered("left-half")}
              onMouseLeave={()=>setIsHovered(null)}
              >
                1-18
                {chipVisible==="left-half" && (
        <div className="proba">
          <img className="chip" src={chip} alt="chip" />
          <img className="chip" src={chip} alt="chip" />
        </div>
      )}
                </div>
              <div className="long-field" onClick={()=>setChipVisible("even")}
                onMouseEnter={()=>setIsHovered("even")}
                onMouseLeave={()=>setIsHovered(null)}
                >
                Even
                {chipVisible==="even" && (
        <div className="proba">
          <img className="chip" src={chip} alt="chip" />
          <img className="chip" src={chip} alt="chip" />
        </div>
      )}
                </div>
              <div className="long-field red-bet" onClick={()=>setChipVisible("rose")}
                                          onMouseEnter={()=>setIsHovered("rose")}
                                          onMouseLeave={()=>setIsHovered(null)}>
              {chipVisible==="rose" && (
        <div className="proba">
          <img className="chip" src={chip} alt="chip" />
          <img className="chip" src={chip} alt="chip" />
        </div>
      )}
              </div>
              <div className="long-field black-bet" onClick={()=>setChipVisible("purple")}
                                          onMouseEnter={()=>setIsHovered("purple")}
                                          onMouseLeave={()=>setIsHovered(null)}>
              {chipVisible==="purple" && (
        <div className="proba">
          <img className="chip" src={chip} alt="chip" />
          <img className="chip" src={chip} alt="chip" />
        </div>
      )}
              </div>
              <div className="long-field" onClick={()=>setChipVisible("odd")}
                          onMouseEnter={()=>setIsHovered("odd")}
                          onMouseLeave={()=>setIsHovered(null)}
                >
                Odd
                {chipVisible==="odd" && (
        <div className="proba">
          <img className="chip" src={chip} alt="chip" />
          <img className="chip" src={chip} alt="chip" />
        </div>
      )}
                </div>
              <div className="long-field" onClick={()=>setChipVisible("right-half")}
                                          onMouseEnter={()=>setIsHovered("right-half")}
                                          onMouseLeave={()=>setIsHovered(null)}
                >
                19-36
                {chipVisible==="right-half" && (
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
