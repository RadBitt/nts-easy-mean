import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import base from '../../base';

const Estimate = (props) => {

	const estimate = props.fetchEstimate(props.params.key) || {};
	const vessel = props.fetchVessel(estimate.vesselId);

  // Add price
  const items = estimate.items;
  let price = 0;
  let key; 
  for(key in items) {
    price = (items[key].itemRate * items[key].itemQuant) * ( 1 + items[key].itemTax) + price;
  }
  price = '$' + price.format(2);

  // If the estimate is empty.
  if (!estimate.items) {
    estimate.items = {
      blankItem: {
        itemName: '-',
        itemDesc: '-',
        itemQuant: '-',
        itemRate: '-',
        itemTax: '-'
      }
    }
  }

  let userTools = '';

  if (props.admin) {
    userTools = <EstimateAdminTools
      endpoint={`estimate-${props.params.key}`}
      estimate={estimate} 
      postInvoice={props.postInvoice}
     />
  } else {
    userTools = <EstimateClientTools 
      updateEstimate={props.updateEstimate} 
      status={estimate.status} id={estimate.id} 
    />
  }

	return(
		<div className="main-row">
      <div className="row no-border">
      	<div className="col-md-12">
      			<ul className="estimate-heading">
      				<li>Date: {new Date(estimate.date).toLocaleDateString()}</li>
      				<li>Vessel: {vessel.boatName}</li>
      				<li>Request ID: {estimate.requestId}</li>
      				<li>Estimate ID: {estimate.id}</li>
              <li>Status: {estimate.status}</li>
      			</ul>
            {userTools}
            <table className="table table-striped">
              <caption>Estimate Items</caption>
              <tbody>
              <tr>
                <th>Item Name</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Tax</th>
                <th className="price-td">Rate</th>
                <th className="price-td">Price</th>
              </tr>
              {
                Object
                  .keys(estimate.items)
                  .map(key => <EstimateItem key={key} index={key} 
                    estimate={estimate.items[key]}
                  />)
              }
              </tbody>
            </table>
            <table className="table table-striped totals-table">
              <caption>Totals</caption>
              <tbody>
              <tr>
                <th>Total Price</th>
              </tr>
              <tr>
                <td>{price}</td>
              </tr>
              </tbody>
            </table>
        </div>
      </div>
    </div>
	)
}

export default Estimate;

/* ============== Estimate Table Items ================ */
const EstimateItem = (props) => {
  const items = props.estimate;
  let price = (items.itemRate * items.itemQuant) * ( 1 + items.itemTax);
      price = '$' + price.format(2);
  return(
    <tr>
      <td>{items.itemName}</td>
      <td>{items.itemDesc}</td>
      <td>{items.itemQuant}</td>
      <td>{items.itemTax}</td>
      <td className="price-td">{items.itemRate}</td>
      <td className="price-td">{price}</td>
    </tr>
  )
}


/* ============== Client Tools ================ */
const EstimateClientTools = (props) => {

  const estimate = props.estimate;

  let button = '';
  if (props.status == 'Pending') {
    // Has viewed?
    button = <Button
      bsStyle="success"
      bsSize="sm"
      onClick={() => props.updateEstimate(props.id, 'status', 'Approved')}>
      Approve Estimate
    </Button>
  }
  if (props.status == 'Approved') {
    button = 'You have approved this estimate'; 
  }
  
  return(
    <span>{button}</span>
  )
}


/* ============== Admin Tools ================ */
class EstimateAdminTools extends React.Component {

  constructor(props) {
    super(props);
    this.createInvoice = this.createInvoice.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.postLineItem = this.postLineItem.bind(this);
    this.state = {
      show: false
    }
  }

  componentWillMount() {
    this.setState({estimate: this.props.estimate});
    this.ref = base.syncState(`/estimates/${this.props.endpoint}`, {
      context: this,
      state: 'estimate'
    });
  }
  
  createInvoice() {
    const estimate = this.props.estimate
    const param = this.props.postInvoice(estimate);
    this.context.router.transitionTo(`/dashboard/invoices/${param}`);
  }

  handleClose() {
    this.setState({show: false}); 
  }

  postLineItem(event) {
    event.preventDefault();
    const estimate = this.state.estimate;
    const item = {};
    item[this.itemName.value] = {
      itemName: this.itemName.value,
      itemDesc: this.itemDesc.value,
      itemQuant: this.itemQuant.value,
      itemRate: this.itemRate.value,
      itemTax: this.itemTax.value
    }
    estimate['items'] = item; 
    this.setState({estimate: estimate}); 
    this.handleClose();
  }

  render() {
    return(
      <div>
        {/*MODAL*/}
        <Button
          bsStyle="success"
          bsSize="sm"
          onClick={() => this.setState({ show: true})}
        >
          Add Line Item
        </Button>
        <Button
          bsStyle="success"
          bsSize="sm"
          onClick={() => this.createInvoice()}
        >
          Create Invoice
        </Button>

        {/*MODAL*/}
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          container={this}
          aria-labelledby="Add Line Item"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Add Line Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(e) => this.postLineItem(e)}>
              <div className="form-group">
                <label className="sr-only" htmlFor="boatName">Item Name</label>
                <input ref={(input)=> this.itemName = input} type="text" className="form-control"  placeholder="Item Name" />
              </div>
              <div className="form-group">
                <label className="sr-only" htmlFor="boatType">Description</label>
                <input ref={(input)=> this.itemDesc = input} type="text" className="form-control"  placeholder="Description" />
              </div>
              <div className="form-group">
                <label className="sr-only" htmlFor="boatLoc">Quantity</label>
                <input ref={(input)=> this.itemQuant = input} type="text" className="form-control" placeholder="Quantity" />
              </div>
              <div className="form-group">
                <label className="sr-only" htmlFor="boatLoc">Rate</label>
                <input ref={(input)=> this.itemRate = input} type="text" className="form-control"  placeholder="Rate" />
              </div>
              <div className="form-group">
                <label className="sr-only" htmlFor="boatLoc">Tax</label>
                <input ref={(input)=> this.itemTax = input} type="text" className="form-control"  placeholder="Tax" />
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
              <button onClick={this.handleClose} className="btn btn-danger">Cancel</button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }

}

EstimateAdminTools.contextTypes = {
  router: React.PropTypes.object
};