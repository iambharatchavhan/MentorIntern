import { useEffect, useState } from "react"

const UseEffectDemo1=()=>
{
    const [num,setNum]=useState(0);
 
   useEffect(()=>
   {
    document.title=`useEffect Demo`;
    setTimeout(()=>
    {
        console.log("hello useEffect");
    },1000);
    setNum(num);
   },[])

   return <div>
    <h1>useEffect demo and count is  {num}</h1>
    <button onClick={()=>setNum(num+1)}>Increment</button>
    
   </div>

}
export default UseEffectDemo1;

