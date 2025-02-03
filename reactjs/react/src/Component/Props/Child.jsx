// import React from "react";class based props
// class Child extends React.Component{
//     render()
//     {
//         return(
//             <>
//             <h1>my name is {this.props.name}</h1>
//             </>
//         )
//     }
// }
// export default Child;
//Functional based props
import React from 'react';

const Child = (props) => {
    // console.log(props);
    // let {name,age, address}=props.obj //destructurin the object
    // console.log(name);
    // console.log(age);
    // console.log(address);
  return (
    <div>
        {/* <h1>My name is {props.name}</h1> */}
        {/* <h2>My age is {props.age}</h2> */}
        {/* <h1>{arr}</h1>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{address}</h1> */}
        <button onClick={()=>props.fun1()}>click</button>
        
    </div>
  )
}

export default Child