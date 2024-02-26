import React, { Children, useState } from 'react'
import { createContext } from 'react'

 export const theData = createContext(null)
 export const emailContext = createContext(null)

const Context = ({children}) => {
    const [username,setUsername] = useState("Bharat")
    const [email,setEmail] = useState("bharat@example.com")


  return <theData.Provider value={{username}}>
    <emailContext.Provider value={{email}}>
    {children}
    </emailContext.Provider>
    </theData.Provider>
}

export default Context