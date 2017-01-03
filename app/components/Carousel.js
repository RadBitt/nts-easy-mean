import React from 'react';

class Carousel extends React.Component {
  render() {
    return(
      <div id="carousel" className="carousel slide col-md-12 hidden-xs" data-ride="carousel">{/* Start Carousel */}
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" className="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
          <li data-target="#carousel" data-slide-to="2"></li>
          <li data-target="#carousel" data-slide-to="3"></li>
          <li data-target="#carousel" data-slide-to="4"></li>
        </ol>

        {/* Wrapper for slides */}
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src="img/marina.jpg" alt="boat-helm" />
            <div className="carousel-caption">
              <h3>Nautical Tech Services will be there whenever you want. We specialize in everything.</h3>
            </div>
          </div>
          <div className="item">
            <img src="img/helm.jpg" alt="boat-helm" />
            <div className="carousel-caption">
              <h3>Nautical Tech Services will be there whenever you want. We specialize in everything.</h3>
            </div>
          </div>
          <div className="item">
            <img src="img/helm-outside.jpg" alt="boat-helm" />
            <div className="carousel-caption">
              <h3>Nautical Tech Services works weekends.</h3>
            </div>
          </div>
          <div className="item">
            <img src="img/fuel-delivery.jpg" alt="boat-helm" />
            <div className="carousel-caption">
              <h3>Fuel system deliver for diesel engins and engine services.</h3>
            </div>
          </div>
          <div className="item">
            <img src="img/wires.jpg" alt="boat-helm" />
            <div className="carousel-caption">
              <h3>Nautical Tech Services takes pride in its wiring</h3>
            </div>
          </div>
        </div>{/* Carousel */}
      </div>
    )
  }
}

export default Carousel;