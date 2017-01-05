import React from 'react';
import { Link } from 'react-router';

const ClientNavigation = (props) => {

	const pathname = props.path; 

	const request = 					 <Link to={`${pathname}/request`}><button className="btn btn-lg btn-primary">New Request</button></Link>;

	const activeRequests =  	 <Link to={`${pathname}/active`}><button className="btn btn-lg btn-primary">Active Requests</button></Link>;

	const invoices = 					 <Link to={`${pathname}/invoices`}><button className="btn btn-lg btn-primary">Invoices</button></Link>;

	const accountInformation = <Link to={`${pathname}/account`}><button className="btn btn-lg btn-primary">Account Information</button></Link>;

	const vesselInformation =  <Link to={`${pathname}/vessel`}><button className="btn btn-lg btn-primary">Vessel Information</button></Link>;

	const logout = 						 <button className="btn btn-lg btn-primary" onClick={props.logout}>Log Out!</button>;

	return(
		<span>
      {/* NewRequest */}
      {request}
      {/* OpenRequests */}
      {activeRequests}
      {/* Invoices */}
      {invoices}
			{/* Account Information */}
  		{accountInformation}
  		{/* Vessel Information */}
  		{vesselInformation}
  		{/* Logout */}
  		{logout}
    </span>
  )
}
 
export default ClientNavigation;