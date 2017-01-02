import React from 'react';
import { Link } from 'react-router'; 

class RequestStatus extends React.Component {
  render() {
    return(
    <div class="container main-content">
      <div class="row">
      	<div class="col-md-12">
      		<h1>Message about status<small>Kind words</small></h1>
        </div>
      </div>
      <div class="row no-border">
      	<div class="col-md-12">
      		<h1>Request Information</h1>
      		<ul>
      			<li>First Name: </li>
      			<li>Last Name: </li>
      			<li>Email: </li>
      			<li>Phone Number: </li>
      			<li>Boat Type: </li>
      			<li>Boat Name: </li>
      			<li>Boat Location: </li>
      			<li>Job Description: </li>
      		</ul>
        </div>
      </div>
     </div>
    )  
  }
}

export default RequestStatus