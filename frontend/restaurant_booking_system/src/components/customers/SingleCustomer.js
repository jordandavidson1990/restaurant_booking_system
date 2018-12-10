import React from "react";
import { Link } from 'react-router-dom';

const SingleCustomer = (props) => {

  if(!props.customer){
    return null;
  }

  function onDelete() {
    props.handleDelete(props.customer.id)
  }

  const id = props.customer.id;
  const firstName = props.customer.firstName;
  const lastName = props.customer.lastName;
  const email = props.customer.email;
  const contactNumber = props.customer.contactNumber;

  return(
    <div className="component">
      <p>Customer: {props.customer.firstName} {props.customer.lastName}</p>
      <p> show list of bookings here </p>

      <Link to={'/customers/update/' + props.customer.id}>
        <button className="btn m-2 btn-info">update customer</button>
      </Link>
      <button id="delete-button"className="btn btn-danger btn-sm"onClick={onDelete}>delete customer</button>
    </div>
  )


}

export default SingleCustomer;
