import { useEffect, useRef, useState } from "react"
//useRef with state which will render the component each time 
const UseRefHook=()=>
{

const [input,setInput]=useState('');

useEffect(()=>{
    console.log("component is rendered with State");
},[input])

  const getTextVal=()=>
  {
     alert("hello "+input)
  }

   return <div >
         <input type="text" value={input}  onChange={(e)=>setInput(e.target.value)}/>
         <button onClick={getTextVal}>GetTextWithState</button>
   </div>

}
export default UseRefHook;