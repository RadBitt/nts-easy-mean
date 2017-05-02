import React from 'react';
import { Link } from 'react-router';
import NavStateBtn from './NavStateBtn';

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
			    <a className="navbar-brand hidden-sm hidden-xs" href="/">Nautical Tech Services</a>
			    <a className="navbar-brand visible-sm visible-xs" href="/">NTS</a>
			    <a style={{display: 'inline-block'}} href="tel:+1-310-309-9440" className="navbar-text"><i className="fa fa-envelope-o fa-1x" aria-hidden="true"></i></a>
			    <a style={{display: 'inline-block'}} href="tel:+1-310-309-9440" className="navbar-text"><i className="fa fa-phone-square fa-1x" aria-hidden="true"></i></a>
			    {/*<span className="hidden-xs">
			    	<NavStateBtn uid={this.state.uid} />
			    	</span>*/}
			  </div>
			  <div id="navbar" className="collapse navbar-collapse">
			    <ul className="nav navbar-nav navbar-right">			     	
			      <li><NavStateBtn uid={this.state.uid} /></li>
			    </ul>
			  </div>
				{/* nav-collapse */}
			</div>
		</nav>
		)
	}
}

export default Navigation;