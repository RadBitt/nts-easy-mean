import React from 'react';
import { Match, Miss, Link } from 'react-router';
import AdminNavigation from './AdminNavigation';
import DashHeading from '../DashHeading';
import Estimate from './Estimate';
import Estimates from './Estimates';
import Request from './Request';
import Requests from './Requests';
import base from '../../base';

class AdminDashboard extends React.Component {
		
	constructor(props){
		super(props);
		this.fetchEstimate = this.fetchEstimate.bind(this);
		this.fetchInvoice = this.fetchInvoice.bind(this);
		this.fetchRequest = this.fetchRequest.bind(this);
		this.fetchVessel = this.fetchVessel.bind(this);
		this.postEstimate = this.postEstimate.bind(this);
		this.updateRequest = this.updateRequest.bind(this);
		this.state = {
			displayName: null,
			estimates: {},
			invoices: {},
			requests: {},
			vessels: {}
		}
	}

	// Update State & Sync
	componentWillMount() {
		// Set the state. 
		const path = `users/${this.props.uid}`;
		const ref = base.database().ref(path);
		ref.once('value', (snapshot) => {
			const data = snapshot.val() || {};
			this.setState({
				displayName: data.displayName
			});
		});
		this.ref = base.syncState('/requests', {
			context: this,
			state: 'requests',
			queries: {
				orderByChild: 'date',
			}
		});
		this.ref2 = base.syncState('/active-vessels', {
			context: this,
			state: 'vessels',
		});
		this.ref3 = base.syncState(`/invoices`, {
			context: this,
			state: 'invoices',
			queries: {
				orderByChild: 'date',
			}
		});
		this.ref4 = base.syncState(`/estimates`, {
			context: this,
			state: 'estimates',
			queries: {
				orderByChild: 'date',
			}
		});
	}


	// Stop Syncing
	componentWillUnmount() {
		base.removeBinding(this.ref);
		base.removeBinding(this.ref2);
		base.removeBinding(this.ref3);
	}

	fetchEstimate(key) {
		return this.state.estimates[`estimate-${key}`];
	}	

	fetchInvoice(key) {
		return this.state.invoices[`invoice-${key}`];
	}

	// Fetches request from state
	fetchRequest(key) {
		return this.state.requests[`request-${key}`];
	}

	fetchVessel(key) {
		return this.state.vessels[`vessel-${key}`];
	}

	// Updates an estimate
	updateEstimate(key, prop, value) {
		const estimates = this.state.estimates;
		const estimate = estimates[`estimate-${key}`];
		estimate[prop] = value; 
		this.setState({
			estimates: estimates
		})
	}

	// Updates a request
	updateRequest(key, prop, value) {
		const requests = this.state.requests;
		const request = requests[`request-${key}`];
		request[prop] = value; 
		this.setState({
			requests: requests
		})
	}

	// Creats a new estimate record from a request record
	// and updates the request it came from to own it.
	// returns the new estimate parameter
	postEstimate(ntsReq) {
		const date = Date.now();
		const newEstimate = {
			date: date,
			id: date,
			owner: ntsReq.owner,
			requestId: ntsReq.id,
			status: 'Pending',
			vesselId: ntsReq.vesselId
		}
		const key = `estimate-${newEstimate.id}`;
		const path = `estimates/${key}`;
		base.post(path, {
			data: newEstimate,
				then(err) {
					if(!err) {
						console.log(err);
					}
				}
		});
		this.updateRequest(ntsReq.id, 'estimateId', newEstimate.id);
		return newEstimate.id;
	}

	render() {

		const pathname = '/dashboard';
		const location = this.props.location;

		return(
			<div className="row gradient-bg">
				<div className="col-md-9 col-sm-12">			
		  		<DashHeading path={pathname} loc={location} displayName={this.state.displayName} />
		  		<div className="visible-sm visible-xs col-sm-12 btn-group">
		  			<AdminNavigation path={pathname} logout={this.props.logout} btnStyles={'sm'} />
		  		</div>
		  		{/* Estimates */}
		    	<Match exactly pattern={`${pathname}/estimates`} render={
		    		(props) => (
	    			<Estimates
	    				estimates={this.state.estimates}
	    				fetchVessel={this.fetchVessel}
	    				{...props}
	    			/>
					)} />
		    	{/* Estimates */}
		    	<Match exactly pattern={`${pathname}/estimates/:key`} render={
		    		(props) => (
	    			<Estimate
	    				fetchEstimate={this.fetchEstimate}
	    				fetchRequest={this.fetchRequest}
	    				fetchVessel={this.fetchVessel}
	    				{...props}
	    			/>
					)} />
		    	{/* Requests */}
		    	<Match exactly pattern={`${pathname}/requests`} render={
		    		(props) => (
	    			<Requests
	    				requests={this.state.requests}
	    				fetchVessel={this.fetchVessel}
	    			/>
					)} />
					{/* Request Info */}
					<Match exactly pattern={`${pathname}/requests/:key`} render={
						(props) => (
		    		<Request
		    			admin={true}	
		    			fetchEstimate={this.fetchEstimate}
		    			fetchRequest={this.fetchRequest}
		    			fetchVessel={this.fetchVessel}
		    			postEstimate={this.postEstimate}
		    			updateEstimate={this.updateEstimate}
		    			updateRequest={this.updateRequest}
		    			{...props}
		    		/>
					)} />
					{/* Invoices 
		    	<Match pattern={`${pathname}/invoices/:key?`} render={(props) => (
		    		<Invoices
		    			invoices={this.state.invoices}
		    			fetchInvoice={this.fetchInvoice}
		    			fetchVessel={this.fetchVessel}
		    		/>
					)} />*/}
				</div>
				<div className="hidden-sm hidden-xs col-md-3 btn-group client-nav-container">
			  	<AdminNavigation 
			  		path={pathname} 
			  		logout={this.props.logout}
			  		btnStyles={'md'} 
			  	/>
				</div>
			</div>
		)
	}
}
export default AdminDashboard