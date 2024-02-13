import React, { useState } from 'react'

const Day7Counter = () => {
    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(0)

    const counter = ()=>{
        
        setCount2(prevCount => prevCount+1)
    }
 
  return (
    <div>
  <h1>{count}</h1>
  <h1>{count2}</h1>

  <button onClick={()=>setCount(count+1)}>Add Count</button>
  <br/>
  <button onClick={()=>counter()}>Add Count2</button>


    </div>
  )
}

export default Day7Counter