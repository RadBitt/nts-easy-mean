import React from 'react';
import { Link } from 'react-router'; 

const RequestStatus = (props) => {

  const ntsReq = props.fetchRequest(props.params.key);

  return(
    <div className="main-row row no-border">
      <div className="row no-border">
      	<div className="col-md-12">
      		<h2><small>Request ID: {ntsReq.date}</small></h2>
        </div>
      </div>
      <div className="row no-border">
      	<div className="col-md-12">
      		<ul>
            <li>Date Requested: {ntsReq.date}</li>
      			<li>Boat Type: {ntsReq.boatType}</li>
      			<li>Boat Name: {ntsReq.boatName}</li>
      			<li>Boat Location: {ntsReq.boatLoc}</li>
      			<li>Job Description: {ntsReq.jobDesc}</li>
      		</ul>
        </div>
      </div>
    </div>
  )  
}

export default RequestStatus;