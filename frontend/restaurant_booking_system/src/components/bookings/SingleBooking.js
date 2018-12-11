import React from "react";
import { Link } from "react-router-dom"

const SingleBooking = (props) => {


  if(!props.booking){
    return null;
  }

  // const customers = props.booking.customers.map((customer, index) => {
  //   return <li key={index}>{customer.firstName} {customer.lastName}</li>
  // })

  function onDelete(){
    props.handleDelete(props.booking.id)
  }

  const date =  props.booking.date
  const time = date.slice(11, 16)
  const id = props.booking.id


  return (
    <div className="component">
    <p> Time : {props.booking.date}</p>
    <p>Customer: {props.booking.customer.firstName} {props.booking.customer.lastName}</p>
    <p>Number of Guests: {props.booking.numberOfCovers}</p>
    <p> Table: {props.booking.restTable.tableNumber}</p>

    <button onClick={onDelete}>Delete Booking</button>
    <Link to={'/bookings/update/' +id}
    className="single-booking-update"><button>Update</button>
    </Link>
    <button className="btn"onClick={onDelete}>Delete Booking</button>
    </div>
  )
}

export default SingleBooking;
