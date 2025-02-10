import React from 'react'
import Compb from './Compb'
export let user=React.createContext()
export let id=React.createContext()

const Compa = () => {
  return (
    <div>
        <user.Provider value={"devi"}>
            <id.Provider value={10}>
                <Compb/>
            </id.Provider>
        </user.Provider>
    </div>
  )
}

export default Compa