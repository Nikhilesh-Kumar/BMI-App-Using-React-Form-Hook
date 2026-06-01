
/* 
import { useForm } from "react-hook-form"
import Card from "./components/Card"
import { useState } from "react";

function App() {
  let {register, handleSubmit, reset} = useForm();
  let [bmi,  setBmi] = useState(0);
  

  function bmiCalculator(data){
    let height =  data.height;
    let weight =  data.weight;
    setBmi(Math.floor(weight/(height*height)));
    reset();
  }

  return (
    <>
      {
        bmi === 0 ?
        <form action="" onSubmit={handleSubmit(bmiCalculator)}>
          <div className='w-80 border border-neutral-400 mx-auto mt-40 px-4 py-2 rounded-lg shadow-lg'>
              <h1 className='text-center text-lg text-neutral-600 font-semibold'>Check Your Body Mass Index</h1>
              <input {...register('height')} className='w-full text-sm text-neutral-600 font-medium my-2 border border-neutral-300 rounded-lg py-1 px-1 outline-none' type="text" placeholder='Enter your height in metres' />
              <input {...register('weight')} className='w-full text-sm text-neutral-600 font-medium my-2 border border-neutral-300 rounded-lg py-1 px-1 outline-none' type="text" placeholder='Enter your weight in Kgs' />
              <input className='w-full bg-black text-white px-2 py-1 rounded-lg mt-2 inline mb-1' type="submit" value='GET BMI' />
          </div>
        </form>
        :
        <Card bmi={bmi} />
      }
      
    </>
  )
}

export default App; */











