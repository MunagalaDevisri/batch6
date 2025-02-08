import React from 'react'
import List from './List'

const Comp3 = () => {
    let demo=[{
        name:"devi",
        id:1

    },
    {
        name:"sri",
        id:3,
        
    },
    {
        name:"ammu",
        id:5
        
    }
]
  return (
    <div>
        <List main={demo}/>
    </div>
  )
}

export default Comp3