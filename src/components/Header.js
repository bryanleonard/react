import React from 'react';

// Don't need any of the methods other than render
// class Header extends React.Component { render() {} }
const Header = (props) => {
	return (
		<header className="top">
			<h1>
				Catch 
				<span className="ofThe">
					<span className="of">of</span>
					<span className="the">the</span>
				</span>
				Day
			</h1>
			<h3 className="tagline"><span>{props.tagline}</span></h3>
		</header>
	)
}

Header.propTypes = {
	tagline: React.PropTypes.string.isRequired // isRequired is optional, otherwise, sets expected value (string, bool, etc)
}
		
export default Header;