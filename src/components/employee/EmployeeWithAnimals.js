import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import AnimalCard from '../animal/AnimalCard'

class EmployeeWithAnimals extends Component {
    state = {
        employee: {},
        animals: [],
        owners: []
    }

    componentDidMount() {
        //got here now make call to get employee with animal
        APIManager.getEmployeeWithAnimals(this.props.match.params.employeeId)
            .then((APIResult) => {
                console.log("APIResult", APIResult)
                this.setState({
                    employee: APIResult,
                    animals: APIResult.animals,
                })
            })
    }

    render() {
        console.log("this.state.animals", this.state.animals)
        return (
            <div className="card">
                <p>Employee: {this.state.employee.name}</p>
                {this.state.animals.map(animal =>
                    <AnimalCard
                        key={animal.id}
                        animal={animal}
                        {...this.props}
                    />
                )}
            </div>
        )
    }
}

export default EmployeeWithAnimals;