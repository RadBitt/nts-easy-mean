import React from 'react';
import { Link } from 'react-router'; 

class NavHeader extends React.Component {

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
			<Link to="/register"><button className="btn btn-default navbar-btn navbar-left hidden-xs" type="button">Register / Login</button></Link>
		)
	}

	render() {
			// Not logged in
			if (!this.state.uid) {
				return <span>{this.renderRegisterButton()}</span>
			}
			// Logged In
			return (
				<span>
					<Link to="/dashboard"><button className="btn btn-success navbar-btn navbar-left hidden-xs" type="button">Dashboard</button></Link>
				</span>
			)
	}
		
}

export default NavHeader;