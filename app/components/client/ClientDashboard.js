import React from 'react';
import { Match, Miss, Link } from 'react-router';
import Account from './Account';
import ClientNavigation from './ClientNavigation';
import DashHeading from '../DashHeading';
import Estimate from './Estimate';
import Estimates from './Estimates';
import Invoice from './Invoice';
import Invoices from './Invoices';
import Register from './Register';
import Request from './Request';
import Requests from './Requests';
import RequestsForm from './RequestsForm';
import Vessels from './Vessels';
import base from '../../base';

class ClientDashboard extends React.Component {
		
	constructor(props) {
	super(props);
	this.fetchEstimate = this.fetchEstimate.bind(this);
	this.fetchInvoice = this.fetchInvoice.bind(this);
	this.fetchRequest = this.fetchRequest.bind(this);
	this.fetchVessel = this.fetchVessel.bind(this);
	this.postRequest = this.postRequest.bind(this);
	this.postVessel = this.postVessel.bind(this);
	this.updateEstimate = this.updateEstimate.bind(this);
	this.state = {
		displayName: null,
		estimates: {},
		invoices: {},
		requests: {},
		vessels: {}
	}
}

// Opens sync state before the component mounts
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
			orderByChild: 'owner',
			equalTo: this.props.uid
		}
	});
	this.ref2 = base.syncState('/vessels', {
		context: this,
		state: 'vessels',
		queries: {
			orderByChild: 'owner',
			equalTo: this.props.uid
		}
	});
	this.ref3 = base.syncState(`/invoices`, {
		context: this,
		state: 'invoices',
		queries: {
			orderByChild: 'owner',
			equalTo: this.props.uid
		}
	});
	this.ref4 = base.syncState(`/estimates`, {
		context: this,
		state: 'estimates',
		queries: {
			orderByChild: 'owner',
			equalTo: this.props.uid
		}
	});
}

// Closes sync state when the component unmounts.
componentWillUnmount() {
	base.removeBinding(this.ref);
	base.removeBinding(this.ref2);
	base.removeBinding(this.ref3);
	base.removeBinding(this.ref4);
}

/* ============== Common Functions ================ */
fetchEstimate(key) {
	return this.state.estimates[`estimate-${key}`];
}	

fetchInvoice(key) {
	return this.state.invoices[`invoice-${key}`];
}

fetchRequest(key) {
	return this.state.requests[`request-${key}`];
}

fetchVessel(key) {
	return this.state.vessels[`vessel-${key}`];
}

updateEstimate(key, prop, value) {
	const estimates = this.state.estimates;
	const estimate = estimates[`estimate-${key}`];
	estimate[prop] = value; 
	this.setState({
		estimates: estimates
	})
}

updateRequest(key, prop, value) {
	const requests = this.state.requests;
	const request = requests[`request-${key}`];
	request[prop] = value; 
	this.setState({
		requests: requests
	})
}

/* ============== Client Functions ================ */
postRequest(ntsReq) {
	const uid = this.props.uid;
	const requests = this.state.requests;
	const key = `request-${ntsReq.id}`;
	const path = `requests/${key}`;
	if (uid == null)
		return;
	// push the request key and its data. 
	base.post(path, {
  data: ntsReq,
    then(err){
      if(!err){
      	console.log(err); 
      }
    }
	});
	const vesselKey = `vessel-${ntsReq.vesselId}`;
	// update the vessel to active
	base.post(`/active-vessels/${vesselKey}`, {
  data: this.state.vessels[vesselKey],
    then(err){
      if(!err){
        console.log(err);
      }
    }
	});
	$.ajax({
    url: '/mailer/request-submitted',
    dataType: 'json',
    type: 'POST',
    data: ntsReq,
    success: function(data) {
      console.log(ntsReq)
    }.bind(this),
    error: function(xhr, status, err) {
      console.error(err.toString());
    }.bind(this)
   });
}

// Add vessel to state/firebase
postVessel(ntsVes) {
	// if vessel exists?
	const key = `vessel-${ntsVes.id}`;
	const path = `vessels/${key}`;
	// push the request key and its data. 
	base.post(path, {
    data: ntsVes,
	    then(err){
	      if(!err){
	      	console.log(err); 
	      }
	    }
	});
}

render() {

	const pathname = '/dashboard';
	const location = this.props.location;

	return(
		<div className="row gradient-bg">
			<div className="col-md-9 col-sm-12">
        <div className="visible-sm visible-xs col-sm-12 btn-group">
	  			<ClientNavigation path={pathname} logout={this.props.logout} btnStyles={'sm'} />
	  		</div>
        <DashHeading path={pathname} loc={location} displayName={this.state.displayName} />
  			{/* Account Information */}
				<Match pattern={`${pathname}/account/:key?`} render={
					(props) => (
					<Account
						uid={this.props.uid}
					/>
				)} />
				{/* Estimates */}
	    	<Match exactly pattern={`${pathname}/estimates`} render={
	    		(props) => (
    			<Estimates
    				estimates={this.state.estimates}
    				fetchVessel={this.fetchVessel}
    			/>
				)} />
	    	{/* Estimates */}
	    	<Match exactly pattern={`${pathname}/estimates/:key`} render={
	    		(props) => (
    			<Estimate
    				fetchEstimate={this.fetchEstimate}
    				fetchRequest={this.fetchRequest}
    				fetchVessel={this.fetchVessel}
    				updateEstimate={this.updateEstimate}
    				{...props}
    			/>
				)} />
  			{/* Invoices */}
	    	<Match exactly pattern={`${pathname}/invoices`} render={(props) => (
	    		<Invoices
	    			invoices={this.state.invoices}
	    			fetchInvoice={this.fetchInvoice}
	    			fetchVessel={this.fetchVessel}
	    		/>
				)} />
				{/* Invoices */}
	    	<Match exactly pattern={`${pathname}/invoices/:key`} render={(props) => (
	    		<Invoice
	    			fetchInvoice={this.fetchInvoice}
	    			fetchVessel={this.fetchVessel}
	    			{...props}
	    		/>
				)} />
				{/* Requests All */}
	    	<Match exactly pattern={`${pathname}/requests`} render={
	    		(props) => (
    			<Requests
    				fetchVessel={this.fetchVessel}
    				requests={this.state.requests} 
    			/>
				)} />
				{/* Request Info  */}
				<Match exactly pattern={`${pathname}/requests/:key`} render={
					(props) => (
	    		<Request 
	    			fetchRequest={this.fetchRequest}
	    			fetchVessel={this.fetchVessel}
	    			{...props}
	    		/>
				)} />
  			{/* Request Form */}
  			<Match pattern={`${pathname}/request/:key?`} render={
  				(props) => (
    			<RequestsForm 
    				uid={this.props.uid}
    				postRequest={this.postRequest}
    				vessels={this.state.vessels}
    			/>
	    	)} />
				{/* Vessel Information */}
				<Match pattern={`${pathname}/vessels/:key?`} render={
					(props) => (
					<Vessels postVessel={this.postVessel} uid={this.props.uid} vessels={this.state.vessels} />
				)} />
  			</div>
	  		<div className="hidden-sm hidden-xs col-md-3 btn-group client-nav-container">
			  	<ClientNavigation 
			  		path={pathname} 
			  		logout={this.props.logout}
			  		btnStyles={'md'} 
			  	/>
			  </div>
			</div> 
		)
	}
}
export default ClientDashboard