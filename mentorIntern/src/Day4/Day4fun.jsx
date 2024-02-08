import React,{useState} from 'react'



const Day4fun = () => {
    const [name,setName] = useState("")

    const changeName = (e)=> {
        console.log(e)
    setName(e.target.value)
    }

  return (
    <>
    <div>
        <h1>
        Hello my name is {name}

        </h1>
        </div>
    <input type='text' value={name} onChange={(e)=>changeName(e)}/>
    </>
   
  )
}

export default Day4fun