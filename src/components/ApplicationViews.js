import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import AnimalForm from './animal/AnimalForm'
//only include these once they are built - previous practice exercise
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'
import Login from './auth/Login'
import AnimalEditForm from './animal/AnimalEditForm'
import EmployeeWithAnimals from './employee/EmployeeWithAnimals'

class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/login" render={(props) => {
          return <Login setUser={this.props.setUser} {...props} />
        }} />
        <Route exact path="/" render={(props) => {
            return <Home {...props} />
         }} />
        <Route exact path="/animals" render={props => {
          if (this.props.user) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          return <AnimalDetail
            animalId={parseInt(props.match.params.animalId)}
            {...props}
          />
        }} />
        <Route
          path="/animals/:animalId(\d+)/edit" render={props => {
            return <AnimalEditForm {...props} />
          }}
        />
        <Route exact path="/locations" render={(props) => {
            return <LocationList {...props} />
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)}
            {...props} />
        }} />
        <Route exact path="/employees" render={(props) => {
          if (this.props.user) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
          return <EmployeeWithAnimals {...props} />
        }} />
        <Route path="/owners" render={(props) => {
          if (this.props.user) {
            return <OwnerList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews