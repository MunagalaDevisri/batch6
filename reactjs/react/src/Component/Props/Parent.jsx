// import React from "react";
// import Child from "./Child";
// class Parent extends React.Component{
//     state={
//         username:"Devi"
//     }
//     render(){
//         return(
//             <Child name={this.state.username}/>


//         )
//     }
// }
// export default Parent;
import React from 'react'
import Child from './Child'


const Parent = () => {
    // let obj1={
    //     name:"devi",
    //     age:20,
    //     address:"hyderabad"
    // }
    let fun=()=>{
        window.alert("i am a function")
    }
  return (
    <div>
{/* <Child  name="devi"/> */}
{/* <Child age={20}/> */}
{/* <Child arr={[10,20,30]}/> */}
{/* <Child obj={obj1}/> */}
<Child fun1={fun}/>
    </div>
  )
}

export default Parent