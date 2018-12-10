import React from "react";

const Customer = (props) => {

  return(
    <div className = "single-customer">
      <p> Name: {props.customer.firstName} {props.customer.lastName}: </p>
      <p> Contact number: {props.customer.contactNumber}, email:{props.customer.email}</p>
      <p> Bookings: what do we need to see? </p>
    </div>
  )
}

export default Customer;
