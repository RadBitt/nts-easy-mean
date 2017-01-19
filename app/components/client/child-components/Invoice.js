import React from 'react';
import { Link } from 'react-router';

const Request = (props) => {

// Fix for invoices
	const ntsReq = props.fetchInvoice(props.params.key);
  const vesselInfo = props.fetchVessel(ntsReq.vesselId);
	const {details} = props.details;

	return(
		<tr>
			<td><Link to={`/dashboard/invoices/${details.id}`}>{details.id}</Link></td>
			<td>{details.date}</td>
			<td>{details.vessel}</td>
		</tr>
	)
}
 
export default Request;