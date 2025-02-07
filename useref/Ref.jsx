// import React, { useRef } from "react";

// const Ref = () => {
//     let demo=useRef()
//     console.log(demo);
//     console.log(demo.current)
//     demo.current.style.backgroundColor="red"

    
//     }
//   return (
//     <div>
//         {/* <h1 ref = {demo}>Hello World</h1> */}
//         <h2 ref={demo1} >I am function based function</h2>
//         <button onClick="ref">Click</button>
//     </div>

//   )
// }

// export default Ref
// import React, { useRef } from 'react';

// const Ref = () => {
//     let demo1=useRef()
//     console.log(demo1);
//     let eventr=()=>{
//         demo1.current.style.backgroundColor="blue"
//     }
//   return (
//     <div>
//     <h2 ref={demo1}>Hello world</h2>
//     <button onClick={eventr}>Click</button>
//     </div>
//   )
// }

// export default Ref
import React, { useRef } from 'react'

const Ref = () => {
    let name=useRef('')
    let Password=useRef('')
    let demo=(e)=>{
        e.preventDefault()
        console.log({name : name.current.value});
        console.log({Password : Password.current.value});
       name === "admin" && Password === "12345" ? window.open("https://pixabay.com/")  : window.location.reload()
        
    }
  return (
    <form action="">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" ref={name} ></input>
        <br/>
        <label htmlFor="Password">Password:</label>
        <input type="text" name="Password" id="Password" ref={Password}></input>
        <br/>
        <button onClick={demo}>Submit</button>

    </form>
  )
}

export default Ref
