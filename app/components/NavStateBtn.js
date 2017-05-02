import React from 'react';
import { Link } from 'react-router'; 

class NavStateBtnr extends React.Component {

	constructor(props) {
		super(props);
		this.renderRegisterButton = this.renderRegisterButton.bind(this);
		this.state = {
			uid: null
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({uid: nextProps.uid});
	}

	renderRegisterButton() {
		return(
			<Link className="nav-st-btn" to="/register"><button className="btn btn-default navbar-btn navbar-left disabled" type="button" disabled="disabled">Login</button></Link>
		)
	}

	render() {
		if (true) {
			return <span>{this.renderRegisterButton()}</span>
		}
		// Not logged in, Delete above and uncomment below to restore.
		// if (!this.state.uid) {
		// 	return <span>{this.renderRegisterButton()}</span>
		// }

		// Logged In
		return (
			<span>
				<Link className="nav-st-btn" to="/dashboard"><button className="btn btn-success navbar-btn navbar-left disabled" type="button">Dashboard</button></Link>
			</span>
		)
	}
}

export default NavStateBtnr;