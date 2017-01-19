import React from 'react';
import Carousel from '../Carousel';
import base from '../../base';

const Register = (props) => {
	return(
  	<div className="main-row row">
    	<div className="col-md-12">
				<nav className="login">
	        <h2>Register / Log In</h2>
	        <p>Sign in to manage your vessel's services</p>
	        <div className="g-login">
		        <button className="github" onClick={() => props.authenticate('google')}>
		        	<i className="fa fa-google-plus-official fa-4x" aria-hidden="true"></i>
		        	<span className="login-btn-text">Log In with Google</span>
		        </button>
	        </div>
	        <div className="fb-login">
		        <button className="facebook" onClick={() => props.authenticate('facebook')} >
		        	<i className="fa fa-facebook-official fa-4x" aria-hidden="true"></i>
		        	<span className="login-btn-text">Log In with Facebook</span>
		        </button>
	        </div>
		    </nav>
		  </div>
		</div>
	)
}

export default Register; 


// 		<div className="container main-content">
// 			  <div className="row">
// 			    <div className="col-md-12">
// 			      <h1><small>Register and keep track of your requests.</small></h1>
// 			    </div>
// 			  </div>
// 			  <form className="form-horizontal row no-border">
// 			    <fieldset>
// 			      <legend>Register</legend>
// 			      <div className="col-md-6 col-sm-12">
// 			        <div className="form-group">
// 			          <label htmlFor="email" className="sr-only">Email</label>
// 			          <div className="col-md-10 col-sm-8">
// 			            <input type="email" className="form-control" placeholder="Email" />
// 			          </div>
// 			        </div>
// 			        <div className="form-group">
// 			          <label htmlFor="passWord1" className="sr-only">Password</label>
// 			          <div className="col-md-10 col-sm-8">
// 			            <input type="password" className="form-control" placeholder="Password" />
// 			          </div>
// 			        </div>
// 			        <div className="form-group">
// 			          <label htmlFor="passWord2" className="sr-only">Confirm Password</label>
// 			          <div className="col-md-10 col-sm-8">
// 			            <input type="password" className="form-control" placeholder="Confirm Password" />
// 			          </div>
// 			        </div>
// 			      </div>
// 			    </fieldset>
// 			  </form>
// 			</div>