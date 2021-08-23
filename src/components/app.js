import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from "./nav-container"
import OpenPlans from "./open-plans-container"
import AddNewPlan from "./new-plan-container"
import FinishedProjects from "./finished-projects-container"
import Plan from "./plan"

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch("http://127.0.0.1:5000/plans")
    .then(response => response.json())
    .then(data => this.setState({ data: data }))
    .catch(error => console.log("Error fetching plans: ", error))
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <h1>Dev Planner</h1>
          <div>
            <NavBar />

            <Switch>
              <Route exact path="/" render={props => <OpenPlans data ={this.state.data} {...props} />} />
              <Route path="/add-new" component={AddNewPlan} />
              <Route path="/finished-projects" component={FinishedProjects} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
