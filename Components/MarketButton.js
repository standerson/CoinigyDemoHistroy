import React from 'react';
import ReactDOM from 'react-dom';
import MarketContainer from '../Containers/MarketContainer.js';

class MarketButton extends React.Component {
	
	constructor() {
		super();
	}

	render() {
		return (
			<button onClick={this.props.onClick} style={buttonStyle}>
				{ this.props.text }
			</button>
			);
	}
}

const buttonStyle = {
	WebkitTransitionDuration: '0.1s', /* Safari */
	TransitionDuration: '0.1s',
	backgroundColor: '#b4bbde',
	borderRadius: 8,
	borderBottom: '2px solid #b4bb48',
	bolor: 'white',
	padding: '4px 4px',
	textAlign: 'center',
	textDecoration: 'none',
	display: 'inline-block',
	fontSize: '8px',
	fontFamily: 'Arial',
	letterSpacing: 1,
};

export default MarketButton;