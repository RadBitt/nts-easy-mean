import React from 'react';
import { getType, getLoc, getName, getDesc } from './components/helperData';

class RequestForm extends React.Component {

  submitRequest(event) {
    event.preventDefault();

    const ntsReq = {
      vesselId: ntsVessel.id,
      boatLoc: this.boatLoc.value,
      jobDesc: this.jobDesc.value,
      techy: 0,
      date: Date.now()
    }

    ntsReq['id'] = ntsReq.date;
    this.props.postRequest(ntsReq);
    this.context.router.transitionTo(`/dashboard/status/${ntsReq.id}`);
  }

  render () {
    return(
      <div className="main-row">
        <h1 className="hidden-xs"><small>Request a service and recieve a response within 24 Hours</small></h1>
        <form className="form-horizontal row no-border col-md-12" onSubmit={(e) => this.submitRequest(e)}>
          <fieldset>
            <legend>Vessel Information</legend>
            <div className="form-group">
              <label htmlFor="boatName" className="sr-only">Boat Name</label>
              <div className="col-md-8 col-sm-8">
                <input ref={(input)=> this.boatName = input} type="text" className="form-control" defaultValue={getName()} placeholder="Boat Name" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="boatType" className="sr-only">Boat Type</label>
              <div className="col-md-8 col-sm-8">
                <input ref={(input)=> this.boatType = input} type="text" className="form-control" defaultValue={getType()} placeholder="Boat Model and Length" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="boatLoc" className="sr-only">Boat Location</label>
              <div className="col-md-8 col-sm-8">
                <input ref={(input)=> this.boatLoc = input} type="text" className="form-control" defaultValue={getLoc()} placeholder="Boat Location" />
              </div>
            </div>
            <div className="form-group">
                <label htmlFor="jobDesc" className="sr-only">Job Description</label>
                <div className="col-md-8 col-sm-8">
                  <textarea ref={(input)=> this.jobDesc = input} className="form-control" rows="6" defaultValue={getDesc()} placeholder="Job Description"></textarea>
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
        <div/>
      </div>
    )
  }
}

RequestForm.contextTypes = {
  router: React.PropTypes.object
};

export default RequestForm;