import React from "react";

const Customer = (props) => {
const bookingArray = props.customer.bookings;
const visits = bookingArray.length
console.log(bookingArray);

console.log(visits);
  return(
    <div className = "single-customer">
      <p> Name: {props.customer.firstName} {props.customer.lastName}: </p>
      <p> Contact number: {props.customer.contactNumber}, email:{props.customer.email}</p>
      <p> Number of Bookings: {visits}</p>
    </div>
  )
}

export default Customer;
