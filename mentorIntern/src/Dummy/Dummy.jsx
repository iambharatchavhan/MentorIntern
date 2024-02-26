import React, { useState } from 'react'

const Dummy = () => {
const [username,setUsername] = useState("John")

  return (
    <div>Dummy{username}</div>
  )
}

const ComponentA =()=>{
    return(
        <>
        <h1>Component A</h1>
        </>
    )
}

const ComponentB=()=>{
    return(
        <>
        <h1>Component A</h1>
        </>
    )
}
const ComponentC=()=>{
    return(
        <>
        <h1>Component A</h1>
        </>
    )
}
const ComponentD =()=>{
    return(
        <>
        <h1>Component A</h1>
        </>
    )
}
const ComponentE =()=>{
    return(
        <>
        <h1>Component A</h1>
        </>
    )
}

export default Dummy