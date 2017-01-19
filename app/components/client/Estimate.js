import React from 'react';

const Estimate = (props) => {

	const estimate = props.fetchEstimate(props.params.key);
	const vessel = props.fetchVessel(estimate.vesselId);
	console.log(props.params.key);

	return(
		<div className="main-row row no-border">
      <div className="row no-border">
      	<div className="col-md-12">
      			<ul className="estimate-heading">
      				<li>Date: {new Date(estimate.date).toLocaleDateString()}</li>
      				<li>Vessel: {vessel.boatName}</li>
      				<li>Request ID: {estimate.requestId}</li>
      				<li>Estimate ID: {estimate.id}</li>
      			</ul>
        </div>
      </div>
      {/* Render the Admin Tools */}
      {/*adminTools*/}
    </div>
	)
}
 
export default Estimate;