import React from "react";
import { Link } from 'react-router-dom';
import Booking from '../bookings/Booking';

const SingleCustomer = (props) => {

  if(!props.customer){
    return null;
  }

  function onDelete() {
    props.handleDelete(props.customer.id)
  }
const bookings = props.customer.bookings.map((booking) => {
  const date = booking.date.slice(0,10);
  const time = booking.date.slice(11,16);
  return(
    <li>
      <Link to = {"/bookings/" +booking.id}>
      <p>Date: {date}</p>
      </Link>
      <p>Time: {time}</p>
      <p>Number of Guests: {booking.numberOfCovers}</p>
      <p>Receipt: {booking.receipt}</p>
    </li>

  )
})

console.log(props.customer.bookings);

  const id = props.customer.id;
  const firstName = props.customer.firstName;
  const lastName = props.customer.lastName;
  const email = props.customer.email;
  const contactNumber = props.customer.contactNumber;

  const booking_dates = props.customer.bookings.map((booking) => {
    return(
      <li key= {booking.id} className = "customer-booking">
          {booking.date.slice(0,10)} at {booking.date.slice(14,19)} for {booking.numberOfCovers} people
      </li>
    )
  })

  return(
    <div className="component">
      <p>Customer: {props.customer.firstName} {props.customer.lastName}</p>
      <p> Bookings: </p>
      <ul>
        {booking_dates}
      </ul>

      <Link to={'/customers/update/' + props.customer.id}>
        <button className="btn m-2 btn-info">update customer</button>
      </Link>
      <ul>
        {bookings}
      </ul>

      <button id="delete-button"className="btn btn-danger btn-sm"onClick={onDelete}>delete customer</button>
    </div>
  )


}

export default SingleCustomer;
