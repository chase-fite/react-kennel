import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import APIManager from '../../modules/APIManager'

class LocationList extends Component {
    //define what this component needs to render
    state = {
        locations: [],
    }

    componentDidMount() {
        console.log("LOCATION LIST: ComponentDidMount");
        //getAll from locationManager and hang on to that data; put it in state
        APIManager.getAll("locations")
            .then((locationsArray) => {
                this.setState({
                    locations: locationsArray
                })
            })
    }

    deleteLocation = id => {
        APIManager.delete("locations", id)
        .then(() => {
            APIManager.getAll("locations")
            .then(updatedLocations => {
                this.setState({
                    locations: updatedLocations
                })
            })
        })
    }

    render() {
        console.log("LocationList: Render");

        return (
            <div className="container-cards">
                {this.state.locations.map(location =>
                    <LocationCard
                        key={location.id}
                        location={location}
                        deleteLocation={this.deleteLocation} />
                )}
            </div>
        )
    }
}

export default LocationList