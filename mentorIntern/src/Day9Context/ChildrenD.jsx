import React, { useContext } from 'react'
import { emailContext } from './Contex'
import { theData } from './Contex'


const ChildrenD = () => {
    const {email} = useContext(emailContext)
    const {username} = useContext(theData)

  return (
    <div>
        <h1>
        I am Children D email is :<span style={{color:"blue"}}>{username}</span>
        </h1>
        <h1>
        and email is :<span style={{color:"red"}}>{email}</span> from Context Root
        </h1>

    </div>
  )
}

export default ChildrenD