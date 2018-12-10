import React from "react";

const CustomerForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const customer = {
      "firstName": event.target.firstName.value,
      "lastName": event.target.lastName.value,
      "email": event.target.email.value,
      "contactNumber": event.target.contactNumber.value
    }
    props.handleCustomerPost(customer);
  }

  return(
    <form onSubmit = {handleSubmit}>
      <input type="text" placeholder="first name" name="firstName"/>
      <input type="text" placeholder = "last Name" name = "lastName"/>
      <input type="text" placeholder = "email" name = "email"/>
      <input type="text" placeholder = "contact Number" name = "contactNumber"/>
      <button type="submit">register</button>
    </form>
  )

}

export default CustomerForm;
