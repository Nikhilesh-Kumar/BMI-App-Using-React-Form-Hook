import React from 'react'
import { useForm } from 'react-hook-form';

function Card({bmi, handleReset}) {

  let {handleSubmit} = useForm();


  return (
    <>
        <form action="" onSubmit={handleSubmit(handleReset)}>
          <div className="w-[200px] border mx-auto mt-36 p-2 border-neutral-400 shadow-2xl rounded-lg text-center">
            <h1 className='text-xl text-neutral-600 font-semibold'>Your BMI is : {bmi}</h1>
            <input className='text-sm font-semibold bg-black text-white px-3 py-1 mt-2 rounded-full' type="submit" value="OK" />
          </div>
        </form>
    </>
  )
}

export default Card;
