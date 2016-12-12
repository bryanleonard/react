import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
	render() {

		// Same as below, const details = this.props.details
		// Same as below, const index = this.props.index
		const { details, index } = this.props;
		const isAvailable = details.status === 'available';
		const btnText = isAvailable ? 'Add to order' : 'Sold Out';

		return (

			<li className="menu-fish">
				<img src={details.image} alt={details.name} />
				<h3 className="fish-name">
					{details.name}
					<span className="price">{formatPrice(details.price)}</span>
				</h3>

				<p>{details.desc}</p>
				<button disabled={!isAvailable} 
					onClick={ () => this.props.addToOrder(index) }>
						{btnText}
					</button>
			</li>
		)
	}
}

export default Fish;