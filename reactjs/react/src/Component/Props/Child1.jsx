import React from "react";

const Child1 = (props) => {
  return (
    <div>
      <h2>Personal Information</h2>
      <p>First Name: {props.FirstName}</p>
      <p>Last Name: {props.LastName}</p>
      <p>MobileNumber:{props.MobileNumber}</p>
      <p>email:{props.email}</p>
      <p>Father's Name: {props.Fathersname}</p>
      <p>Mother's Name: {props.Mothersname}</p>
      <p>Date of Birth: {props.DateofBirth}</p>
      <p>College: {props.College}</p>
      <p>Qualification: {props.Qualification}</p>
      <p>Year: {props.Year}</p>
      <p>CGPA: {props.CGPA}</p>
    </div>
  );
};

export default Child1;
