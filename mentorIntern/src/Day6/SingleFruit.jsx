  

import React from 'react'

const SingleFruit = ({fruits}) => {
 
  return (
    <>
 { 
 
  fruits.map((fruit)=>(
<div key={fruit.id}><h1>{fruit.id}-Fruit:{fruit.emoji}-Price:{fruit.price}</h1></div>
  ))
 }
    
    
    </>
  )
}

export default SingleFruit