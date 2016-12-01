import React from 'react';

class AddFishForm extends React.Component {
	
	createFish(e) {
		e.preventDefault();
	}

	render() {
		return (
			<form className="fish-edit" onSubmit={ (e) => this.createFish(e) }>
			<input type="text" placeholder="Fish Name" />
			<input type="text" placeholder="Fish Price" />
			<select type="text">
				<option value="available">Fresh Fish!</option>
				<option value="unavailable">Sold Out!</option>
			</select>
			<textarea type="text" placeholder="Fish Desc"></textarea>
			<input type="text" placeholder="Fish Image" />
			<button type="submit">+ Add Item</button>
			</form>
		)
	}
}

export default AddFishForm;