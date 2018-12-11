import React from "react";
import moment from "moment";

const SingleBookingUpdateForm = (props) => {
  if(!props.booking) return null

  function handleSubmit(event){
    event.preventDefault();
    const booking = {
      "id": props.booking.id,

      "firstName": event.target.firstName.value,
      "lastName": event.target.lastName.value,
      "date": event.target.date.value,
      "numberOfCovers": event.target.numberOfCovers.value,
      "tableNumber": event.target.tableNumber.value
    }
    props.handleBookingUpdate(booking)
  }

  // const tableOptions = props.restTables.map((restTable) => {
  //   return <option key={restTable.id} value={restTable._links.self.href}>{restTable}
  // })

  const date = props.booking.date
  const dateSorted = date.slice(0,19)
  const formattedDate = moment(dateSorted).format("dddd Do MMM YYYY");

  const time = date.slice(11, 16)
  // const id = props.booking.id


  const dateOptions = props.bookings.map((booking) => {
    return (
      <option key={booking.id} value={booking._links.self.href}>{formattedDate} {time}</option>
    )
  })


  return (

    <form className="container" onSubmit={handleSubmit}>
    <div className="single-booking-update-container">
    <h6>First Name:</h6><input className="m-4 border rounded" type="text" placeholder="First Name" name="firstName" defaultValue={props.booking.customer.firstName}/>
    <h6>Last Name:</h6><input className="m-4 border rounded" type="text" placeholder="Last Name" name="lastName" defaultValue={props.booking.customer.lastName}/>
    <h6>Existing Date:</h6><select className="m-4 border rounded" type="datetime-local" placeholder="date" name = "date" required>
      {dateOptions}
    </select>

    <h6>New Date:</h6><input className="m-4 border rounded" type="datetime-local" placeholder="datetime-local" placeholder="date" name = "date" defaultValue={formattedDate + time}/>

    <h6>Number of Covers:</h6><input type="number" placeholder="numberOfCovers" name="numberOfCovers" defaultValue={props.booking.numberOfCovers}/>
    <h6>Table Number:</h6><input type="number" placeholder="tableNumber" name="tableNumber" defaultValue={props.booking.tableNumber}/>
    <h6>Receipts:</h6><input type = "number" placeholder = "receipt" name = "receipt" defaultValue = {props.booking.receipt}/>
    <button className="btn btn-info"type="submit">Save</button>
    </div>
    </form>

  )


}
export default SingleBookingUpdateForm;
