import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import SampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
	
	constructor() {
		super();

		// bind method to app to use "this"
		this.addFish     = this.addFish.bind(this);
		this.loadSamples = this.loadSamples.bind(this);
		this.addToOrder  = this.addToOrder.bind(this);

		// initial state
		this.state = {
			fishes: {},
			order: {}
		};
	}

	componentWillMount() {
		this.ref = base.syncState(`${this.props.params.storeId}/fishes`
			, {
				context: this,
				state: 'fishes'
			})
		
	}

	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

	addFish(fish) {
		//update state
		const fishes = {...this.state.fishes}; //take copy every item our obj and spread it into this new obj
		
		// add in our new fish
		const timestamp = Date.now();
		fishes[`fish-${timestamp}`] = fish;
		
		// set state
		this.setState({ fishes }) // {fishes: fishes}
	}

	loadSamples() {
		this.setState({
			fishes: SampleFishes
		})
	}

	addToOrder(key) {
		// take a copy of our state
		const order = {...this.state.order};
		// update or add new number of fish
		order[key] = order[key] + 1 || 1;
		// update state
		this.setState({ order });
	}

	render() {
		return (
			<section className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
					{/* <Fish /> */}
					<ul className="list-of-fishes">
						{
							// make obj an array, then map over the key
							
							Object
								.keys(this.state.fishes)
								.map(key => <Fish key={key} 
									index={key} 
									details={this.state.fishes[key]}
									addToOrder={this.addToOrder} />)
						}
					</ul>
				</div>
				<Order fishes={this.state.fishes} order={this.state.order} />
				<Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
			</section>
		)
	}
}

export default App;