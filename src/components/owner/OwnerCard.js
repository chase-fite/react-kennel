import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Owner: Full Name</h3>
          <p>Phone Number: 555-555-5555</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;