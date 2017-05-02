import React from 'react';
import Carousel from '../Carousel';
import { Button, Modal } from 'react-bootstrap'
import base from '../../base';

class Register extends React.Component {

	constructor() {
		super();
		this.handleClose = this.handleClose.bind(this);
		this.handleLoginAuth = this.handleLoginAuth.bind(this);
		this.state = {
			show: false
		}
	}

	handleClose() {
    this.setState({show: false}); 
  }

  handleLoginAuth(e) {
  	e.preventDefault();
  	this.props.authenticate('email', {
  		email: this.email.value,
  		password: this.password.value
  	});
  	this.handleClose();
  }

	render() {
		return(
			<div className="container-fluid">
	  	<div className="row">
	    	<div className="login col-md-6 col-md-offset-3 text-center">
	        <h1>Register / Log In</h1>
	        <p>Sign in to manage your vessel's services</p>
	        <div className="email-login">
		        <button onClick={() => this.setState({ show: true})}>
		        	<i className="fa fa-address-card-o fa-2x" aria-hidden="true"></i>
		        	<span className="login-btn-text">Log in with Email</span>
		        </button>
	        </div>
	        <div className="g-login">
		        <button onClick={() => this.props.authenticate('google')}>
		        	<i className="fa fa-google-plus-official fa-2x" aria-hidden="true"></i>
		        	<span className="login-btn-text">Log in with Google</span>
		        </button>
	        </div>
	        <div className="fb-login">
		        <button onClick={() => this.props.authenticate('facebook')} >
		        	<i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
		        	<span className="login-btn-text">Log in with Facebook</span>
		        </button>
	        </div>
			  </div>
			</div>
			<Modal
			  show={this.state.show}
			  onHide={this.handleClose}
			  container={this}
			  aria-labelledby="Login"
			 >
			  <Modal.Header closeButton>
			    <Modal.Title id="contained-modal-title">Log in</Modal.Title>
			  </Modal.Header>
			  <Modal.Body>
			    <form onSubmit={(e) => this.handleLoginAuth(e)}>
			      <div className="form-group">
			        <label htmlFor="email">Email</label>
			        <input ref={(input)=> this.email = input} type="text" className="form-control"  placeholder="your@email.com" />
			      </div>
			      <div className="form-group">
			        <label htmlFor="password">Password</label>
			        <input ref={(input)=> this.password = input} type="password" className="form-control"  placeholder="Password" />
			      </div>
			      <div className="form-group modal-controls">
				      <button type="submit" className="btn">Submit</button>
				      <button onClick={this.handleClose} className="btn btn-danger">Cancel</button>
			      </div>
			    </form>
			  </Modal.Body>
			</Modal>
		</div>
		)
	}
}

export default Register; 


