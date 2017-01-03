import React from 'react';
import RequestForm from './RequestForm';
import RequestStatus from './RequestStatus'; 
import Register from './Register';
import base from '../../base';

class Dashboard extends React.Component {

	constructor(props) {
		super(props);
		this.postRequest = this.postRequest.bind(this);
		this.goTo = this.goTo.bind(this);
		this.state = {
			uid: null,
			displayName: null,
			requests: {},
			lastRequestKey: {}
		}
	}

	// Refresh component incase already logged in on request.
	componentDidMount() {
		// Set the state. 
		const path = `users/${this.props.uid}`;
		const ref = base.database().ref(path);
		ref.once('value', (snapshot) => {
			const data = snapshot.val() || {};
			if (!data.displayName) {
				console.log('No display name set'); 
			}
			this.setState({
			uid: this.props.uid,
			displayName: data.displayName
			});
		});

		

	}

	// Change dashboard components
	goTo(p) {
		this.context.router.transitionTo(`dashboard/${p}`);
	}

	// Add request to state/firebase
	postRequest(ntsReq) {
		const uid = this.state.uid;
		const requests = this.state.requests;
		const timestamp = Date.now();
		const key = `request-${timestamp}`;
		const path = `users/${uid}/requests/${key}`;
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
		this.setState({ requests });
		this.setState({ lastRequestKey: key });
	}

  render () {
// If not logged in
  	if (!this.props.uid) {
  		return <div><Register authenticate={this.props.authenticate} /></div>
  	}
// Logged In
  	// Render param
  	const p = this.props.params.action;
  	if (p === 'request')
  		return <div><RequestForm postRequest={this.postRequest} /></div>
  	if (p === 'status')
  		return <div><RequestStatus ntsReq={this.state.requests[this.state.lastRequestKey]} /></div>
  	if (p === 'active')
  		return <div></div>
		if (p === 'invoices')
			return <div></div>
		if (p === 'account')
			return <div></div>
		if (p === 'vessel')
			return <div></div>

  	// Default Logged in
  	const activeRequests = <button className="btn btn-lg btn-primary" onClick={(p) => this.goTo('active')}>Active Requests</button>;
  	const invoices = <button className="btn btn-lg btn-primary" onClick={(p) => this.goTo('invoices')}>Invoices</button>;
  	const request = <button className="btn btn-lg btn-primary" onClick={(p) => this.goTo('request')}>New Request</button>;
  	const accountInformation = <button className="btn btn-lg btn-primary" onClick={(p) => this.goTo('account')}>Account Information</button>;
  	const vesselInformation = <button className="btn btn-lg btn-primary" onClick={(p) => this.goTo('vessel')}>Vessel Information</button>;
  	const logout = <button className="btn btn-lg btn-primary" onClick={this.props.logout}>Log Out!</button>;

    return(
      <div className="container main-content">
      	<div className="row gradient-bg">
          <div className="col-md-12">
            <h1>Dashboard</h1>
            <h2>Welcome {this.state.displayName}</h2>
           </div>
         </div>
		  	<div className="row no-border">
		    	<div className="col-md-6 btn-group">
		        {/*<OpenRequests />*/}
		        {activeRequests}
		        {/*<Invoices />*/}
		        {invoices}
		        {/*<NewRequest />*/}
		        {request}
		    	</div>	    
      	</div>
      	<div className="row no-border">
      		<div className="col-md-6 btn-group">
      			{/* Account Information */}
		    		{accountInformation}
		    		{/* Vessel Information */}
		    		{vesselInformation}
		    		{/*New Feedback*/}
      		</div>
      	</div>
      	<div className="row no-border">
      		<div className="col-md-6">
      			{logout}
      		</div>
      	</div>
      </div>
    )
  }
}

Dashboard.contextTypes = {
  router: React.PropTypes.object
};

export default Dashboard;