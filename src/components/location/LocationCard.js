import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Address:</h3>
          <p>555 Kennel Parkstreet<br />
          Nashville, TN 37216</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;