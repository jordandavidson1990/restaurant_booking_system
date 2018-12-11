import React from "react";
import { Link } from "react-router-dom";

const Customer = (props) => {
  const bookingArray = props.customer.bookings;
  const visits = bookingArray.length
  console.log(bookingArray);

  const id = props.customer.id
  return(
    <div className = "single-customer">
    <Link to={'/customers/' +id} className="single-customer-link">{id}
    <div className="customer-inner">
    <p> Name: {props.customer.firstName} {props.customer.lastName} </p>
    <p> Contacts: {props.customer.contactNumber}, email:{props.customer.email}</p>
    <p> Number of bookings: {props.customer.bookings.length} </p>
    </div>
    </Link>
    </div>
  )
}

export default Customer;
