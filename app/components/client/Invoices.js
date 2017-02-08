import React from 'react';
import { Link } from 'react-router';

const Invoices = (props) => {
	return(
		<table className="table table-striped">
			<caption>All Invoices</caption>
			<tbody>
			<tr>
				<th>ID</th>
				<th>Date</th>
				<th>Vessel</th>
				<th>Status</th>
			</tr>
			{
				Object
					.keys(props.invoices)
					.map(key => <InvoiceTd key={key} index={key} 
						invoice={props.invoices[key]}
						fetchVessel={props.fetchVessel}
						fetchRequest={props.fetchRequest}
					/>)
			}
			</tbody>
		</table>
	)
}

const InvoiceTd = (props) => {
	const invoice = props.invoice;
	const vessel = props.fetchVessel(invoice.vesselId);
	const vesselName = vessel.boatName;
	return(
		<tr>
			<td><Link to={`/dashboard/invoices/${invoice.id}`}>{invoice.id}</Link></td>
			<td>{new Date(invoice.date).toLocaleDateString()}</td>
			<td>{vesselName}</td>
			<td>{invoice.status}</td>
		</tr>
	)
}
 
export default Invoices;