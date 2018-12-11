import React from "react";

const Customer = (props) => {
  const bookingArray = props.customer.bookings;
  const visits = bookingArray.length
  console.log(bookingArray);

  const reducer = (accumulator, currentValue) => accumulator + currentValue;




  function totalSpend(){
    let totalSpend;
    if(bookingArray.length > 0){
    totalSpend = bookingArray.map((booking) => {
      return booking.receipt;
    }).reduce(reducer);
  } else{
    totalSpend = 0;
  }
  return totalSpend;
}

console.log(totalSpend);

console.log(visits);
return(
  <div className = "single-customer">
    <p> Name: {props.customer.firstName} {props.customer.lastName}: </p>
    <p> Contact number: {props.customer.contactNumber}, email:{props.customer.email}</p>
    <p> Number of Bookings: {visits}</p>
    <p> Total Spent: £{totalSpend()}</p>
  </div>
)
}

export default Customer;
