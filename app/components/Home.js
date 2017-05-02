import React from 'react';
import Carousel from './Carousel';

const Home = (props) => {
  return(
    <div>
      <Carousel />
      {/* Specialty Section */}
      <div className="container-fluid fluid-row-bg2">
        <div className="container-fluid fluid-row-color2">
          <div id="services1" className="container">
            <div className="row ">
              <div className="col-md-12 text-center">
                <p className="lead"> The <em>constant</em> area of engine rooms, storage spaces, and service spaces is our work space.
                Our work is an application of our seafaring philosophy. A vessels' <strong>success exists in a zenith </strong>
                between performance and compromise. Working within this margin <strong>is our specialty</strong>.                
                </p>
              </div>
              <div className="col-md-4 col-sm-4">
                <h2>Communications</h2>
                <div className="thumbnail">
                  <img src="img/icons/radar.png" alt="Communications Service" />
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <h2>Custom Panels</h2>
                <div className="thumbnail">
                  <img 
                    src="img/icons/dashboard.png" alt="Custom Panel Service" />
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <h2>Instruments</h2>
                <div className="thumbnail">
                  <img src="img/icons/speed.png" alt="Instrument Service" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Section */}
      <div id="about" className="container-fluid fluid-row-bg1">
        <div className="container-fluid fluid-row-color1">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <p>Nautical Tech Services(NTS) is <i>the</i> up and coming vessel repair and maintenance service in Santa Monica Bay. 
                Whether your vessel is on the hard or in the slip, NTS offers professional mobile services to maintain, repair, or upgrade your vessels. 
                Our services bring years of experience and solutions to your vessels' peripheral instruments, communication systems, and powerplants. 
                If you place your ear to the ground, you may not realize what so many boaters in Santa Monica Bay have been talking about:<br/> Nautical Tech Services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Maintenance Section */}
      <div className="container-fluid fluid-row-bg2">
        <div className="container-fluid fluid-row-color2">
          <div id="services2" className="container">
            <div className="row">
              <div className="col-md-12 jumbotron">
                <div className="row no-margin-tb">
                  <div className="col-md-10 col-md-offset-1 text-center">
                    <div className="row alert alert-info">
                      <div className="col-md-8">
                        <p className="lead">Before your next adventure, schedule one or more of the periodical services below.</p>
                      </div>
                      <div className="col-md-4">
                        <a style={{display: 'block'}} href="tel:+1-310-309-9440" className="btn btn-primary">
                        <i className="fa fa-phone-square" style={{fontSize: 1.6+'em', marginLeft: 10+'px'}} aria-hidden="true"></i> 
                        <strong style={{fontSize: 25.6+'px', marginLeft: 10+'px'}}>310-309-9440</strong></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Engine Service */}
                <div className="row no-margin-t">
                  <div className="col-md-3 col-md-offset-0 col-sm-10 col-sm-offset-1">
                    <h2 className="text-center">Engine Service</h2>
                    <div className="thumbnail">
                      <img src="img/icons/engine.png" alt="Engine Service" />
                    </div>
                  </div>
                  <div className="col-md-9 col-sm-10">
                    <dl className="dl-horizontal">
                      <dt>Cooling</dt>
                      <dd>Sea strainers and raw water pumps need inspection to maintain the proper operating temperature of your engine. Old heat exchangers may need internal repairs as well. A quick and painless inspection can verify it is all in working order.</dd>
                      <dt>Fuel & Oil</dt>
                      <dd>Change your fuel filters during your routine oil changes to save on labor costs. We also order a spare set of oil and fuel filters for those extended trips.</dd>
                      <dt>Intakes</dt>
                      <dd>Clean filters and coolers are necessary for an engine's peak performance.</dd>
                      <dt>Exhaust</dt>
                      <dd>The hot exhaust will eventually win a battle against efforts to direct its flow. We will inspect this system and make sure everything is <em>cool</em>.</dd>
                      <dt>Fuel Delivery</dt>
                      <dd>One bad injector could leave you without the power to maneuver as needed. The parts needed to repair problems caused from faulty fuel delivery are found and replaced for you.</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            {/* Battery Service */}
            <div className="row">
              <div className="col-md-3 col-md-offset-0 col-sm-10 col-sm-offset-1">
                 <h2 className="text-center">Battery Service</h2>
                <div className="thumbnail">
                  <img src="img/icons/battery.png" alt="Battery Service" />
                </div>
              </div>
              <div className="col-md-9 col-sm-10">
                <dl className="dl-horizontal">
                  <dt>Deep Cycle</dt>
                  <dd>We understand the electrical needs of many classes of vessels.</dd>
                  <dt>Full service</dt>
                  <dd>The heavy lifting is up to us. Moving these behemoths is a skill in itself. The delicate systems and finishes of your yacht are not an afterthought.</dd>
                  <dt>One Stop</dt>
                  <dd>From start to finish, a full service installation or replacement is always standard.</dd>
                </dl>
              </div>
            </div>
            {/* Electrical Service */}
            <div className="row">
              <div className="col-md-3 col-md-offset-0 col-sm-10 col-sm-offset-1">
                <h2 className="text-center">Electrical Service</h2>
                <div className="thumbnail">
                  <img src="img/icons/generator.png" alt="Generator Service" />
                </div>
              </div>
              <div className="col-md-9 col-sm-10">
                <dl className="dl-horizontal">
                  <dt>Generators</dt>
                  <dd>Even if they aren't used, generators need the same amount of attention as engines do.</dd>
                  <dt>Electrical</dt>
                  <dd>We can troubleshoot strange and intermittent problems within your DC or AC circuits.</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home; 