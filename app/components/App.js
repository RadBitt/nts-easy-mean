import { BrowserRouter, Match, Miss, Link } from 'react-router';
import React from 'react';
import Navigation from './Navigation';
import Carousel from './Carousel';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import base from '../base';
// Client Imports
	import Dashboard from './client/Dashboard';
	import Register from './client/Register'; 

// Main Class
class App extends React.Component {

	constructor() {
		super();
		this.authenticate = this.authenticate.bind(this);
		this.authHandler = this.authHandler.bind(this);
		this.logout = this.logout.bind(this); 
		// Initial state
		this.state = {
			uid: null
		};
	}

	componentDidMount() {
    base.onAuth((user) => {
      if(user) {
        this.authHandler(null, { user });
      }
    });
  }

  // Logout 
  logout() {
    base.unauth();
    this.setState({ uid: null });
  }

	// Auth via provider
	authenticate(provider) {
		console.log('Logging in with ' + provider);
		base.authWithOAuthPopup(provider, this.authHandler);
	}

	// Handle Auth
	authHandler(err, authData) {
		console.log(authData);
		if(err) {
			console.log(err);
			return;
		}
		// Set user ID State
		this.setState({ uid: authData.user.uid });
		const uid = this.state.uid;
		// Ref nts-easy-mean/users/:uid
		const userRef = base.database().ref(`users/${uid}`);
		// Query the DB for the user
		userRef.once('value', (snapshot) => {
			const data = snapshot.val() || {};
			// If its the user's first time logging in.
			// console.log(!data.displayName);
			if(!data.displayName) {
				userRef.set({
					email: authData.user.email,
					displayName: authData.user.displayName,
					firstName: 0,
					lastName: 0,
					phoneNumber: 0
				});
			}
		});
	}

	render() {
		return (
				<BrowserRouter>
					<Navigation uid={this.state.uid} />
						{/* Home Component */}
						<Match exactly pattern="/" component={Home} />
						{/* About Component */}
					  <Match exactly pattern="/about" component={About} />
						{/* Register Component */}
					  <Match exactly pattern="/register" render={
					  	() => (<Register authenticate={this.authenticate} />)
					  } />
					  {/* Dashboard Components */}
					  <Match pattern="/dashboard/:location?" render={
					  	(props) => (
				  		<Dashboard 
					  		uid={this.state.uid} 
					  		authenticate={this.authenticate}
					  		logout={this.logout}
					  		{...props}
						  	/>
					  )} />
					<Footer />
				</BrowserRouter>
		)
	}
}

export default App;