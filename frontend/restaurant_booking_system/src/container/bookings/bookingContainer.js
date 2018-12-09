import React from "react";
import BookingList from "../../components/bookings/BookingList";

class BookingContainer extends React.Component{
constructor(props){
  super(props);
  this.state = {
    bookings:[{
      id:1,
      leadCustomer:"Craig Dunlop",
      guests: 4,
      time:"17:50",
      table: 2
    },
    {
      id:2,
      leadCustomer:"Eilidh MacKenzie",
      guests: 4,
      time:"17:50",
      table: 4
    },
  ]
  }
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
