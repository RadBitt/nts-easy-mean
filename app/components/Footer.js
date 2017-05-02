import React from 'react';

const Footer = (props) => {
  return(
    <div id="footer" className="container-fluid">
      <div className="container">
        <div className="row">
            <div className="col-md-5">
              <address>
                <strong>Nautical Tech Services</strong><br />
                Marine Del Rey, CA 90292
              </address>
              <a style={{display: 'block'}} href="tel:+1-310-309-9440" className="btn btn-primary">
              <i className="fa fa-phone-square" style={{fontSize: 1.6+'em', marginLeft: 10+'px'}} aria-hidden="true"></i> 
              <strong style={{fontSize: 25.6+'px', marginLeft: 10+'px'}}>310-309-9440</strong></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;