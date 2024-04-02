import React, { useCallback, useEffect, useRef, useState } from 'react'

const Bgcolor = () => {
    
    const [color, setcolor] = useState("black")
    const [length, setlength] = useState(8)
    const [numberAllowed,setNumberAllowed]=useState(false)
    const [charAllowed,setCharAllowed]=useState(false)
    const [password,setPassword]=useState("")
    const passwordRef=useRef(null)


    const passwordGenerator=useCallback(()=>{
        let pass=""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllowed) str += "0123456789"
        if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

        for(let i=1;i<=length;i++){
            let char=Math.floor(Math.random()*str.length+1)
            pass+=str.charAt(char)
        }
        setPassword(pass)
    },[length,numberAllowed,charAllowed,setPassword])

    const copyPasswordToClipboard=useCallback(()=>{
        passwordRef.current?.select()
        window.navigator.clipboard.writeText(password)
    },[password])
    useEffect(()=>{
        passwordGenerator()
    },[length,numberAllowed,charAllowed,passwordGenerator])

    
  return (
    <div style={{backgroundColor:color}} className='w-full h-screen duration-200 relative rounded-lg'>
    <div className='absolute max-w-md mx-[25rem] shadow-md rounded-lg px-8 my-8 text-orange-500 bg-gray-400 
    '>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input ref={passwordRef}  value={password} type='text' className='outline-none w-full py-1 px-3' placeholder='password' readOnly></input>
            <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white py-0.5 px-3 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type='range' min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>setlength(e.target.value)}/>
        <label className='font-semibold'>length: {length}</label>
        <div className=' flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={numberAllowed} id='numberInput' onChange={()=>{
                setNumberAllowed((prev)=>!prev);
            }}></input>
            <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className=' flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={charAllowed} id='characterInput' onChange={()=>{
                setCharAllowed((prev)=>!prev);
            }}></input>
            <label htmlFor='characterInput'>Characters</label>
        </div>
      </div>
      </div>
    </div>
      <div className='fixed flex flex-wrap justify-center bottom-10 px-2 inset-x-0'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 bg-white rounded-3xl'>
            <button onClick={()=>setcolor("#61c0bf")} style={{backgroundColor:"blue"}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>Blue</button>
            <button onClick={()=>setcolor("pink")} style={{backgroundColor:"pink"}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>Pink</button>
            <button onClick={()=>setcolor("#93e4c1")} style={{backgroundColor:"green"}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>Green</button>
            <button onClick={()=>setcolor("#dcb5ff")} style={{backgroundColor:"magenta"}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>Magenta</button>
            <button onClick={()=>setcolor("black")} style={{backgroundColor:"black"}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>Black</button>
        </div>
      </div>
    </div>
  )
}

export default Bgcolor
