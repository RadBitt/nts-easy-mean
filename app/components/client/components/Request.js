import React from 'react';

const Request = (props) => {
	const {details} = props;
	return(
		<tr>
			<td>{details.id}</td>
			<td>{details.date}</td>
			<td>{details.techy}</td>
			<td>{details.techy}</td>
		</tr>
	)
}
 
export default Request;