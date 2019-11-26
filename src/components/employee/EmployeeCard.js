import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Employee: {this.props.employee.name}</h3>
          <p>Phone Number: {this.props.employee.phoneNumber}</p>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Fire</button>
          <button type="button"
        onClick={() => { this.props.history.push(`/employees/${this.props.employee.id}/details`) }}>Details</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;