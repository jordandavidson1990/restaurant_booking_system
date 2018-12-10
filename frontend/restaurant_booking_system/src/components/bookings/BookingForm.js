import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

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
// <<<<<<< HEAD
//     <form className="container" onSubmit = {handleSubmit}>
//
//     <div className="row">
//       <input className="m-4 border rounded"type="date" placeholder = "date" name = "date"/>
//       <div className="container">
//       <input className="m-2 border rounded"type="text" placeholder = "First Name" name = "firstName"/>
//       <input className="m-2 border rounded" type="text" placeholder = "Last Name" name = "lastName"/>
//       <input className="m-2 border rounded" type="text" placeholder = "Email" name = "email"/>
//       <input className="m-2 border rounded" type="number" placeholder = "Contact Number" name = "contactNumber"/>
//       <input className="m-2 border rounded" type="number" placeholder = "No. of Guests" name = "numberOfCovers"/>
//
//       <button className="btn btn-outline-secondary m-2"type = "submit">Save Booking</button>
//       </div>
//       </div>
// =======
    <form className="container" onSubmit = {handleSubmit}>
      <input className="m-4 border rounded" type="datetime-local" placeholder = "date" name = "date"/>
      <select name = "customer">
        {customerOptions}
      </select>
      <input className="m-4 border rounded" type="number" placeholder = "No. of Guests" name = "numberOfCovers"/>
      <select className="m-4 border rounded" name = "table">
        {tableOptions}
      </select>
      <button type = "submit">Save Booking</button>

    </form>
  )
}

export default BookingForm;
