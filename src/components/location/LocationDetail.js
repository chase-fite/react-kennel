import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'

class LocationDetail extends Component {

    state = {
        address: ""
    }

    componentDidMount() {
        console.log("LocationDetail: ComponentDidMount")
        console.log("address", this.state.address)
        
        APIManager.get("locations", this.props.locationId)
        .then(location => {
            this.setState({
                address: location.address
            })
        })
    }

    render() {
        return (
        <div className="card">
            <div className="card-content">
                <h3>Address:</h3>
                <p>{this.state.address}</p>
            </div>
        </div>
        )
    }
}

export default LocationDetail