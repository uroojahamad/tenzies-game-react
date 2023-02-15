import React from "react";

const TenziesGameHeader = () => {
  return (
    <div className="flex flex-col justify-center items-center border border-black p-10 sm:h-48 lg:h-30">
      <h1 className="text-2xl font-mono font-extrabold p-3 sm:mt-3 sm:p-2">
        Tenzies Game
      </h1>
      <p className="text-xl font-mono font-medium sm:pb-7 sm:text-lg">
        Roll untill all dice are same. Cick each dice to freeze it at its
        current value between rolls.
      </p>
    </div>
  );
};

export default TenziesGameHeader;
