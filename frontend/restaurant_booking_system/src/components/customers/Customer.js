import React from "react";
import { Link } from "react-router-dom";

const Customer = (props) => {
  const bookingArray = props.customer.bookings;
  const visits = bookingArray.length
  console.log(bookingArray);

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  function totalSpend(){
    let totalSpend;
    if(bookingArray.length > 0){

    const spending = bookingArray.map((booking) => {
      return parseInt(booking.receipt);
    })
    console.log(bookingArray);
    totalSpend = spending.reduce(reducer)
  } else{
    totalSpend = 0;
  }
  return totalSpend;
}

console.log(totalSpend);


  const id = props.customer.id
  return(
    <div className = "single-customer">

      <Link to={'/customers/' +id} className="single-customer-link">{id}
      <div className="customer-inner">
      <p> Name: {props.customer.firstName} {props.customer.lastName} </p>
      <p> Contacts: {props.customer.contactNumber}, email:{props.customer.email}</p>
      <p> Number of bookings: {props.customer.bookings.length} </p>
      <p> Total Spend: £{totalSpend()}</p>
      </div>
      </Link>

    </div>
  )
}

export default Customer;
