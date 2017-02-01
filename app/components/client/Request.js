import React from 'react';
import { Link } from 'react-router'; 

const Request = (props) => {

  const ntsReq = props.fetchRequest(props.params.key);
  const vesselInfo = props.fetchVessel(ntsReq.vesselId);
  let adminTools = '';

  if (props.admin) {

    if (!ntsReq.estimateId) { // Estimate Does Not Exists
      adminTools = <AdminRequestTools
        ntsReq={ntsReq} 
        postEstimate={props.postEstimate}
        updateRequest={props.updateRequest} 
      />
    } else { // Estimate Exists
      adminTools = <AdminRequestTools
        ntsReq={ntsReq} 
        updateEstimate={props.updateEstimate}
        updateRequest={props.updateRequest} 
      />
    }
  }
  // Display the request info, as well as its vessels info.
  return(
    <div className="main-row row no-border">
      <div className="row no-border">
      	<div className="col-md-12">
      		<h2><small>Request ID: {ntsReq.id}</small></h2>
          <h2><small>Request Status: {ntsReq.status}</small></h2>
        </div>
      </div>
      {/* Render the Admin Tools */}
      {adminTools}
      <div className="row no-border">
      	<div className="col-md-12">
      		<ul>
            <li>Date Requested: {ntsReq.date}</li>
      			<li>Boat Type: {vesselInfo.boatType}</li>
      			<li>Boat Name: {vesselInfo.boatName}</li>
      			<li>Boat Location: {ntsReq.boatLoc}</li>
      			<li>Job Description: {ntsReq.jobDesc}</li>
      		</ul>
        </div>
      </div>
    </div>
  )
}

// ========================================================== //
// Admin tools
// ========================================================== //
/* 
* Is rendered if the admin is logged in and viewing a request.
*/
class AdminRequestTools extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.createEstimate = this.createEstimate.bind(this);
    this.updateEstimate = this.updateEstimate.bind(this);
  }

  handleChange(event) {
    const key = this.props.ntsReq.id;
    const prop = 'status';
    const value = event.target.value;
    this.props.updateRequest(key, prop, value);
  }

  // posts the new estimate to the db and returns its id.
  // transitions to estimate editor.
  createEstimate() {
    const ntsReq = this.props.ntsReq
    const param = this.props.postEstimate(ntsReq);
    this.context.router.transitionTo(`/dashboard/estimates/${param}`);
  }

  updateEstimate() {
    const estimateId = this.props.ntsReq.estimateId;
    const param = estimateId;
    this.context.router.transitionTo(`/dashboard/estimates/${param}`);
  }

  render() {

    const ntsReq = this.props.ntsReq;
    const statusOptions = ['In Progress', 'On Hold', 'Updated', 'Completed'];
    const options = [];
    let estimateButton;

    for (var i = 0; i < statusOptions.length; i++) {
      options.push(<option key={i} value={statusOptions[i]}>{statusOptions[i]}</option>)
    }

    if(!this.props.postEstimate) { // If estimate does exist
      estimateButton = <EstimateButton
        classString="btn btn-md btn-primary" 
        estimateFunction={this.updateEstimate}
        text="Update Estimate"
      />
    } else { // If estimate does not exist
      estimateButton = <EstimateButton
        classString="btn btn-md btn-success" 
        estimateFunction={this.createEstimate}
        text="Create Estimate"
      />
    }

    return(
      <div className="row no-border">
        <div className="col-md-3">
          {/* Update the status to *Options* */}
          <select className="form-control" value={ntsReq.status} onChange={this.handleChange}>
            <option value="Recieved">Change the status</option>
            {options}
          </select>
        </div>
        {/* Start estimate from this request */}
        <div className="col-md-3">
          {estimateButton}
        </div>
      </div>
    )
  }
}

const EstimateButton = (props) => {
  return(
    <button className={props.classString} onClick={props.estimateFunction}>{props.text}</button>
  )
}

AdminRequestTools.contextTypes = {
  router: React.PropTypes.object
};

export default Request;