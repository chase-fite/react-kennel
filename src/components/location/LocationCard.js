import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Address:</h3>
          <p>{this.props.location.address}</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;