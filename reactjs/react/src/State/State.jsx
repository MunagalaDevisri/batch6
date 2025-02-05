// import React, { useState } from 'react';

// const State = () => {
//     let [state, setState]=useState()
//     console.log(state);
//     console.log(setState);

//     let demo=()=>{
//         setState("batch7");
//     }
    
    
//   return (
//     <div>
        
//         <h1>{state}</h1>
//         <button onClick={demo}>Click</button>
//     </div>
//   )
// }

// export default State
import React, { useState } from 'react';

const State = () => {
  let [state,setState]=useState(0);
  let incr=()=>{
    setState(state+1);
  }
  let reset=()=>{
    setState(0);
  }
  let decr=()=>{
    setState(state-1);
  }
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={incr}>increment</button>
      <button onClick={decr}>decrement</button>
      <button onClick={reset}>Reset</button>
      </div>
  )
}

export default State