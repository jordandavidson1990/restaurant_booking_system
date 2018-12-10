import React from "react";

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
  //   return <option key={restTable.id} value={restTable._links.self.href}>{resttable}
  // })


  return (
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="First Name" name="firstName" defaultValue={props.booking.customer.firstName}/>
    <input type="text" placeholder="Last Name" name="lastName" defaultValue={props.booking.customer.lastName}/>
    <input type="text" placeholder="Date" name="date" defaultValue={props.booking.date}/>
    <input type="number" placeholder="numberOfCovers" name="numberOfCovers" defaultValue={props.booking.customer.numberOfCovers}/>
    <input type="number" placeholder="tableNumber" name="tableNumber" defaultValue={props.booking.customer.tableNumber}/>
    <button type="submit">Save</button>
    </form>
  )


}
export default SingleBookingUpdateForm;
