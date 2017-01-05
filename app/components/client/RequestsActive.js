import React from 'react';
import Request from './components/Request';

const RequestsActive = (props) => {
	return(
		<table className="table table-striped">
			<caption>All Requests</caption>
			<tbody>
			
			<tr>
				<th>ID</th>
				<th>Date</th>
				<th>Tech</th>
				<th>Status</th>
			</tr>
			{
				Object
					.keys(props.requests)
					.map(key => <Request key={key} index={key} details={props.requests[key]} />)
			}
			</tbody>
		</table>
	)
}
 
export default RequestsActive;