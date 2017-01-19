import React from 'react';
import VesselForm from './child-components/VesselForm';
import Vessel from './child-components/Vessel';
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

		const btnStyles = 'btn btn-sm';
		const forms = [];
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
			<div className="main-row row no-border">
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
								.keys(this.props.vessels)
								.map(key => <Vessel key={key} index={key} details={this.props.vessels[key]} />)
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