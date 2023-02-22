import React, { useState, useEffect } from "react";
import Dice from "./Dice";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import sound from "../mixkit-cheering-crowd-loud-whistle-610.wav";

const TenziesGameBoard = () => {
  const [result, setResult] = useState(false);

  const generateNewDice = () => {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  };

  const allNewDice = () => {
    const newDiceArray = [];
    for (let index = 0; index < 10; index++) {
      newDiceArray.push(generateNewDice());
    }
    return newDiceArray;
  };

  const [diceSet, setDiceSet] = useState(allNewDice());

  const rollDice = () => {
    setDiceSet((prevDiceSet) =>
      prevDiceSet.map((dice) => {
        return dice.isHeld ? dice : generateNewDice();
      })
    );
  };

  const holdDice = (id) => {
    setDiceSet((prevDiceSet) =>
      prevDiceSet.map((dice, index) => {
        return dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice;
      })
    );
  };

  const resetGame = () => {
    setDiceSet(allNewDice());
    setResult(false);
  };

  useEffect(() => {
    const allHeld = diceSet.every((die) => die.isHeld);
    const firstValue = diceSet[0].value;
    const allSameValue = diceSet.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setResult(true);
    }
  }, [diceSet]);

  const winPlayAudio = () => {
    new Audio(sound).play();
  };

  return (
    <>
      {result && <Confetti />}
      {result && winPlayAudio()}
      <div className="w-full border-b border-slate-300 bg-slate-100 p-10 h-96 sm:h-60 flex justify-center items-center">
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 gap-5 lg:gap-10 p-3 shadow-2xl rounded-xl pt-4 bg-slate-100">
          {diceSet.map((diceNumber, index) => {
            return (
              <Dice
                key={index}
                value={diceNumber.value}
                isHeld={diceNumber.isHeld}
                holdDice={() => holdDice(diceNumber.id)}
              />
            );
          })}
        </div>
      </div>

      <div className="w-full flex justify-center items-center bg-slate-100 p-10 h-32 sm:h-20">
        <button
          className="w-60 h-14 sm:w-40 sm:h-10 lg:w-60 lg:h-14 border border-blue-500 bg-blue-500 cursor-pointer text-white rounded-3xl shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-600 text-3xl font-mono active:translate-y-1 duration-150 active:shadow-inner active:shadow-blue-900"
          onClick={result ? resetGame : rollDice}
        >
          {result ? "Reset Game" : "Roll"}
        </button>
      </div>
    </>
  );
};

export default TenziesGameBoard;
