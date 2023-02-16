import React from "react";

const TenziesGameHeader = () => {
  return (
    <div className="flex flex-col space-y-3 justify-center items-center border border-slate-300 bg-slate-100 p-10 sm:h-48 lg:h-30">
      <h1 className="text-2xl font-mono font-extrabold p-3 sm:mt-3 sm:p-2 md:text-4xl">
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
