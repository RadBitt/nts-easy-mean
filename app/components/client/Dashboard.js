import React from 'react';
import { Match, Miss, Link } from 'react-router';
import RequestForm from './RequestForm';
import RequestStatus from './RequestStatus';
import RequestsActive from './RequestsActive';
import Register from './Register';
/* Client Components */
	import ClientNavigation from './components/ClientNavigation';
	import DashHeading from './components/DashHeading';

import base from '../../base';

class Dashboard extends React.Component {

	constructor(props) {
		super(props);
		this.postRequest = this.postRequest.bind(this);
		this.state = {
			displayName: null,
			requests: {},
			lastRequestKey: {}
		}
	}



	// Update State
	componentWillMount() {
		// Set the state. 
		const path = `users/${this.props.uid}`;
		const ref = base.database().ref(path);
		ref.once('value', (snapshot) => {
			const data = snapshot.val() || {};
			if (!data.displayName) {
				console.log('No display name set'); 
			}
			this.setState({
				displayName: data.displayName
			});
		});
		this.ref = base.syncState(`users/${this.props.uid}/requests`, {
			context: this,
			state: 'requests'
		})
	}

	// Sync State
	componentDidMount() {
		
	}

	// Stop Syncing
	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

	// Add request to state/firebase
	postRequest(ntsReq) {
		const uid = this.props.uid;
		const requests = this.state.requests;
		const timestamp = Date.now();
		const key = `request-${timestamp}`;
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
			requests: requests,
			lastRequestKey: key
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
    	<div className="top-row">
	    	<div className="row gradient-bg">
	        <div className="col-md-9 col-sm-12">
		        <div className="visible-sm visible-xs col-sm-12 btn-group">
			  			<ClientNavigation path={pathname} logout={this.props.logout} btnStyles={'sm'} />
			  		</div>
	          <DashHeading path={pathname} loc={location} displayName={this.state.displayName} />
		  			{/* New Requests */}
		  			<Match pattern={`${pathname}/request/:key?`} render={(props) => (
			    		<RequestForm postRequest={this.postRequest} />
			    	)} />
			    	{/* Open Requests */}
			    	<Match pattern={`${pathname}/active/:key?`} render={(props) => (
			    		<RequestsActive requests={this.state.requests} />
						)} />
						{/* Invoices */}
			    	<Match pattern={`${pathname}/invoices/:key?`} render={(props) => (
			    		<Invoices />
						)} />
						{/* Account Information */}
						<Match pattern={`${pathname}/account/:key?`} render={(props) => (
							<Account />
						)} />
						{/* Vessel Information */}
						<Match pattern={`${pathname}/vessel/:key?`} render={(props) => (
							<Vessel />
						)} />
						{/* Request Status Information */}
						<Match pattern={`${pathname}/status/:key?`} render={(props) => (
			    		<RequestStatus details={this.state.requests[this.state.lastRequestKey]} />
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