import React,{useState} from 'react'
import "./RouletteNumbers.css"
import chip from "../../assets/icons/DESIGN-BLACK-CHIP-CUSTOM-POKER-CHIPS-SINGLE-COLOR-HOT-STAMP-DICE_500x500.webp"
export default function RouletteNumbers() {
    const redNumbers=[1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]
    const blackNumbers=[2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35]
    const allNumbers = [];
    const [chipVisible,setChipVisible]=useState(0);
    for(let i=1;i<=12;i++){
        allNumbers.push(i*3)
    }
    for(let i=1;i<=12;i++){
        allNumbers.push(i*3-1)
    }
    for(let i=1;i<=12;i++){
        allNumbers.push(i*3-2)
    }
function addChips(){

}


    const getBackgroundColor = (number) => {
        if (redNumbers.includes(number)) {
          return '#BC4EFF';
        } else if (blackNumbers.includes(number)) {
          return '#461797';
        }
      };
      return (
        <div className="number-board">
            <div className="board-up">
            <div className="zero" key={0}>0</div>
            <div className='number-board-red-black'>
            {allNumbers.map((number) => (
              <div
                className='num'
                key={number}
                style={{
                  backgroundColor: getBackgroundColor(number)

                }}
                onClick={()=>{
                  setChipVisible(number)
                  addChips()
                }}
              >
                {number}
                {chipVisible==number && (
        <div className="proba">
          <img className="chip" src={chip} alt="chip" />
          <img className="chip" src={chip} alt="chip" />
        </div>
      )}
              </div>
            ))}
          </div>
          <div className=""right-thirds>
            <div className="num third">2:1</div>
            <div className="num third">2:1</div>
            <div className="num third">2:1</div>
          </div>
            </div>
            <div className="board-down">
              <div className="long-field">1-18</div>
              <div className="long-field">Even</div>
              <div className="long-field red-bet"></div>
              <div className="long-field black-bet"></div>
              <div className="long-field">Odd</div>
              <div className="long-field">19-36</div>
            </div>
        </div>
      );
      
}
