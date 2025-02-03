import React from "react";
import Child1 from "./Child1";

class Parent1 extends React.Component {
  state = {
    FirstName: "Munagala",
    LastName: "Devisri",
    MobileNumber:8121965606,
    email:"munagala.812@gmail.com",
    Fathersname: "Munagala Srinivas",
    Mothersname: "Munagala Madhavi",
    DateofBirth: "26-10-2004",  
    College: "Malla Reddy University",
    Qualification: "B-TECH",
    Year: "III",
    CGPA: 8.71,
  };

  render() {
    return (
      <div>
        
        <Child1 
          FirstName={this.state.FirstName}
          LastName={this.state.LastName}
          Fathersname={this.state.Fathersname}
          Mothersname={this.state.Mothersname}
          MobileNumber={this.state.MobileNumber}
          email={this.state.email}
          DateofBirth={this.state.DateofBirth}
          College={this.state.College}
          Qualification={this.state.Qualification}
          Year={this.state.Year}
          CGPA={this.state.CGPA}
        />
      </div>
    );
  }
}

export default Parent1;
