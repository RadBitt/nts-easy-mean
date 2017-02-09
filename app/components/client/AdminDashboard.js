import React from 'react';
import { Match, Miss, Link } from 'react-router';
import AdminNavigation from './AdminNavigation';
import DashHeading from '../DashHeading';
import Estimate from './Estimate';
import Estimates from './Estimates';
import Invoice from './Invoice';
import Invoices from './Invoices';
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
		this.postInvoice = this.postInvoice.bind(this);
		this.sendJSONEmail = this.sendJSONEmail.bind(this);
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
		let newEstimate = {
			approved: 0,
			date: date,
			id: date,
			owner: ntsReq.owner,
			requestId: ntsReq.id,
			status: 'Pending',
			viewed: 0,
			vesselId: ntsReq.vesselId
		}
		const key = `estimate-${newEstimate.id}`;
		let path = `estimates/${key}`;
		base.post(path, {
			data: newEstimate,
				then(err) {
					if(!err) {
						console.log(err);
					}
				}
		});
		this.updateRequest(ntsReq.id, 'estimateId', newEstimate.id);
		// Send Estimate Initialization Confirmation
		path = `users/${ntsReq.owner}`;
		const ref = base.database().ref(path);
		ref.once('value', (snapshot) => {
			const data = snapshot.val() || {};
			newEstimate['email'] = data.email;
			newEstimate['displayName'] = data.displayName;
			this.sendJSONEmail('/mailer/estimate-created', newEstimate);
		});
		
		return newEstimate.id;
	}

	// Creats a new invoice record from an estimate record
	// and updates the estimate it came from .
	// returns the new invoice parameter
	postInvoice(estimate) {
		const date = Date.now();
		let newInvoice = {
			date: date,
			estimateId: estimate.id,
			id: date,
			items: estimate.items,
			owner: estimate.owner,
			requestId: estimate.requestId,
			status: 'Pending',
			viewed: 0,
			vesselId: estimate.vesselId
		}
		const key = `invoice-${newInvoice.id}`;
		let path = `invoices/${key}`;
		base.post(path, {
			data: newInvoice,
				then(err) {
					if(!err) {
						console.log(err);
					}
				}
		});
		this.updateEstimate(estimate.id, 'invoiceId', newInvoice.id);
		this.updateEstimate(estimate.id, 'status', 'Invoiced');
		path = `users/${estimate.owner}`;
		const ref = base.database().ref(path);
		ref.once('value', (snapshot) => {
			const data = snapshot.val() || {};
			newInvoice['email'] = data.email;
			newInvoice['displayName'] = data.displayName;
			this.sendJSONEmail('/mailer/invoice-created', newInvoice);
		});
		return newInvoice.id;
	}

	sendJSONEmail(path, object) {
		$.ajax({
		    url: path,
		    dataType: 'json',
		    contentType: "application/json",
		    type: 'POST',
		    data: JSON.stringify(object),
		    success: function(data) {
		      console.log(object)
		    }.bind(this),
		    error: function(xhr, status, err) {
		      console.error(err.toString());
		    }.bind(this)
	   });
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
		    	{/* Estimate */}
		    	<Match exactly pattern={`${pathname}/estimates/:key`} render={
		    		(props) => (
	    			<Estimate
	    				admin={true}
	    				fetchEstimate={this.fetchEstimate}
	    				fetchRequest={this.fetchRequest}
	    				fetchVessel={this.fetchVessel}
	    				postInvoice={this.postInvoice}
	    				updateEstimate={this.updateEstimate}
	    				{...props}
	    			/>
					)} />
		    	{/* Invoices */}
		    	<Match exactly pattern={`${pathname}/invoices`} render={(props) => (
		    		<Invoices
		    			invoices={this.state.invoices}
		    			fetchVessel={this.fetchVessel}
		    		/>
					)} />
					{/* Invoice */}
		    	<Match exactly pattern={`${pathname}/invoices/:key`} render={(props) => (
		    		<Invoice
		    			admin={true}
	    				fetchInvoice={this.fetchInvoice}
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