import React from "react";

const Booking = (props) => {


const date =  props.booking.date
const time = date.slice(11, 16)
  return(
    <div className = "single-booking">
      <p> Time : {time}</p>
      <p>Customer: {props.booking.customer.firstName} {props.booking.customer.lastName}</p>
      <p>Number of Guests: {props.booking.numberOfCovers}</p>
      <p> Table: {props.booking.restTable.tableNumber}</p>
    </div>
  )
}

export default Booking;
