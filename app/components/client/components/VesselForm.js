import React from 'react';
import { getType, getLoc, getName, getDesc } from './helperData';

const VesselForm = (props) => {

	function submitRequest(event) {
		const ntsVessel = {
      id: `vessel-${Date.now()}`,
      hullId: 0,
      stateId: 0,
      uscgId: 0,
      boatName: this.boatName.value,
      boatType: this.boatType.value,
      boatLoc: this.boatLoc.value,
      verified: 0,
      owner: this.props.uid
    };
	}

	return(
		<form className="form-inline" onSubmit={(e) => this.submitRequest(e)}>
		  <div className="form-group">
		    <label className="sr-only" htmlFor="boatName">Vessel Name</label>
		   	<input ref={(input)=> this.boatName = input} type="text" className="form-control" defaultValue={getName()} placeholder="Vessel Name" />
		  </div>
		  <div className="form-group">
		    <label className="sr-only" htmlFor="boatType">Vessel Type</label>
		   	<input ref={(input)=> this.boatType = input} type="text" className="form-control" defaultValue={getType()} placeholder="Vessel Model" />
		  </div>
		  <div className="form-group">
		    <label className="sr-only" htmlFor="boatLoc">Vessel Location</label>
		   	<input ref={(input)=> this.boatLoc = input} type="text" className="form-control" defaultValue={getLoc()} placeholder="Vessel Location" />
		  </div>
		  <button type="submit" className="btn btn-success">Submit</button>
		</form>
	)
}
 
export default VesselForm;