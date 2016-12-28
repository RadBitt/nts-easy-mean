import React from 'react';
import Nav from './Nav';
import Carousel from './Carousel';
import Body from './Body';
import Footer from './Footer';

class App extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				<Carousel />
				<Body />
				<Footer />
			</div>

		)
	}
}

export default App;