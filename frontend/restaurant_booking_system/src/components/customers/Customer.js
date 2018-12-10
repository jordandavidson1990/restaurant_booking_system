import React from "react";
import { Link } from "react-router-dom";

const Customer = (props) => {

const id = props.customer.id
  return(
    <div className = "single-customer">
      <Link to={'/customers/' +id} className="single-customer">{id}</Link>
      <p> Name: {props.customer.firstName} {props.customer.lastName} </p>
      <p> Contacts: {props.customer.contactNumber}, email:{props.customer.email}</p>
      <p> Number of bookings: {props.customer.bookings.length} </p>
    </div>
  )
}

export default Customer;
