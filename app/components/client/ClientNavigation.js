import React from 'react';
import { Link } from 'react-router';

const ClientNavigation = (props) => {

	const pathname = props.path;
  const btnStylesMd = 'btn btn-lg btn-primary btn-block client-nav-btn';
  const btnStylesSm = 'btn btn-md btn-primary client-nav-btn-sm';
  let btnStyles = btnStyles = props.btnStyles == 'md' ? btnStylesMd : btnStylesSm; 

	const request = 					 <Link to={`${pathname}/request`}><button className={btnStyles}>New Request</button></Link>;

	const activeRequests =  	 <Link to={`${pathname}/requests`}><button className={btnStyles}>Active Requests</button></Link>;

	const invoices = 					 <Link to={`${pathname}/invoices`}><button className={btnStyles}>Invoices</button></Link>;

	const accountInformation = <Link to={`${pathname}/account`}><button className={btnStyles}>Account Information</button></Link>;

	const vesselInformation =  <Link to={`${pathname}/vessels`}><button className={btnStyles}>Vessel Information</button></Link>;

	const logout = 						 <button className={`${btnStyles} btn-danger`} onClick={props.logout}>Log Out</button>;

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