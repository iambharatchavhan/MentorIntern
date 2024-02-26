import React, { useEffect, useRef } from 'react'

const UseRefHook = () => {
  
    const textValue = useRef()

    useEffect(()=>{
        console.log("useEffect is called")
    },[textValue.current])

    const handleAlert = ()=> {
    alert('Hello  '+ textValue.current.value)

    }

  return (
    <div>
 <input type='text'  ref={textValue} />
 <button onClick={handleAlert}>Click To show alert</button>
    </div>
  )
}

export default UseRefHook