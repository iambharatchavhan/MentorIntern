import React, { useState } from 'react'
import './text.css'

const TextCount = () => {
  const [count,setCount] = useState(0)

  return (
    <section className="isRender">
    <div className="component">
       <h3 id='count-text'>Total CharacterCount is {count}</h3>
       <textarea className='area' onChange={(e)=>setCount(e.target.value.length)}/>
    </div>
  </section>
  )
}

export default TextCount