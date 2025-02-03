import React from "react";

class Cbc1 extends React.Component {
  render() {
    return (
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th colSpan="2">Personal Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Name</strong></td>
            <td>Devisri</td>
          </tr>
          <tr>
            <td><strong>Roll No</strong></td>
            <td>2211CS10666</td>
          </tr>
          <tr>
            <td><strong>Year</strong></td>
            <td>3</td>
          </tr>
          <tr>
            <td><strong>College</strong></td>
            <td>Malla Reddy University</td>
          </tr>
          <tr>
            <td><strong>Qualification</strong></td>
            <td>B-TECH</td>
          </tr>
          <tr>
            <td><strong>CGPA</strong></td>
            <td>8.71</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Cbc1;
