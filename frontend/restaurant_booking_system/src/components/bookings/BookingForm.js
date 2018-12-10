import React from "react";

const BookingForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const booking = {
      "date": event.target.date.value,
      "customer":event.target.customer.value,
      "numberOfCovers": event.target.numberOfCovers.value,
      "restTable": event.target.table.value
    }
    props.handleBookingPost(booking);
  }

  const customerOptions = props.customers.map((customer) => {
    return <option key={customer.id} value={customer._links.self.href}>{customer.firstName} {customer.lastName}</option>
  })

  const tableOptions = props.tables.map((table) => {
    return(
      <option key={table.id} value={table._links.self.href}>{table.tableNumber}</option>
    )
  })

  return(
    <form onSubmit = {handleSubmit}>
      <label htmlFor="date">Date & Time</label>
      <input type="datetime-local" placeholder = "date" name = "date"/>
      {/* <input type="text" placeholder = "First Name" name = "firstName"/>
      <input type="text" placeholder = "Last Name" name = "lastName"/>
      <input type="text" placeholder = "Email" name = "email"/>
      <input type="number" placeholder = "Contact Number" name = "contactNumber"/> */}
      <select name = "customer">
        {customerOptions}
      </select>
      <input type="number" placeholder = "No. of Guests" name = "numberOfCovers"/>
      <label htmlFor="table">Table</label>
      <select name = "table">
        {tableOptions}
      </select>
      <button type = "submit">Save Booking</button>
    </form>
  )
}

export default BookingForm;
