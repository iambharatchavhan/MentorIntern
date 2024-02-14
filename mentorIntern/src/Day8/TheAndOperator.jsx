import React, { useState } from 'react'

export const TheAndOperator = () => {
    const [render, setRender] = useState(false)

  return (
    <div>
        
    <h1>Short circuit code </h1>
    {render&& (<h2>Hello Now the condition is true</h2>)}
    {!render&& (<h2>Hello Now the condition is false</h2>)}
    <div>
        <button onClick={()=>setRender(!render)}>Toggle The Condition</button>
   </div>    
</div>
  )
}
