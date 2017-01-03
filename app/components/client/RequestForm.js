import React from 'react'; 

class RequestForm extends React.Component {

  submitRequest(event) {
    event.preventDefault();

    const ntsReq = {
      boatName: this.boatName.value,
      boatType: this.boatType.value,
      boatLoc: this.boatLoc.value,
      jobDesc: this.jobDesc.value,
      techy: 0,
      date: Date.now()
    }

    this.props.postRequest(ntsReq); 

    console.log('You changed the URL');
    this.context.router.transitionTo('/dashboard/status');
  }

  render() {
    return(
      <div className="container main-content">
        <div className="row">
          <div className="col-md-12">
            <h1><small>Request a service and recieve a response within 24 Hours</small></h1>
          </div>
        </div>
        <form className="form-horizontal row no-border" onSubmit={(e) => this.submitRequest(e)}>
          <fieldset>
            <legend>Account Information</legend>
            {/*
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label htmlFor="email" className="sr-only">Email</label>
                <div className="col-md-10 col-sm-8">
                  <input ref={(input) => this.email = input} type="email" className="form-control" placeholder="Email" />
                </div>
              </div>*
              {/*<div className="form-group">
                <label htmlFor="passWord1" className="sr-only">Password</label>
                <div className="col-md-10 col-sm-8">
                  <input ref={(input)=> this.passWord1 = input} type="password" className="form-control" placeholder="Password" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="passWord2" className="sr-only">Confirm Password</label>
                <div className="col-md-10 col-sm-8">
                  <input ref={(input)=> this.passWord2 = input} type="password" className="form-control"  placeholder="Confirm Password" />
                </div>
              </div>
            </div>
            */}
          </fieldset>
          <fieldset>
            <legend>Contact Information</legend>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label htmlFor="firstName" className="sr-only">First Name</label>
                <div className="col-md-10 col-sm-8">
                  <input ref={(input)=> this.firstName = input} type="text" className="form-control" placeholder="First Name" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="lastName" className="sr-only">Last Name</label>
                <div className="col-md-10 col-sm-8">
                  <input ref={(input)=> this.lastName = input} type="text" className="form-control" placeholder="Last Name" /> 
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label htmlFor="phoneNumber" className="sr-only">Phone Number</label>
                <div className="col-md-10 col-sm-8">
                  <input ref={(input)=> this.phoneNumber = input} type="text" className="form-control" placeholder="Phone Number" />
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Vessel Information</legend>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label htmlFor="boatName" className="sr-only">Boat Name</label>
                <div className="col-md-10 col-sm-8">
                  <input ref={(input)=> this.boatName = input} type="text" className="form-control" placeholder="Boat Name" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="boatType" className="sr-only">Boat Type</label>
                <div className="col-md-10 col-sm-8">
                  <input ref={(input)=> this.boatType = input} type="text" className="form-control" placeholder="Boat Model and Length" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="boatLoc" className="sr-only">Boat Location</label>
                <div className="col-md-10 col-sm-8">
                  <input ref={(input)=> this.boatLoc = input} type="text" className="form-control" placeholder="Boat Location" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                  <label htmlFor="jobDesc" className="sr-only">Job Description</label>
                  <div className="col-md-10 col-sm-8">
                    <textarea ref={(input)=> this.jobDesc = input} className="form-control" rows="6" placeholder="Job Description"></textarea>
                  </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <div className="col-md-6 col-sm-12">
              <label htmlFor="submit" className="sr-only">Submit Request</label>
              <button type="submit" className="btn btn-default btn-primary">Request Service</button>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

RequestForm.contextTypes = {
  router: React.PropTypes.object
};

export default RequestForm;