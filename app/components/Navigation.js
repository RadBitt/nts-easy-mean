import React from 'react';
import { Link } from 'react-router';
import NavHeader from './NavHeader';

class Navigation extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			uid: null
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({uid: nextProps.uid});
	}

	render() {
		return (
		<nav className="navbar navbar-fixed-top">
			<div className="container">
			  <div className="navbar-header">
			    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			      <span className="sr-only">Toggle navigation</span>
			      <span className="icon-bar"></span>
			      <span className="icon-bar"></span>
			      <span className="icon-bar"></span>
			    </button>
			    <a className="navbar-brand hidden-sm hidden-xs" href="#">Nautical Tech Services</a>
			    <a className="navbar-brand visible-sm visible-xs" href="#">NTS</a>
			    <p className="navbar-text"><strong>Call: (310) 333-3548</strong></p> 
			    <NavHeader uid={this.state.uid} />
			  </div>
			  <div id="navbar" className="collapse navbar-collapse">
			    <ul className="nav navbar-nav navbar-right">
			      <li className="active"><Link to="/">Home</Link></li>
			      <li><Link to="/dashboard/request">Request Service</Link></li>
			      <li><Link to="/about">About</Link></li>
			    </ul>
			  </div>
				{/* nav-collapse */}
			</div>
		</nav>
		)
	}
}

export default Navigation;