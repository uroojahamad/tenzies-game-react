import React from 'react'

const Dice = (props) => {

  return (
    <div className='w-12 h-12 flex justify-center items-center cursor-pointer rounded-xl bg-white shadow-2xl hover:-translate-y-1 border border-slate-200 hover:bg-green-300'>
      <span className='text-center font-mono font-bold text-2xl'>{props.value}</span>
    </div>

  )
}

export default Dice