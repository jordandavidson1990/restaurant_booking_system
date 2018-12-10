import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

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
    <form className="container" onSubmit = {handleSubmit}>

    <div className="row">
      <input className="m-4 border rounded"type="date" placeholder = "date" name = "date"/>
      <div className="container">
      <input className="m-2 border rounded"type="text" placeholder = "First Name" name = "firstName"/>
      <input className="m-2 border rounded" type="text" placeholder = "Last Name" name = "lastName"/>
      <input className="m-2 border rounded" type="text" placeholder = "Email" name = "email"/>
      <input className="m-2 border rounded" type="number" placeholder = "Contact Number" name = "contactNumber"/>
      <input className="m-2 border rounded" type="number" placeholder = "No. of Guests" name = "numberOfCovers"/>

      <button className="btn btn-outline-secondary m-2"type = "submit">Save Booking</button>
      </div>
      </div>
    </form>
  )
}

export default BookingForm;
