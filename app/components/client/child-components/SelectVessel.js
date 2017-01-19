import React from 'react';

const SelectVessel = (props) => {

	const vesselsArray = props.vessels
	const options = []
	for (var i = 0; i < vesselsArray.length; i++) {
		options.push(<VesselOption key={i} index={i} details={vesselsArray[i]}  />)
	}

  return(
  <select className="form-control" value={vesselsArray[i]} onChange={props.handleChange}>
  	<option value="Select a Vessel">Select a Vessel</option>
  	{options}
	</select>
  )
}

const VesselOption = (props) => {
	const details = props.details

  return(
  <option value={props.index}>
  	{details.boatName}
	</option>
  )
}

export default SelectVessel;
