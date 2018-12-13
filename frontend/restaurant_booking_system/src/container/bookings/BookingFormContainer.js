import React from "react";
import Request from "../../helpers/request";
import BookingForm from "../../components/bookings/BookingForm";

class BookingFormContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      customers:[],
      tables:[],
      bookings:[]
    }
    this.handleBookingPost = this.handleBookingPost.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/customers').then((data) => {
      this.setState({customers:data._embedded.customers})
    })

    request.get('/api/restTables').then((data) => {
      this.setState({tables:data._embedded.restTables})
    })

    request.get('/api/bookings').then((data) => {
      this.setState({bookings:data._embedded.bookings})
    })
  }

  handleBookingPost(booking){
    console.log(booking);
    const request = new Request();
    request.post('/api/bookings', booking).then((() => {
      window.location='/bookings'
    }))
  }

render(){
  return(
    <BookingForm tables = {this.state.tables} customers = {this.state.customers} bookings = {this.state.bookings} handleBookingPost = {this.handleBookingPost}/>
  )
}
}
export default BookingFormContainer;
