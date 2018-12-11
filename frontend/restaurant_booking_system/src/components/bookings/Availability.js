import React from "react";
import { Link } from "react-router-dom"
import moment from "moment";

const Availability = (props) => {


const date =  props.booking.date
const dateSorted = date.slice(0,10)

const formattedDate = moment(dateSorted).format("dddd Do MMM YYYY");

const time = date.slice(11, 16)
const id = props.booking.id

  return(
      <div>time: {props.proposedDateTime}</div>
  )
}

export default Availability;
