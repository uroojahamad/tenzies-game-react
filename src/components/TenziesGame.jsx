import React from "react";
import TenziesGameBoard from "./TenziesGameBoard";
import TenziesGameHeader from "./TenziesGameHeader";

const TenziesGame = () => {
  return (
    <div className="flex justify-center items-center">
      <div className='flex flex-col bg-zinc-800 min-h-screen sm:w-3/5 p-7'>
        <TenziesGameHeader />
        <TenziesGameBoard />
      </div>
    </div>
  );
};

export default TenziesGame;
