import React from "react";

const CustomerFilterNameForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const date = event.target.date.value;
    console.log(date);
    props.handleDateChange(date);
  }

  function handleChange(event){
    event.preventDefault();
    // const search = event.target.lastName.value
    event.persist();
    console.log(event.target.value);
    const search = event.target.value;
    props.handleSearch(search)
  }

  return(
    <form onSubmit = {handleSubmit} >
      <input type="text" name="lastName" placeholder = "Last Name" onChange = {handleChange}/>
      <input type = "submit" value = "Filter"/>
    </form>
  )
}
export default CustomerFilterNameForm;
