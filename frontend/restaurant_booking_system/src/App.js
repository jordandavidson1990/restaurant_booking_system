import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import BookingContainer from "./container/bookings/bookingContainer";
import NavBar from "./NavBar";
import BookingFormContainer from "./container/bookings/BookingFormContainer";
import TableContainer from "./container/tables/TableContainer";

class App extends Component {
  render() {
    return(
      <div>
        <Router>
          <React.Fragment>
            <NavBar/>
            <Switch>
            <Route exact path="/bookings" component = {BookingContainer}/>
            <Route exact path="/restTables" component = {TableContainer}/>
            <Route exact path="/bookings/new" component = {BookingFormContainer}/>
          </Switch>
          </React.Fragment>
        </Router>
      </div>

    )
  }
}

export default App;
