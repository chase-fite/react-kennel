import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Employee: Full Name</h3>
          <p>Phone Number: 555-555-5555</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;