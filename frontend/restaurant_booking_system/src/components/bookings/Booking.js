import React from "react";

const Booking = (props) => {

  return(
    <div className = "single-booking">
      <p> Time : {props.booking.time}</p>
      <p>Customer: {props.booking.customer.firstName} {props.booking.customer.lastName}</p>
      <p>Number of Guests: {props.booking.numberOfCovers}</p>
      <p> Table: {props.booking.restTable.tableNumber}</p>
    </div>
  )
}

export default Booking;
