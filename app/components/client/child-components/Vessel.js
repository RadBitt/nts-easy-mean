import React from 'react';

const Vessel = (props) => {
	const {details} = props;
	return(
		<tr>
			<td>Default</td>
			<td>Default</td>
			<td>{details.boatName}</td>
			<td>{details.boatType}</td>
			<td>default</td>
		</tr>
	)
}
 
export default Vessel;