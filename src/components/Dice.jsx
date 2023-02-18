import React from 'react'

const Dice = (props) => {

  const {value, isHeld, holdDice} = props
  
  return (
    <div className={`w-12 h-12 flex justify-center items-center cursor-pointer rounded-xl shadow-2xl hover:-translate-y-1 border border-slate-200 hover:bg-green-300 ${isHeld ? 'bg-green-400' : 'bg-white'}`} onClick={holdDice}>
      <span className='text-center font-mono font-bold text-2xl'>{value}</span>
    </div>

  )
}

export default Dice