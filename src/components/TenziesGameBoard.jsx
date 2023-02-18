import React, {useState} from "react";
import Dice from "./Dice";
import {nanoid} from 'nanoid'

const TenziesGameBoard = () => {
  
  const generateNewDice = () =>{
      return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      }
  }

  const allNewDice = () => {
    const newDiceArray = [];
    for (let index = 0; index < 10; index++) {
      newDiceArray.push(generateNewDice()); 
    }
    return newDiceArray;
  }
  
  const [diceSet, setDiceSet] = useState(allNewDice());

  const rollDice = () => {
    setDiceSet(prevDiceSet => prevDiceSet.map(dice =>{
      return dice.isHeld ? dice : generateNewDice() 
    }));
  }

  const holdDice = (id) =>{
    console.log(id)
    setDiceSet(prevDiceSet => prevDiceSet.map((dice, index) => {
      return dice.id === id ? {...dice, isHeld: !dice.isHeld} : dice 
    }))
  }

  return (
    <>
      <div className="w-full border-b border-slate-300 bg-slate-100 p-10 h-96 sm:h-60 flex justify-center items-center">
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 gap-5 lg:gap-10 p-3 shadow-2xl rounded-xl pt-4 bg-slate-100">
          {
            diceSet.map((diceNumber, index) => {
              return <Dice 
                key={index}
                value={diceNumber.value}
                isHeld={diceNumber.isHeld}
                holdDice={() => holdDice(diceNumber.id)}
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