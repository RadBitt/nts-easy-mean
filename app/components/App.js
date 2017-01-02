import React from 'react';
import Carousel from './Carousel';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Request from './Request';
import RequestStatus from './RequestStatus';

import { BrowserRouter, Match, Miss, Link } from 'react-router';

class App extends React.Component {
	render() {
		return (
				<div>
				<BrowserRouter>
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
					          <li className="active"><Link to="/">Home</Link></li>
					          <li><Link to="/request">Request Service</Link></li>
					          <li><Link to="/about">About</Link></li>
					        </ul>
					      </div>
					  	{/* nav-collapse */}
					    </div>
					</nav>
				<Carousel />
				<div>
					<Match exactly pattern="/" component={Home} />
				    <Match pattern="/about" component={About} />
				    <Match exactly pattern="/request" component={Request} />
				    <Match pattern="/request/status" component={RequestStatus} />
				</div>
				<Footer />
				</BrowserRouter>
			</div>
		)
	}
}

export default App;