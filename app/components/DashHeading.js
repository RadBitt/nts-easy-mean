import React from 'react';

const DashHeading = (props) => {

	const pathname = props.path;
	const displayName = props.displayName;
	let location = props.loc;

	return (
		<span>
			<h1 className="dash-location">{`${pathname.slice(1)} > ${location = location == 'active' ? 'active requests' : location}`}</h1>
		</span>
	);

} 

export default DashHeading;