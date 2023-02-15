import React from "react";

const RollButton = () => {
  return (
    <div className="flex justify-center items-center border border-black p-10 h-32 sm:h-20">
      <button className="w-60 h-14 sm:w-40 sm:h-10 lg:w-60 lg:h-14 border border-blue-500 bg-blue-500 cursor-pointer text-white rounded-3xl shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-600 text-3xl font-mono">
        Roll
      </button>
    </div>
  );
};

export default RollButton;
