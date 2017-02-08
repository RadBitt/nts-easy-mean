import React from 'react';
import Register from './Register';
import AdminDashboard from './AdminDashboard'
import ClientDashboard from './ClientDashboard';
import base from '../../base';

class Dashboard extends React.Component {

	constructor(props) {
		super(props);
	}

  render () {
		// If not logged in
  	if (!this.props.uid) {
  		return  <div className="container main-content">
  							<Register authenticate={this.props.authenticate} />
  						</div>
  	}

  	// Logged In
  	let location = this.props.params.location;
  			location = location == undefined ? '' : location = location;

  	{/* Admin DashBaord */} 
  	if (localStorage.admin == true) {
  		return (
	  		<div className="container main-content">
		  			<AdminDashboard
			  			uid={this.props.uid} 
			  			location={location}
			  			logout={this.props.logout}
		  			/>
		  	</div>
		  )
  	}

  	{/* Client DashBaord */}
    return(
    	<div className="container main-content">
	  			<ClientDashboard 
		  			uid={this.props.uid} 
		  			location={location}
		  			logout={this.props.logout}
	  			/>
	  	</div>
    )
  }
}

export default Dashboard;