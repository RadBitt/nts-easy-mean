import React from 'react';
import base from '../../base';

class Account extends React.Component {
		
	constructor(props){
		super(props)
		this.state = {
			user: {
				displayName: null,
				firstName: null,
				lastName: null,
				phone: null,
				email: null
			}
		};
	}

	// Update State & Sync
	componentWillMount() {
		this.ref = base.syncState(`users/${this.props.uid}`, {
			context: this,
			state: 'user',
		})
	}

	// Stop Syncing
	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

	render() {
		const user = this.state.user;
		return(
			<div className="main-row row no-border">
      	<div className="col-md-12">
      		<h2><small>Account Settings</small></h2>
        </div>
      <div className="row no-border">
      	<div className="col-md-12">
      		<ul>
      			<li>Display Name: {user.displayName}</li>
            <li>First Name: {user.firstName}</li>
      			<li>Last Name: {user.lastName}</li>
      			<li>Contact Email: {user.email}</li>
      			<li>Contact Phone: {user.phone}</li>
      		</ul>
        </div>
      </div>
    </div>
		)
	}
}

export default Account