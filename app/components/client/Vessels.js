import React from 'react';
import VesselForm from './child-components/VesselForm';
import base from '../../base';

class Vessels extends React.Component {
		
	constructor(props){
		super(props);
		this.addForm = this.addForm.bind(this);
		this.removeForm = this.removeForm.bind(this);
		this.state = {
			numForms: 0
		}
	}

	// OnClick show vessel form
	addForm() {
		let oldState = this.state.numForms + 1;
    this.setState({numForms: oldState});
	}

	removeForm() {
		// Cancels all open forms
		let oldState = this.state.numForms;
    this.setState({numForms: 0});
	}

	render() {
		let vessels = this.props.vessels;
		const btnStyles = 'btn btn-sm';
		const forms = [];

		if (!this.props.vessels) {
			vessels = {
				vessel: {
					boatName: '-',
					boatType: '-'
				}
			}	
		}

		for (let i = 0; i < this.state.numForms; i++) {
			forms.push(
				<VesselForm 
				key={i} index={i} 
				postVessel={this.props.postVessel} 
				uid={this.props.uid}
				removeForm={this.removeForm}
				/>
			);
		}

		

		return(
			<div className="main-row">
      <div className="row no-border">
      	<div className="col-md-12">
      		<button onClick={this.addForm} className={`${btnStyles} btn-success`}>Add a vessel</button>
      		{forms}
      		<table className="table table-striped">
						<caption>
								Current Vessels
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
							Object
								.keys(vessels)
								.map(key => <VesselTd key={key} index={key} vessel={this.props.vessels[key]} />)
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

const VesselTd = (props) => {
	const vessel = props.vessel;
	return(
		<tr>
			<td>-</td>
			<td>-</td>
			<td>{vessel.boatName}</td>
			<td>{vessel.boatType}</td>
			<td>1</td>
		</tr>
	)
}