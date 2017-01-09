import React from 'react';
import Carousel from './Carousel';

const Home = (props) => {
  return(
    <div>
      <Carousel />
      <div className="container main-content">
        <div className="row gradient-bg">
          <div className="col-md-6">
            <h2>What our clients have to say:</h2>
            <blockquote>
            <p>"Tony showed up on time and totally fixed my boat this weekend" -@Boaterfan</p>
            </blockquote>
            <blockquote>
            <p>"I was about to head out to Catalina when I found my steering stopped working. Tony sent a tech out to at an instant and the weekend was saved." -@Boaterfan2</p>
            </blockquote>
          </div>
          <div className="col-md-6">
            <h1>Serving Marina Del Rey</h1>
            <p>Authentic seitan swag taxidermy. Ugh pork belly craft beer, letterpress salvia messenger bag drinking vinegar 8-bit. Cray sustainable venmo, actually single-origin coffee tumeric snackwave readymade squid lomo chia skateboard humblebrag waistcoat cronut. Food truck gastropub cardigan cronut pitchfork. Literally wayfarers sriracha, art party schlitz artisan prism truffaut banh mi yr microdosing venmo. Venmo yuccie four dollar toast viral banjo, heirloom tote bag aesthetic woke +1. Activated charcoal pour-over tattooed synth aesthetic, hammock live-edge four loko banh mi.</p>
          </div>
        </div>
        <div className="row no-border">
          <div className="col-md-12 text-center">
            <h2>Factory trained in all leading systems.</h2>
          </div>
        </div>
        <div className="row text-center specialties-row no-border">
          <div className="col-md-4">
            <div className="thumbnail">
                <img src="img/garmin-logo.gif" />
                <h2>Garmin Authorized Technition</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="thumbnail">
                <img src="img/furino-logo.gif" />
                <h2>Furino Authorized Technition</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="thumbnail">
                <img src="img/raymarine-logo.jpg" />
                <h2>Raymarine Authorized Technition</h2>
            </div>
          </div>
        </div>
        <div className="row no-border text-center specialties-row">
          <div className="col-md-4">
            <div className="thumbnail">
                <img src="img/yanmar-logo.jpeg" />
                <h2>Yanmar Authorized Mechanic</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="thumbnail">
                <img src="img/cummins-logo.png" />
                <h2>Cummins Authorized Mechanic</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="thumbnail">
                <img src="img/volvo-logo.gif" />
                <h2>Volvo Authorized Mechanic</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className=" jumbotron col-md-12">
              <h2>October Special:</h2>
              <p>Request a service this month and recieve 5% off.</p>
              <button className="btn-lg btn-primary" type="button">Request Service</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home; 