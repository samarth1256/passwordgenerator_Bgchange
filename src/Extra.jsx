  //const [count, setCount] = useState(0)
  //const [bg,setBg]=useState('bg-blue-100')
  // const [theme,setTheme]=useState({count:4,bg:'bg-yello-500'})
  // const count=theme.count
  // const bg=theme.bg
  // const [resourceType,setResourceType]=useState('Posts')
  // const [items,setItems]=useState([])
  // const [name,setName]=useState('')
  // const prevName=useRef('')

  // const handleDeacrease=()=>{
  //   // setCount(prev=>prev-1)
  //   // setBg('bg-red-100')
  //   setTheme(prev=>{
  //     return{...prev,count:prev.count-1,bg:"bg-red-100"}
  //   })
  // }
  // const handleIncrease=()=>{
  //   setTheme(prev=>{
  //     return{...prev,count:prev.count+1,bg:"bg-blue-100"}
  //   })
  // }

  // useEffect(()=>{
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then(response => response.json())
  //     .then(json => setItems(json))
  // },[resourceType])


  // useEffect(()=>{
  //   prevName.current=name
  // },[name])


  {/* <div className={`h-32 w-full ${bg} py-5`}>
        <button className='bg-red-200 px-5 py-4 rounded-lg' onClick={handleDeacrease}>Decrease</button>
        <button className='bg-green-200 px-5 py-4 rounded-lg ml-2' onClick={handleIncrease}>Increase</button>
        {count}
      </div>

      <div className='mt-32'>
        <button className='mx-2 bg-violet-300 rounded-xl py-4 px-3' onClick={()=>setResourceType('Posts')}>Posts</button>
        <button className='mx-2 bg-lime-300 rounded-xl py-4 px-3' onClick={()=>setResourceType('Comments')}>Comments</button>
        <button className='mx-2 bg-pink-300 rounded-xl py-4 px-3' onClick={()=>setResourceType('Users')}>Users</button>
        <h1 className='mt-5 text-3xl font-semibold'>{resourceType}</h1>
        {items.map((item)=>{
          return <p>{JSON.stringify(item)}</p>
        })}
      </div>

      <div>
        <input value={name} onChange={e=>setName(e.target.value)}/>
        <h1>My name is {name} and previously it was {prevName.current}</h1>
      </div> */}

