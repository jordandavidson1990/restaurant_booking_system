import React from "react";
import BookingList from "../../components/bookings/BookingList";
import Request from "../../helpers/request";

class BookingContainer extends React.Component{
constructor(props){
  super(props);
  this.state = {
    bookings:[]
  }
}

componentDidMount(){
  const request = new Request();
  request.get('/api/bookings').then(data => {
    this.setState({bookings:data._embedded.bookings})
  })
}

  render(){
    return(

      <div className = "booking-container">
      <h1> Bookings </h1>
      <BookingList bookings = {this.state.bookings}/>
    </div>

    )
  }
}

export default BookingContainer;
