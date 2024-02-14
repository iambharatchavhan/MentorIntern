import React from 'react'

const ConditionalRender = ({userType}) => {

  if(userType === "Admin"){
    return <Admin/>
  }else{
    return <User/>
  }
    
  
}


const User =()=> {
  return(
    <>
    <h1>This is User Page</h1>
    <p>Welcome user</p>

    </>
  )
} 



const Admin =()=> {
  return(
    <>
    <h1>This is Admin Page</h1>
    <p>Welcome Sir</p>
    </>
  )
} 



export  default ConditionalRender