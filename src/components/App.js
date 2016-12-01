import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
	
	constructor() {
		super();

		// bind method to app
		this.addFish = this.addFish.bind(this);

		// initial state
		this.state = {
			fishes: {},
			order: {}
		};
	}

	addFish(fish) {
		//update state
		const fishes = {...this.state.fishes}; //take copy every item our obj and spread it into this new obj
		
		// add in our new fish
		const timestamp = Date.now();
		fishes[`fish-${timestamp}`] = fish;
		
		//set state
		this.setState({ fishes }) // {fishes: fishes}
	}

	render() {
		return (
			<section className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
					{/* <Fish /> */}
				</div>
				<Order />
				<Inventory addFish={this.addFish} />
			</section>
		)
	}
}

export default App;