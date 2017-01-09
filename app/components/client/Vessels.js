import React from 'react';
import VesselForm from './components/VesselForm';
import base from '../../base';

class Vessels extends React.Component {
		
	constructor(props){
		super(props)
	}

	// Update State & Sync
	componentWillMount() {
		// this.ref = base.syncState('vessels', {
		// 	context: this,
		// 	state: 'vessels',
		// 	queries: {
		// 		orderByChild: 'owner',
		// 		equalTo: this.props.uid
		// 	}
		// })
	}

	// Stop Syncing
	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

	// OnClick show vessel form



	render() {
		const btnStyles = 'btn btn-sm';
		return(
			<div className="main-row row no-border">
      	<div className="col-md-12">
      		<h2><small>All Vessels</small></h2>
        </div>
      <div className="row no-border">
      	<div className="col-md-12">
      		<table className="table table-striped">
						<caption>
							<span>
								<button className={`${btnStyles} btn-success`} >Add a vessel</button>
							</span>
						</caption>
						<tbody>
						<tr>
							<th>Hull ID</th>
							<th>CF</th>
							<th>Name</th>
							<th>Type</th>
							<th>Verified</th>
						</tr>
						{
							// Object
							// 	.keys(props.requests)
							// 	.map(key => <Vessel key={key} index={key} details={props.requests[key]} />)
						}
						</tbody>
					</table>
        </div>
      </div>
    </div>
		)
	}
}

export default Vessels 