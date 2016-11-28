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
		//  2nd update URL
		 e.preventDefault();
		 
		 // Need to bind method to component
		 console.log(this.storeInput.value);

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
export default StorePicker;