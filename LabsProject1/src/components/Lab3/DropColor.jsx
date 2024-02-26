import React, { useState } from 'react'
import './drop.css'

const DropColor = () => {
   const [color,setColor] = useState("red")
  return (
    <section className="isRender">
    <div className="component">
      <div className='color' style={{background:color}}>
    
      </div>
      <select onChange={(e)=>setColor(e.target.value)} className='select-color' style={{background:color}}>
        <option>Red</option>
        <option>Blue</option>
        <option>Yellow</option>
        <option>Green</option>
      </select>
    </div>
  </section>
  )
}

export default DropColor