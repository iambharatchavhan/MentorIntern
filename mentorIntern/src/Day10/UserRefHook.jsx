import React from 'react'
import { useEffect,useState } from 'react'
const UserRefHook = () => {
    const [timer,setTimer] = useState(0)
    const handleClick = () => {
        setTimer(timer+1)
     }
 

    useEffect(()=>{
     console.log("Hello")
    },[timer])

  return (
    <div>
    <h1>Count {timer}</h1>
    <button onClick={()=>handleClick()}>Click Me</button>
      
    </div>
  )
}

export default UserRefHook