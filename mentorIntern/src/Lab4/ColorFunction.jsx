import React, { useState } from 'react'

const ColorFunction = () => {
    const [color,setColor] = useState("")
    
    //  console.log(color)
  return (
    <div className='color-container'>
        <div>

        <h1 style={{color:color}}> My Favorite Color is Yellow</h1>
        <div className='btn-group'>
            <button onClick={()=>setColor("red")}>Red</button>
            <button  onClick={()=>setColor("green")}  >Green</button>
            <button onClick={()=>setColor("yellow")} >Yellow</button>
            <button  onClick={()=>setColor("blue")}>Blue</button>
        </div>

        </div>
       


    </div>
  )
}

export default ColorFunction