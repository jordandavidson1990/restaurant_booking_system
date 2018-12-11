import React from "react";
import Request from "../../helpers/request";
import TableForm from "../../components/tables/TableForm";

class TableFormContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      tables:[]
    }
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/restTables').then((data) => {
      this.setState({tables:data._embedded.restTables})
    })
  }

  handleTablePost(table){
    const request = new Request();
    request.post('/api/restTables', table).then((() =>
      window.location='/restTables'
  ))
  }

  render(){
    return(
      <TableForm tables = {this.state.tables} handleTablePost = {this.handleTablePost}/>
    )
  }


}
export default TableFormContainer;
