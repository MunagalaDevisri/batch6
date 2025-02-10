import React from 'react'
import { id, user } from './Compa'


const Compc = () => {
  return (
    <div>
        {<user.Consumer>
            {
                (name)=>{
                    return (
                        <>
                        {
                            <id.Consumer>
                                {
                                    (number)=>{
                                        return(
                                            <>
                                            <h1>My name is {name}</h1>
                                            <h1>My id is {number}</h1></>
                                        )

                                    }
                                }
                            </id.Consumer>
                        }
                        </>

                    )
                }
            }
        
        </user.Consumer>

        }
        

    </div>
  
  )
}

export default Compc