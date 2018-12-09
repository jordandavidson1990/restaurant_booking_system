import React from "react";

const BookingForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const booking = {
      "date": event.target.date.value,
      "firstName": event.target.firstName.value,
      "lastName": event.target.lastName.value,
      "email": event.target.email.value,
      "contactNumber": event.target.contactNumber.value,
      "numberOfCovers": event.target.numberOfCovers.value
    }
    props.handleBookingPost(booking);
  }

  return(
    <form onSubmit = {handleSubmit}>
      <input type="date" placeholder = "date" name = "date"/>
      <input type="text" placeholder = "First Name" name = "firstName"/>
      <input type="text" placeholder = "Last Name" name = "lastName"/>
      <input type="text" placeholder = "Email" name = "email"/>
      <input type="number" placeholder = "Contact Number" name = "contactNumber"/>
      <input type="number" placeholder = "No. of Guests" name = "numberOfCovers"/>
      <button type = "submit">Save Booking</button>
    </form>
  )
}

export default BookingForm;
