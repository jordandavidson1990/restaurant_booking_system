import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import BookingContainer from "./container/bookings/bookingContainer";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return(
      <div>
        <Router>
          <React.Fragment>
            <NavBar/>
            <Switch>
            <Route exact path="/bookings" component = {BookingContainer}/>
          </Switch>
          </React.Fragment>
        </Router>
      </div>

    )
  }
}

export default App;
