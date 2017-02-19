import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import SampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base'; //firebase.google.com

class App extends React.Component {
	
	constructor() {
		super();

		// bind method to app to use "this"
		this.addFish     = this.addFish.bind(this);
		this.loadSamples = this.loadSamples.bind(this);
		this.addToOrder  = this.addToOrder.bind(this);
		this.removeFromOrder  = this.removeFromOrder.bind(this);
		this.updateFish  = this.updateFish.bind(this);
		this.removeFish  = this.removeFish.bind(this);

		// initial state
		this.state = {
			fishes: {},
			order: {}
		};
	}

	// could also look at shouldComonentUpdate in Lifecycle Methods
	componentWillMount() {
		//this runs before app is rendered
		this.ref = base.syncState(`${this.props.params.storeId}/fishes`
			, {
				context: this,
				state: 'fishes'
			})

		// check for any order in localStorage
		const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`)

		if (localStorageRef) {
			//update app component order state
			this.setState({
				order: JSON.parse(localStorageRef)
			});
		}
	}

	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

	componentWillUpdate(nextProps, nextState) {
		localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order))
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

	updateFish(key, updatedFish) {
		const fishes = {...this.state.fishes};
		fishes[key] = updatedFish;
		this.setState({fishes});
	}

	removeFish(key) {
		const fishes = {...this.state.fishes};
		fishes[key] = null;
		this.setState({ fishes });
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

	removeFromOrder(key) {
		const order = {...this.state.order};
		delete order[key];
		this.setState({order});
	}

	render() {
		return (
			<section className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
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
				<Order 
					fishes={this.state.fishes} 
					order={this.state.order} 
					params={this.props.params} 
					removeFromOrder={this.removeFromOrder}
				/>
				<Inventory 
					addFish={this.addFish} 
					loadSamples={this.loadSamples} 
					fishes={this.state.fishes} 
					updateFish={this.updateFish} 
					removeFish={this.removeFish}
					storeId={this.props.params.storeId}
				/>
			</section>
		)
	}
}

App.propTypes = {
	params: React.PropTypes.object.isRequired
}

export default App;