import React from "react";

const Table = (props) => {

  return(
    <div className = "single-table">
    <p>Number: {props.restTable.tableNumber}</p>
    <p>Size: {props.restTable.maxCovers} </p>
    </div>
  )
}

export default Table;
