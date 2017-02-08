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
  price = '$' + price.format(2);

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

/* ============== Estimate Table Items ================ */
const InvoiceItem = (props) => {
  const items = props.invoice;
  let price = (items.itemRate * items.itemQuant) * ( 1 + items.itemTax);
      price = '$' + price.format(2);
  return(
    <tr>
      <td>{items.itemName}</td>
      <td>{items.itemDesc}</td>
      <td>{items.itemQuant}</td>
      <td className="price-td">{items.itemRate}</td>
      <td className="price-td">{price}</td>
    </tr>
  )
}