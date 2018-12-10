import React from "react";
import { Link } from "react-router-dom"

const Booking = (props) => {


const date =  props.booking.date
const time = date.slice(11, 16)
const id = props.booking.id
  return(
    <div className = "single-booking">
    <Link to={'/bookings/' +id}
    className="single-booking">{date} {time}
    </Link>
      // <p> Time : {time}</p>
      <p>Customer: {props.booking.customer.firstName} {props.booking.customer.lastName}</p>
      <p>Number of Guests: {props.booking.numberOfCovers}</p>
      <p> Table: {props.booking.restTable.tableNumber}</p>
    </div>
  )
}

export default Booking;
