import React from 'react';
import { Link } from 'react-router';

const Requests = (props) => {
	return(
		<table className="table table-striped">
			<caption>All Requests</caption>
			<tbody>
			<tr>
				<th>ID</th>
				<th>Date</th>
				<th>Vessel</th>
				<th>Status</th>
			</tr>
			{
				Object
					.keys(props.requests)
					.map(key => <Request key={key} index={key} 
						request={props.requests[key]} 
						fetchVessel={props.fetchVessel} 
					/>)
			}
			</tbody>
		</table>
	)
}

// Request Component
const Request = (props) => {
	const request = props.request;
	const vessel = props.fetchVessel(request.vesselId);
	const vesselName = vessel.boatName;

	return(
		<tr>
			<td><Link to={`/dashboard/requests/${request.id}`}>{request.id}</Link></td>
			<td>{new Date(request.date).toLocaleDateString()}</td>
			<td>{vesselName}</td>
			<td>{request.status}</td>
		</tr>
	)
}

export default Requests;
