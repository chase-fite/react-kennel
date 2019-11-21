import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'

class LocationDetail extends Component {

    state = {
        address: "",
        loadingStatus: true
    }

    componentDidMount() {
        console.log("LocationDetail: ComponentDidMount")
        console.log("address", this.state.address)
        
        APIManager.get("locations", this.props.locationId)
        .then(location => {
            this.setState({
                address: location.address,
                loadingStatus: false
            })
        })
    }

    handleDelete = () => {
        this.setState({loadingStatus: true})
        APIManager.delete("locations", this.props.locationId)
        .then(() => this.props.history.push("/locations"))
    }

    render() {
        return (
        <div className="card">
            <div className="card-content">
                <h3>Address:</h3>
                <p>{this.state.address}</p>
                <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Close</button>
            </div>
        </div>
        )
    }
}

export default LocationDetail