import React from 'react';
import SelectVessel from './child-components/SelectVessel';
import { getType, getLoc, getName, getDesc } from './child-components/helperData';

class RequestsForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    let vesselsArray = []; 
    for (var key in this.props.vessels){
      vesselsArray.push(this.props.vessels[key]);
    }

    if (!vesselsArray[0]) {
      vesselsArray[0].boatName = '';
      vesselsArray[0].boatType = '';
      vesselsArray[0].boatLoc = '';
    }

    this.state = {
      vessel: vesselsArray[0],
      vessels: vesselsArray,
      length: vesselsArray.length
    }
  }

  handleChange(event) {
    this.setState({
      vessel: this.state.vessels[event.target.value],
    });
  }

  submitRequest(event) {
    event.preventDefault();

    const ntsReq = {
      boatLoc: this.boatLoc.value,
      date: Date.now(),
      jobDesc: this.jobDesc.value,
      owner: this.props.uid,
      status: 'Recieved',
      techy: 0,
      vesselId: this.state.vessel.id
    }

    ntsReq['id'] = ntsReq.date;
    this.props.postRequest(ntsReq);
    this.context.router.transitionTo(`/dashboard/requests/${ntsReq.id}`);
  }

  render () {
    
    return(
      <div className="main-row">
        <h1 className="hidden-xs"><small>Request a service and recieve a response within 24 Hours</small></h1>
        
        <form className="form-horizontal row no-border col-md-12" onSubmit={(e) => this.submitRequest(e)}>
          <fieldset>
            <legend>Vessel Information</legend>
            <div className="form-group">
              <div className="col-md-8 col-sm-8">
                <SelectVessel 
                  handleChange={this.handleChange} 
                  vessels={this.state.vessels} 
                  length={this.state.length}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="boatName" className="sr-only">Boat Name</label>
              <div className="col-md-8 col-sm-8">
                <input ref={(input)=> this.boatName = input} type="text" className="form-control" placeholder="Boat Name"
                  value={this.state.vessel.boatName} 
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="boatType" className="sr-only">Boat Type</label>
              <div className="col-md-8 col-sm-8">
                <input ref={(input)=> this.boatType = input} type="text" className="form-control" placeholder="Boat Model and Length" 
                  value={this.state.vessel.boatType} 
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="boatLoc" className="sr-only">Boat Location</label>
              <div className="col-md-8 col-sm-8">
                <input ref={(input)=> this.boatLoc = input} type="text" className="form-control" placeholder="Boat Location" 
                  value={this.state.vessel.boatLoc} 
                />
              </div>
            </div>
            <div className="form-group">
                <label htmlFor="jobDesc" className="sr-only">Job Description</label>
                <div className="col-md-8 col-sm-8">
                  <textarea ref={(input)=> this.jobDesc = input} className="form-control" rows="6" placeholder="Job Description" >
                  </textarea>
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

RequestsForm.contextTypes = {
  router: React.PropTypes.object
};

export default RequestsForm;