
import { useEffect, useRef, useState } from "react"
const UseRefHook1=()=>
{

const input1=useRef();

useEffect(()=>{
    console.log("component is rendered with useRef");
},[input1.current])

  const getTextVal=()=>
  {
     alert("hello"+ input1.current.value)
  }

   return <div >
         <input type="text"  ref={input1}/>
         <button onClick={getTextVal}>GetTextVal</button>
   </div>

}
export default UseRefHook1;