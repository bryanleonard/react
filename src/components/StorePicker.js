import React from 'react';

class StorePicker extends React.Component {
	render() {
		return (
			<form action="" className="store-selector">
				{/* this is a comment */}
				<h2>Please Enter A Store</h2>
				<input type="text" placeholder="Store Name" required />
				<button type="submit">Visit Store &#65515;</button>
			</form>
		)
	}
}
export default StorePicker;