import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import base from '../../base';

const Invoice = (props) => {

	const invoice = props.fetchInvoice(props.params.key) || {};
	const vessel = props.fetchVessel(invoice.vesselId);

	// Add price
  const items = invoice.items;
  let price = 0;
  let key; 
  for(key in items) {
    price = (items[key].itemRate * items[key].itemQuant) * ( 1 + items[key].itemTax) + price;
  }

  if (isNaN(price)) {
    price = '$0.00'; 
  } else {
    price = '$' + price.format(2);
  }

  // If the invoice is empty.
  if (!invoice.items) {
    invoice.items = {
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
    userTools = <InvoiceAdminTools
      endpoint={`invoice-${props.params.key}`}
      invoice={invoice}
      postInvoice={props.postInvoice}
     />
  } 
  // else {
  //   userTools = <InvoiceClientTools 
  //     approved={estimate.approved}
  //     id={estimate.id}
  //     updateEstimate={props.updateEstimate}
  //     viewed={estimate.viewed}
  //   />
  // }

	return(
		<div className="main-row">
      <div className="row no-border">
      	<div className="col-md-12">
      			<ul className="invoice-heading">
      				<li>Date: {new Date(invoice.date).toLocaleDateString()}</li>
      				<li>Vessel: {vessel.boatName}</li>
      				<li>Request ID: {invoice.requestId}</li>
      				<li>Invoice ID: {invoice.id}</li>
              <li>Status: {invoice.status}</li>
      			</ul>
            {userTools}
            <table className="table table-striped">
              <caption>Invoice Items</caption>
              <tbody>
              <tr>
                <th>Item Name</th>
                <th>Description</th>
                <th>Quantity</th>
                <th className="price-td">Rate</th>
                <th className="price-td">Price</th>
              </tr>
              {
                Object
                  .keys(invoice.items)
                  .map(key => <InvoiceItem key={key} index={key} 
                    invoice={invoice.items[key]}
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

export default Invoice;

/* ============== Invoice Table Items ================ */
const InvoiceItem = (props) => {
  const items = props.invoice;
  let price = (items.itemRate * items.itemQuant) * ( 1 + items.itemTax);

  if (isNaN(price)) {
    price = '$0.00'; 
  } else {
    price = '$' + price.format(2);
  }
  
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
// const EstimateClientTools = (props) => {

//   const estimate = props.estimate;

//   let button = <Button
//       bsStyle="success"
//       bsSize="sm"
//       onClick={() => props.updateEstimate(props.id, 'approved', '1')}>
//       Approve Estimate
//     </Button>
//   if (props.approved == '1') {
//     button = 'You have approved this estimate';
//   }
//   // Check if this estimate has not been viewed.
//   if (props.viewed == '0') {
//     props.updateEstimate(props.id, 'viewed', '1');
//   }

//   return(
//     <span>{button}</span>
//   )
// }

/* ============== Admin Tools ================ */
class InvoiceAdminTools extends React.Component {

  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.postLineItem = this.postLineItem.bind(this);
    this.state = {
      show: false,
      button: this.props.invoice.status
    }
  }

  componentWillMount() {
    this.setState({invoice: this.props.invoice});
    this.ref = base.syncState(`/invoices/${this.props.endpoint}`, {
      context: this,
      state: 'invoice'
    });
  }

  handleClose() {
    this.setState({show: false}); 
  }

  postLineItem(event) {
    event.preventDefault();
    const invoice = this.state.invoice;
    const item = {};
    item[this.itemName.value] = {
      itemName: this.itemName.value,
      itemDesc: this.itemDesc.value,
      itemQuant: this.itemQuant.value,
      itemRate: this.itemRate.value,
      itemTax: this.itemTax.value
    }
    invoice['items'] = item; 
    this.setState({invoice: invoice}); 
    this.handleClose();
  }

  render() {
    let invoiceButton;
    if (this.state.invoice.status == 'Draft') {
      invoiceButton = <Button
        bsStyle="success"
        bsSize="sm"
        onClick={() => this.props.postInvoice(this.state.invoice)}
      >
        Finilize Invoice
      </Button>
    } 
    if (this.state.invoice.status == 'Final') {
      invoiceButton = <p>Invoice is Final</p>
    } 

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
        {invoiceButton}
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