import React from 'react';
import Register from './Register';
import base from '../../base';

class Dashboard extends React.Component {

	constructor(props) {
		super(props);
	}

  render () {

  	{/* Admin DashBaord */} 
  	if (localStorage.admin == true) {

  	}

  	{/* Client DashBaord */}
    return(
      <div></div>
    )
  }
}

export default Dashboard;