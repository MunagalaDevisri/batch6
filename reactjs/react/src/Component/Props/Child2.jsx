import React, { Component } from 'react';

class Child2 extends Component {
   
    
  render(props) {
    // let {name, age, city}=this.props.obj;
    // console.log(name);
    // console.log(age);
    // console.log(city);
    // let {arr}=this.props.arr;
    // console.log(10);
    
    
    
    
    return (
      <div>
        {/* <h1>My name is {this.props.name}</h1> */}
        {/* <h2>my age is {this.props.age}</h2> */}
        {/* <h1>{10}</h1>
        <h1>{20}</h1>
        <h1>{30}</h1> */}
        {/* <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{city}</h1> */}
        <button onClick={()=>this.props.fun()}>Click Here</button>
        
      </div>
    )
  }
}

export default Child2
