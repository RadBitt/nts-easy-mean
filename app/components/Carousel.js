import React from 'react';

const Carousel = (props) => {
  return(
    <div id="carousel" className="carousel slide col-md-12 hidden-xs" data-ride="carousel">{/* Start Carousel */}
      {/* Indicators */}
      <ol className="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" className="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
        <li data-target="#carousel" data-slide-to="3"></li>
      </ol>

      {/* Wrapper for slides */}
      <div className="carousel-inner" role="listbox">
        <div className="item active">
          <img src="img/marina.jpg" alt="boat-helm" />
          <div className="carousel-caption">
            <h3>Our services <strong>exceed imagination</strong>.</h3>
          </div>
        </div>
        <div className="item">
          <img src="img/helm.jpg" alt="boat-helm" />
          <div className="carousel-caption">
            <h3>Bear the instruments and communications your vessel needs.</h3>
          </div>
        </div>
        <div className="item">
          <img src="img/fuel-delivery.jpg" alt="boat-helm" />
          <div className="carousel-caption">
            <h3>Plot your next course with Nautical Tech Services.</h3>
          </div>
        </div>
        <div className="item">
          <img src="img/wires.jpg" alt="boat-helm" />
          <div className="carousel-caption">
            <h3>Your vessels limited space isn't getting any bigger. Our wiring is the cleanest in the business.</h3>
          </div>
        </div>
      </div>{/* Carousel */}
    </div>
  )
}

export default Carousel;