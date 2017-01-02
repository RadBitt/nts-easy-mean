import React from 'react';
import { Link } from 'react-router'; 

class Request extends React.Component {
  render() {
    return(
      <div className="container main-content">
        <div className="row">
          <div className="col-md-12">
            <h1><small>Request a service and recieve a response within 24 Hours</small></h1>
          </div>
        </div>
        <form className="form-horizontal row no-border">
          <fieldset>
            <legend>Account Information</legend>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label for="email" className="sr-only">Email</label>
                <div className="col-md-10 col-sm-8">
                  <input type="email" className="form-control" ng-model="ntsReq.email" placeholder="Email" />
                </div>
              </div>
              <div className="form-group">
                <label for="passWord1" className="sr-only">Password</label>
                <div className="col-md-10 col-sm-8">
                  <input type="password" className="form-control" ng-model="ntsReq.passWord1" placeholder="Password" />
                </div>
              </div>
              <div className="form-group">
                <label for="passWord2" className="sr-only">Confirm Password</label>
                <div className="col-md-10 col-sm-8">
                  <input type="password" className="form-control" ng-model="ntsReq.passWord2" placeholder="Confirm Password" />
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Contact Information</legend>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label for="firstName" className="sr-only">First Name</label>
                <div className="col-md-10 col-sm-8">
                  <input type="text" className="form-control" ng-model="ntsReq.firstName" placeholder="First Name" />
                </div>
              </div>
              <div className="form-group">
                <label for="lastName" className="sr-only">Last Name</label>
                <div className="col-md-10 col-sm-8">
                  <input type="text" className="form-control" ng-model="ntsReq.lastName" placeholder="Last Name" /> 
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label for="phoneNumber" className="sr-only">Phone Number</label>
                <div className="col-md-10 col-sm-8">
                  <input type="text" className="form-control" ng-model="ntsReq.phoneNumber" placeholder="Phone Number" />
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Vessel Information</legend>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label for="boatName" className="sr-only">Boat Name</label>
                <div className="col-md-10 col-sm-8">
                  <input type="text" className="form-control" ng-model="ntsReq.boatName" placeholder="Boat Name" />
                </div>
              </div>
              <div className="form-group">
                <label for="boatType" className="sr-only">Boat Type</label>
                <div className="col-md-10 col-sm-8">
                  <input type="text" className="form-control" ng-model="ntsReq.boatType" placeholder="Boat Model and Length" />
                </div>
              </div>
              <div className="form-group">
                <label for="boatLoc" className="sr-only">Boat Location</label>
                <div className="col-md-10 col-sm-8">
                  <input type="text" className="form-control" ng-model="ntsReq.boatLoc" placeholder="Boat Location" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                  <label for="jobDesc" className="sr-only">Job Description</label>
                  <div className="col-md-10 col-sm-8">
                    <textarea className="form-control" rows="6" ng-model="ntsReq.jobDesc" placeholder="Job Description"></textarea>
                  </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <div className="col-md-6 col-sm-12">
              <label for="submit" className="sr-only">Submit Request</label>
              <Link to="/request/status"><button ng-click="saveRequest()" className="btn btn-default btn-primary">Request Service</button></Link>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Request;