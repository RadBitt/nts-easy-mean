import React from 'react';

class Nav extends React.Component {
	render() {
		return(
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
			        <a href="/signup"><button className="btn btn-default navbar-btn navbar-left hidden-xs" type="button">Register Today</button></a>
			      </div>

			      <div id="navbar" className="collapse navbar-collapse">
			        <ul className="nav navbar-nav navbar-right">
			          <li className="active"><a href="/">Home</a></li>
			          <li><a href="/request">Request Service</a></li>
			          <li><a href="/about">About</a></li>
			        </ul>
			      </div>
			  	{/* nav-collapse */}
			    </div>
			</nav>
		)
	}
}

export default Nav; 