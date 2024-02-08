import React, { useState } from 'react'

const ParentTwo = (props) => {
    const [name,setName] = useState("Rama")


  return (

    <div>
        <h1>Name {props.name} id:{props.id} Salary:{props.salary}</h1>
   </div>
  )
}












  export default ParentTwo


