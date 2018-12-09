import React from "react";
import Request from "../../helpers/request";
import BookingForm from "../../components/bookings/BookingForm";

class BookingFormContainer extends React.Component{

  constructor(props){
    super(props);
    this.handleBookingPost = this.handleBookingPost.bind(this);
  }

  handleBookingPost(booking){
    console.log(booking);
    // const request = new Request();
    // request.post('/api/bookings', booking).then((() => {
    //   window.location='/bookings'
    // }))
  }

render(){
  return(
    <BookingForm handleBookingPost = {this.handleBookingPost}/>
  )
}
}
export default BookingFormContainer;
