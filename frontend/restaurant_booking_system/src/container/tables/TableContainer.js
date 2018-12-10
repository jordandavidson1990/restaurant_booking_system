import React from "react";
import TableList from "../../components/tables/TableList"
import Request from "../../helpers/request";

class TableContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      restTables:[]
    }
  }

  componentDidMount(){
    const request = new Request();
    request.get('api/restTables').then(data => {
      this.setState({restTables:data._embedded.restTables})
    })
  }

  render(){
    return (
      <div className = "restTable-container">
      <h1> Tables </h1>
      <TableList restTables = {this.state.restTables}/>
      </div>
    )
  }
}
export default TableContainer;
