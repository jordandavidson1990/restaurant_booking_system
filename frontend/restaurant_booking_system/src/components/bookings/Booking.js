import React from "react";
import { Link } from "react-router-dom"

const Booking = (props) => {


const date =  props.booking.date
const dateSorted = date.slice(0,10)
const time = date.slice(11, 16)
const id = props.booking.id
  return(
    <div className = "single-booking-container">
    <Link to={'/bookings/' +id}
    className="single-booking">DETAILS
    </Link>
    <div className="booking-inner">
      <p> Date : {dateSorted}</p>
      <p> Time : {time}</p>
      <p>Customer: {props.booking.customer.firstName} {props.booking.customer.lastName}</p>
      <p>Number of Guests: {props.booking.numberOfCovers}</p>
      <p> Table: {props.booking.restTable.tableNumber}</p>
    </div>
    </Link>
    </div>
  )
}

export default Booking;
