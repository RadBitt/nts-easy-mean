import { BrowserRouter, Match, Miss, Link } from 'react-router';
import React from 'react';
import Navigation from './Navigation';
import Carousel from './Carousel';
import Home from './Home';
import Footer from './Footer';
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
		this.state = {
			uid: null,
			admin: 0
		}
	}

	authenticate(provider, emailUserData) {
		console.log('Logging in with ' + provider);
		if (provider == 'google' || provider == 'facebook') 
			base.authWithOAuthPopup(provider, this.authHandler);
		else 
			base.authWithPassword(emailUserData, authHandler);
	}

	authHandler(error, authData) {
		console.log('User Data:' + authData);
		if (error) {
			console.log(error);
			return;
		}
		this.setState({
			uid: authData.user.uid,
			email: authData.user.email
		});
		localStorage.setItem('uid', authData.user.uid);
		const uid = this.state.uid;
		const ref = base.database().ref(`users/${uid}`);
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
		  this.isAdmin(uid);
		});
	}

	isAdmin(uid) {
		const path = 'admin/';
		const ref = base.database().ref(path);
		ref.once('value', (snapshot) => {
			const data = snapshot.val() || {};
			if (data.uid == uid || data.dev == uid) {
				localStorage.setItem('admin', 1); 
				this.setState({admin: 1});
			} else {
				localStorage.setItem('admin', 0); 
				this.setState({admin: 0});
			}
		});
	}

	logout() {
  	delete localStorage.uid;
  	delete localStorage.admin; 
    base.unauth();
    this.setState({ uid: null });
    this.context.router.transitionTo('/');
  }

	render() {
		return (
			<BrowserRouter>
				<Navigation uid={null} />
					{/* Home Component */}
					<Match exactly pattern="/" component={Home} />
					{/* Register Component */}
				  <Match exactly pattern="/register" render={
				  	() => (
				  		<div className="container-fluid">
								<Register authenticate={this.authenticate} />
							</div>
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