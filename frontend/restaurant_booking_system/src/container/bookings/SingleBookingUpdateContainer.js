import React from "react";
import Request from "../../helpers/request";
import SingleBookingUpdateForm from "../../components/bookings/SingleBookingUpdateForm";

class SingleBookingUpdateContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      bookings:[],
      customers:[],
      tables:[],
      booking: null
    }
  }

  componentDidMount(){
    this.getBookings()
    this.getCustomers()
    this.getRestTables()
  }

  getBookings(){
    const request = new Request();
    request.get('/api/bookings').then((data) => {
      this.setState({bookings: data._embedded.bookings})
    })
  }

  getCustomers(){
    const request = new Request();
    request.get('api/customers').then((data) => {
      this.setState({customers: data._embedded.customers})
    })
  }

  getRestTables(){
    const request = new Request();
    request.get('api/restTables').then((data) => {
      this.setState({restTables: data._embedded.restTables})
    })
  }

  handleBookingUpdate(booking){
    const url = 'api/bookings/' + booking.id;
    let request = new Request();
    request.put(url, booking).then(data => {
      window.location = '/bookings'
    })


  }

  render(){
    return(
      <SingleBookingUpdateForm 
      customers = {this.state.customers}
      restTables = {this.state.restTables}
      handleBookingUpdate = {this.handleBookingUpdate}
      />
    )
  }
}
export default SingleBookingUpdateContainer;
