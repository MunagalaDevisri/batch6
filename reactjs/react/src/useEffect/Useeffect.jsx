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
// import React, { useEffect, useState } from 'react'

// const Useeffect = () => {
//     let [state,setState]=useState(0)
//     let [incr,setIncr]=useState(0)
//     useEffect(()=>{
//         setIncr(()=>state*2)
//     },[state])
    
//   return (
//     <div>
//         {state}
//         <br/>
//         <button onClick={()=>setState((e)=>e+1)}>Click</button>
//         <br/>
//         {incr}
//     </div>
//   )
// }

// export default Useeffect

// fetch api using useEffect hook
import React, { useEffect, useState } from 'react';
import "./Useeffect.css";

const Useeffect = () => {
  let [state,setState]=useState([])
  console.log(state);
  useEffect(()=>{
    window.fetch("https://fakestoreapi.com/products")
    .then((data)=>data.json())
    .then((res)=>setState(res))
  },[])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Price</th>
            <th>image</th>
          </tr>
        </thead>
        {
          state.map((res) => {
            console.log(res);
            return(
              <>
              <tr>
                <td>{res.id}</td>
                <td>{res.Price}</td>
                <td><img src={res.image} alt="" /></td>
                </tr></>
            ) 
          })
        }
      </table>

    </div>
  )
}

export default Useeffect