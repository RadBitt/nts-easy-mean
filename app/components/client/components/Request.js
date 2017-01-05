import React from 'react';
import { Link } from 'react-router';

const Request = (props) => {
	const {details} = props;
	return(
		<tr>
			<td><Link to={`/dashboard/status/${details.id}`}>{details.id}</Link></td>
			<td>{details.date}</td>
			<td>{details.techy}</td>
			<td>{details.techy}</td>
		</tr>
	)
}
 
export default Request;