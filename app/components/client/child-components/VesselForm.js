import React from 'react';
import { getType, getLoc, getName } from './helperData';

class VesselForm extends React.Component {

	constructor(props) {
		super(props);
	}
	
	submit(event) {
		event.preventDefault();
		const ntsVes = {
			boatLoc: this.boatLoc.value,
      boatName: this.boatName.value,
      boatType: this.boatType.value,
      hullId: 0,
      id: Date.now(),
      owner: this.props.uid,
      stateId: 0,
      status: 'archived',
      uscgId: 0,
      verified: 0
    }
   this.props.postVessel(ntsVes); 
	}

	cancel(event) {
		// Cancels all open forms
		this.props.removeForm(this.props.index);
	}

	render() {
		return(
			<form className="form-inline" onSubmit={(e) => this.submit(e)}>
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
			  <button type="button" onClick={(e) => this.cancel(e)} className="btn btn-danger">Cancel</button>
			</form>
		)
	}
}
 
export default VesselForm;