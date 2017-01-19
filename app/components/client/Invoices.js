import React from 'react';
import Invoice from './child-components/Invoice';

const Invoices = (props) => {
	return(
		<table className="table table-striped">
			<caption>All Invoices</caption>
			<tbody>
			
			<tr>
				<th>ID</th>
				<th>Date</th>
				<th>Vessel</th>
			</tr>
			{
				Object
					.keys(props.invoices)
					.map(key => <Invoice key={key} index={key} details={props.invoices[key]} />)
			}
			</tbody>
		</table>
	)
}
 
export default Invoices;