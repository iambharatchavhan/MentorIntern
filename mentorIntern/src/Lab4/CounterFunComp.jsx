import React, { useState } from 'react'

const CounterFunComp = () => {
    const [count,setCount] = useState(0)
  return (
    <div><h1>
        Counter Using Functional component
    </h1>
 <div>
 <button>Add</button>
    <h2>{count}</h2>
    <button>Subtract</button>
 </div>
  


        </div>
    
  )
}

export default CounterFunComp