import React, { useState } from 'react'

const AlertInputValues = () => {
   const [user,setUser] = useState({})


   const handleSubmit =(e)=>{
       e.preventDefault()
       alert(`Hello there, username is ${user.name}, Last Name is ${user.lastName} ,The email is ${user.email}, and the city is ${user.city}`)
   }


   const handleInputs = (e)=>{
    setUser({...user,[e.target.name]:e.target.value})
   }

    

  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)} className='my-form'>
       <input type='text' name='name'  value={user.name || ""} onChange={(e)=>handleInputs(e)}/>
       <input type='text' name='lastName'  value={user.lastName || ""} onChange={(e)=>handleInputs(e)}/>
       <input type='email' name='email'  value={user.email || ""} onChange={(e)=>handleInputs(e)}/>
       <input type='text' name='city'  value={user.city || ""} onChange={(e)=>handleInputs(e)}/>
       <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AlertInputValues