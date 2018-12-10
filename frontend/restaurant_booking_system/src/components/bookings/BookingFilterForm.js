import React from "react";

const BookingFilterForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const date = event.target.date.value;
    console.log(date);
    props.handleDateChange(date);
  }

  return(
    <form onSubmit = {handleSubmit} >
      <input type="date" name="date"/>
      <input className="btn text-secondary" type = "submit" value = "Filter"/>
    </form>
  )
}
export default BookingFilterForm
