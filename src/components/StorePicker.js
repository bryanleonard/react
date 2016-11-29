import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {

	// 1 way to bind method to component, makes sense for multiple bindings
	// constructor() {
	// 	super();
	// 	this.goToStore = this.goToStore.bind(this);
	// }
	
	// 2nd way
	// Submit={this.goToStore.bind(this)}
	// or
	// onSubmit={ () => this.goToStore(e) }


	goToStore(e) {
		// 1st grab text
		// 2nd update URL
		 e.preventDefault();
		
		 const storeId = this.storeInput.value;
		 this.context.router.transitionTo(`/store/${storeId}`);
	}

	render() {
		return (
			<form action="" className="store-selector" onSubmit={(e) => this.goToStore(e)}>
				{/* this is a comment */}
				<h2>Please Enter A Store</h2>
				<input type="text" placeholder="Store Name" defaultValue={getFunName()} ref={ (input) => {this.storeInput = input} } required />
				<button type="submit">Visit Store &#65515;</button>
			</form>
		)
	}
}

//Surface the router from the parent class using contextTypes
StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;