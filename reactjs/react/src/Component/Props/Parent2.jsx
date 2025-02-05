import React, { Component } from 'react';
import Child2 from './Child2';

class Parent2 extends Component {

    
  render() {
    // let obj1={
    //     name:"jenny",
    //     age:20,
    //     city:"Delhi"

    // }
    let fun1=()=>{
        window.alert("After clicking the button");
    }
   
    
    return (
      <div>
        {/* <Child2 name="devi"/> */}
        {/* <Child2 age ={20}/> */}
        {/* <Child2 arr={[10,20,30]}/> */}
        {/* <Child2 obj={obj1}/> */}
        <Child2 fun={fun1}/>
      </div>
    )
  }
}


export default Parent2

