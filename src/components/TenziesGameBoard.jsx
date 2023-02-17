import React, {useState, useEffect} from "react";
import Dice from "./Dice";

const TenziesGameBoard = () => {
  
  const allNewDice = () => {
    const newDiceArray = [];
    for (let index = 0; index < 10; index++) {
      const randomNumber = Math.ceil(Math.random() * 6);
      newDiceArray.push(randomNumber); 
    }
    return newDiceArray;
  }
  
  const [diceSet, setDiceSet] = useState(allNewDice());

  const rollDice = () => {
    setDiceSet(allNewDice());
  }

  return (
    <>
      <div className="w-full border-b border-slate-300 bg-slate-100 p-10 h-96 sm:h-60 flex justify-center items-center">
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 gap-5 lg:gap-10 p-3 shadow-2xl rounded-xl pt-4 bg-slate-100">
          {
            diceSet.map((diceNumber, index) => {
              return <Dice 
                key={index}
                value={diceNumber}
              />
            })
          }
        </div>
      </div>

      {/* Roll button */}
      <div className="w-full flex justify-center items-center bg-slate-100 p-10 h-32 sm:h-20">
        <button className="w-60 h-14 sm:w-40 sm:h-10 lg:w-60 lg:h-14 border border-blue-500 bg-blue-500 cursor-pointer text-white rounded-3xl shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-600 text-3xl font-mono active:translate-y-1 duration-150 active:shadow-inner active:shadow-blue-900" onClick={rollDice}>
          Roll
        </button>
      </div>
    </>
  );
};

export default TenziesGameBoard;
