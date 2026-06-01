import React from 'react'

function Card({bmi}) {
  return (
    <>
        <div className="w-[200px] border mx-auto mt-36 p-2 border-neutral-400 shadow-xl rounded-lg items-center">
            <h1 className='text-center text-xl text-neutral-600 font-semibold'>Your BMI is : {bmi}</h1>
        </div>
    </>
  )
}

export default Card;
