import React from 'react';
import { Link } from 'react-router'; 

class RequestStatus extends React.Component {
  render() {
    const ntsReq = this.props.ntsReq; 
    return(
      <div className="main-row">
        <div className="row">
          <div className="row">
          	<div className="col-md-12">
          		<h1>Message about status<small> Kind words</small></h1>
            </div>
          </div>
          <div className="row no-border">
          	<div className="col-md-12">
          		<h1>Request Information</h1>
          		<ul>
                <li>Date Requested: {ntsReq.date}</li>
                <li>User Id: {ntsReq.uid}</li>
          			<li>Boat Type: {ntsReq.boatType}</li>
          			<li>Boat Name: {ntsReq.boatName}</li>
          			<li>Boat Location: {ntsReq.boatLoc}</li>
          			<li>Job Description: {ntsReq.jobDesc}</li>
          		</ul>
            </div>
          </div>
        </div>
      </div>
    )  
  }
}

export default RequestStatus;