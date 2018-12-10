import React from "react";
import BookingList from "../../components/bookings/BookingList";
import Request from "../../helpers/request";
import BookingFilterForm from "../../components/bookings/BookingFilterForm";

class BookingContainer extends React.Component{
constructor(props){
  super(props);
  this.state = {
    bookings:[]
  }
  this.handleDateChange = this.handleDateChange.bind(this);
}

componentDidMount(){
  const request = new Request();
  request.get('/api/bookings').then(data => {
    this.setState({bookings:data._embedded.bookings})
  })
}

handleDateChange(date){
  const filteredBookings = this.state.bookings.filter((booking) => {
    return booking.date.includes(date)
  })
  this.setState({bookings:filteredBookings})
}

  render(){
    return(
      <div className = "booking-container">
      <h1> Bookings </h1>
      <BookingFilterForm handleDateChange = {this.handleDateChange}/>
      <BookingList bookings = {this.state.bookings}/>
    </div>
    )
  }
}

export default BookingContainer;
