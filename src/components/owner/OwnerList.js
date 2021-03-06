import React, { Component } from 'react'
//import the components we will need
import OwnerCard from './OwnerCard'
import APIManager from '../../modules/APIManager'

class OwnerList extends Component {
    //define what this component needs to render
    state = {
        owners: [],
    }

    componentDidMount() {
        console.log("OWNER LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        APIManager.getAll("owners")
            .then((ownersArray) => {
                this.setState({
                    owners: ownersArray
                })
            })
    }

    deleteOwner = id => {
        APIManager.delete("owners", id)
        .then(() => {
            APIManager.getAll("owners")
            .then(updatedOwners => {
                this.setState({
                    owners: updatedOwners
                })
            })
        })
        
    }

    render() {
        console.log("OwnerList: Render");

        return (
            <div className="container-cards">
                {this.state.owners.map(owner =>
                    <OwnerCard
                        key={owner.id}
                        owner={owner}
                        deleteOwner={this.deleteOwner} />
                )}
            </div>
        )
    }
}

export default OwnerList