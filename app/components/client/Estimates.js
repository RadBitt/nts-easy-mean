import React from 'react';
import { Link } from 'react-router';

const Estimates = (props) => {
	return(
		<table className="table table-striped">
			<caption>All Estimates</caption>
			<tbody>
			<tr>
				<th>ID</th>
				<th>Date</th>
				<th>Vessel</th>
				<th>Status</th>
			</tr>
			{
				Object
					.keys(props.estimates)
					.map(key => <EstimateTd key={key} index={key} 
						estimate={props.estimates[key]}
						fetchVessel={props.fetchVessel}
						fetchRequest={props.fetchRequest}
					/>)
			}
			</tbody>
		</table>
	)
}

const EstimateTd = (props) => {
	const estimate = props.estimate;
	const vessel = props.fetchVessel(estimate.vesselId);
	const vesselName = vessel.boatName;
	return(
		<tr>
			<td><Link to={`/dashboard/estimates/${estimate.id}`}>{estimate.id}</Link></td>
			<td>{new Date(estimate.date).toLocaleDateString()}</td>
			<td>{vesselName}</td>
			<td>{estimate.status}</td>
		</tr>
	)
}
 
export default Estimates;