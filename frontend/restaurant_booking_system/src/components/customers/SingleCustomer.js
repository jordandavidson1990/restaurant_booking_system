import React from "react";

const SingleCustomer = (props) => {

  if(!props.customer){
    return null;
  }

  function onDelete() {
    props.handleDelete(props.customer.id)
  }

  // const id = props.customer.id;
  // const firstName = props.customer.firstName;
  // const lastName = props.customer.lastName;

  return(
    <div className="component">
      <p>Customer: {props.customer.firstName} {props.customer.lastName}</p>
      <p> show list of bookings here </p>
      <button onClick={onDelete}>delete customer</button>
    </div>
  )


}

export default SingleCustomer;
