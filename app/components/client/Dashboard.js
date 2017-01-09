import React from 'react';
import { Match, Miss, Link } from 'react-router';
import Account from './Account';
import RequestForm from './RequestForm';
import RequestStatus from './RequestStatus';
import RequestsActive from './RequestsActive';
import Register from './Register';
import Vessels from './Vessels';
/* Client Components */
import ClientNavigation from './components/ClientNavigation';
import DashHeading from './components/DashHeading';

import base from '../../base';

class Dashboard extends React.Component {

	constructor(props) {
		super(props);
		this.postRequest = this.postRequest.bind(this);
		this.fetchRequest = this.fetchRequest.bind(this);
		this.state = {
			displayName: null,
			vessels: {},
			requests: {},
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
		this.ref = base.syncState(`users/${this.props.uid}/requests`, {
			context: this,
			state: 'requests',
		})
		this.ref2 = base.syncState(`vessels`, {
			context: this,
			state: 'vessels',
			queries: {
				orderByChild: 'owner',
				equalTo: this.props.uid
			}
		})
	}

	// Stop Syncing
	componentWillUnmount() {
		base.removeBinding(this.ref);
		base.removeBinding(this.ref2);
	}

	// Fetches request from state
	fetchRequest(key) {
		return this.state.requests[`request-${key}`];
	}

	// Add request to state/firebase
	postRequest(ntsReq) {
		const uid = this.props.uid;
		const requests = this.state.requests;
		const key = `request-${ntsReq.id}`;
		const path = `users/${uid}/requests/${key}`;
		if (uid == null)
			return;
		// push the request key and its data. 
		const ref = base.post(path, {
    data: ntsReq,
	    then(err){
	      if(!err){
	      	console.log(err); 
	      }
	    }
		});
		// set state
		requests[key] = ntsReq;
		this.setState({ 
			requests: requests
		});
	}

	// Add vessel to state/firebase
	postVessel(ntsVessel) {
		// if vessel exists?
		const vessels = this.state.vessels;
		const key = `vessel-${ntsVessel.id}`;
		const path = `vessels/${key}`;
		// push the request key and its data. 
		const ref = base.post(path, {
    data: ntsVessel,
	    then(err){
	      if(!err){
	      	console.log(err); 
	      }
	    }
		});
		// set state
		vessels[key] = ntsVessel;
		this.setState({ 
			vessels: vessels
		});
	}

  render () {
		// If not logged in
  	if (!this.props.uid) {
  		return <div><Register authenticate={this.props.authenticate} /></div>
  	}

		// Logged In
  	const pathname = '/dashboard';
  	let location = this.props.params.location;
  			location = location == undefined ? '' : location = location;

    return(
    	<div className="container main-content">
	    	<div className="row gradient-bg">
	        <div className="col-md-9 col-sm-12">
		        <div className="visible-sm visible-xs col-sm-12 btn-group">
			  			<ClientNavigation path={pathname} logout={this.props.logout} btnStyles={'sm'} />
			  		</div>
	          <DashHeading path={pathname} loc={location} displayName={this.state.displayName} />
		  			{/* New Requests */}
		  			<Match pattern={`${pathname}/request/:key?`} render={
		  				(props) => (
		    			<RequestForm 
		    				uid={this.state.uid}
		    				postRequest={this.postRequest} 
		    			/>
			    	)} />
			    	{/* Open Requests */}
			    	<Match pattern={`${pathname}/active/:key?`} render={
			    		(props) => (
		    			<RequestsActive 
		    				requests={this.state.requests} 
		    			/>
						)} />
						{/* Invoices */}
			    	<Match pattern={`${pathname}/invoices/:key?`} render={(props) => (
			    		<Invoices />
						)} />
						{/* Account Information */}
						<Match pattern={`${pathname}/account/:key?`} render={
							(props) => (
							<Account
								uid={this.props.uid}
							/>
						)} />
						{/* Vessel Information */}
						<Match pattern={`${pathname}/vessels/:key?`} render={(props) => (
							<Vessels />
						)} />
						{/* Request Status Information */}
						<Match pattern={`${pathname}/status/:key?`} render={
							(props) => (
			    		<RequestStatus 
			    			fetchRequest={this.fetchRequest}
			    			{...props}
			    		/>
						)} />
		  		</div>
		  		<div className="hidden-sm hidden-xs col-md-3 btn-group client-nav-container">
		  			<ClientNavigation path={pathname} logout={this.props.logout} btnStyles={'md'} />
		  		</div>
	    	</div> 
	  	</div>
    )
  }
}

export default Dashboard;