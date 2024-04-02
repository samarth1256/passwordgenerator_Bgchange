import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bgcolor from './Bgcolor';

function App() {
  const [count,setCount]=useState(5);
  const increaseCount=()=>{
    setCount(prev=>prev+1)
    setCount(prev=>prev+1)
    setCount(prev1=>prev1+1)
  }
  const decreaseCount=()=>{
    setCount(count-1)
  }
  return (
    <>
    {/* <div style={{backgroundColor:"red"}} className='w-full h-full'> */}
     <h1 className='items-center justify-center text-2xl'>Value of count is {count}</h1>
      <button className='bg-blue-200 rounded-lg p-3 mx-5' onClick={increaseCount}>Increase</button>
      <button className='bg-red-200 rounded-lg p-3 mx-5'  onClick={decreaseCount}>Decrease</button>
    <Bgcolor/>
    {/* </div> */}
    </>
  )
}

export default App
