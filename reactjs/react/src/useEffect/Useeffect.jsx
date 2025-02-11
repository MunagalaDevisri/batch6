// //no dependency
// import React, { useEffect, useState } from 'react'

// const Useeffect = () => {
//     let [state,setState]=useState(0)
//     useEffect(()=>{
//         setTimeout(()=>{
//             setState(()=>state+1)

//         },2000)
//     })
//   return (
//     <div>
//         <h1>{state}</h1>
//     </div>
//   )
// }

// export default Useeffect

//empty dependency
// import React, { useEffect, useState } from 'react'

// const Useeffect = () => {
//     let [state,setState]=useState(0)
//     useEffect(()=>{
//         setTimeout(()=>{
//             setState(()=>state+1)

//     },2000)
//     },[])
//   return (
//     <div>
//         <h1>{state}</h1>
//     </div>
//   )
// }

// export default Useeffect

//dependency with value
import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    let [state,setState]=useState(0)
    let [incr,setIncr]=useState(0)
    useEffect(()=>{
        setIncr(()=>state*2)
    },[state])
    
  return (
    <div>
        {state}
        <button onClick={()=>setState((e)=>e+1)}>Click</button>
        {incr}
    </div>
  )
}

export default Useeffect