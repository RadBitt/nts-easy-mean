import { BrowserRouter, Match, Miss, Link } from 'react-router';
import React from 'react';
import Navigation from './Navigation';
import Carousel from './Carousel';
import Footer from './Footer';
import Home from './Home';
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
		this.isAdmin = this.isAdmin.bind(this);
		this.logout = this.logout.bind(this); 
		// Initial state
		this.state = {
			uid: null,
			admin: 0
		};
	}

	componentDidMount() {
		if (localStorage.uid) {
			this.setState({uid: localStorage.uid});
			if (localStorage.admin) {
				this.isAdmin(localStorage.uid);
			}
		}
    base.onAuth((user) => {
      if(user) {
        this.authHandler(null, { user });
      }
    });
  }

  // Logout 
  logout() {
  	delete localStorage.uid;
  	delete localStorage.admin; 
    base.unauth();
    this.setState({ uid: null });
    this.context.router.transitionTo('/');
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
		localStorage.setItem('uid', authData.user.uid);
		const uid = this.state.uid;
		// Ref nts-easy-mean/users/:uid
		const ref = base.database().ref(`users/${uid}`);
		// Query the DB for the user
		ref.once('value', (snapshot) => {
			const data = snapshot.val() || {};
			// If its the user's first time logging in.
			// console.log(!data.displayName);
			if(!data.displayName) {
				ref.set({
					email: authData.user.email,
					displayName: authData.user.displayName,
					firstName: 0,
					lastName: 0,
					phoneNumber: 0
				});
			}
		});
		// Set admin state if the admin is logging in.
		this.isAdmin(uid);
		this.context.router.transitionTo(`/dashboard`);
	}

	// Admin?
	isAdmin(uid) {
		const path = 'admin/';
		const ref = base.database().ref(path);
		ref.once('value', (snapshot) => {
			const data = snapshot.val() || {};
			if (data.uid == uid) {
				localStorage.setItem('admin', 1); 
				this.setState({admin: 1});
			} else {
				localStorage.setItem('admin', 0); 
				this.setState({admin: 0});
			}
		});
	}

	render() {
		return (
			<BrowserRouter>
				<Navigation uid={this.state.uid} />
					{/* Home Component */}
					<Match exactly pattern="/" component={Home} />
					{/* Register Component */}
				  <Match exactly pattern="/register" render={
				  	() => (
				  		<div className="container main-content">
								<Register authenticate={this.authenticate} />
							</div>
				  )} />
				  {/* Dashboard Components */}
				  <Match pattern="/dashboard/:location?" render={
				  	(props) => (
			  		<Dashboard 
			  			admin={this.state.admin}
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

App.contextTypes = {
  router: React.PropTypes.object
};

export default App;