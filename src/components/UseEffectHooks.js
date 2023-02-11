import React,{useState, useEffect} from 'react'

const UseEffectHooks = () => {
    const [count, setCount] = useState(0)

    const tick = () =>{
        setCount((prevState)=>prevState + 1)
    }
    useEffect(()=>{

        const interval = setInterval(tick, 2000)
        return () =>{
            clearInterval(interval)
        }
    },[count])
  return (
    <div>
        <p>{count}</p>
    </div>
  )
}

export default UseEffectHooks