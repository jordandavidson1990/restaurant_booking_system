import React from "react";

const Booking = (props) => {

  return(
    <div className = "single-booking">
      <p> Time : {props.booking.time}</p>
      <p>{props.booking.leadCustomer}</p>
      <p>Number of Guests: {props.booking.guests}</p>
      <p> Table: {props.booking.table}</p>
    </div>
  )
}

export default Booking;
