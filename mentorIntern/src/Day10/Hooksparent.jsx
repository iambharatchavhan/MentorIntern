import React from 'react'
import UserRefHook from './UserRefHook'
import UseRefHook from './UseRefHook'
const Hooksparent = () => {
  return (
    <div className='dayOne'>
    <h1>useRefHook</h1>
    <UserRefHook/>
    <br/>
    <UseRefHook/>
    </div>
  )
}

export default Hooksparent