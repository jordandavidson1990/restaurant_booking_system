import React, {Component} from "react";
import SingleBooking from "../../components/bookings/SingleBooking";
import Request from '../../helpers/request';

class SingleBookingContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      booking: null
    }
    this.handleDeleteBooking = this.handleDeleteBooking.bind(this);
  }

  componentDidMount(){
    let request = new Request()
    const url = "/api/bookings/" + this.props.id + '?projection=embedInfoInBooking'
    request.get(url).then(data => {
      this.setState({booking: data})
    })
  }

  handleDeleteBooking(id){
    const url = "/api/bookings/" + id;
    let request = new Request()
    request.delete(url).then(() => {
      window.location = "/bookings"
    })
  }

  handleOnClick(id){
    const url = "/api/bookings/" + id;
    let request = new Request()
    request.get(url).then(() => {
      window.location = "/bookings"
    })
  }

  render(){
    return (
      <SingleBooking booking={this.state.booking} handleOnClick={this.handleOnClick} handleDelete={this.handleDeleteBooking}/>
    )
  }

}
export default SingleBookingContainer;
