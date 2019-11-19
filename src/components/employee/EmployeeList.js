import React, { Component } from 'react'
//import the components we will need
import EmployeeCard from './EmployeeCard'
import APIManager from '../../modules/APIManager'

class EmployeeList extends Component {
    //define what this component needs to render
    state = {
        employees: [],
    }

    componentDidMount() {
        console.log("EMPLOYEE LIST: ComponentDidMount");
        //getAll from employeeManager and hang on to that data; put it in state
        APIManager.getAll("employees")
            .then((employeesArray) => {
                this.setState({
                    employees: employeesArray
                })
            })
    }

    render() {
        console.log("EmployeeList: Render");

        return (
            <div className="container-cards">
                {this.state.employees.map(employee =>
                    <EmployeeCard key={employee.id} employee={employee} />
                )}
            </div>
        )
    }
}

export default EmployeeList
