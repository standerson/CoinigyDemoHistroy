import React from 'react';
import ReactDOM from 'react-dom';
import ExchangeContainer from '../Containers/ExchangeContainer.js';

class ExchangeButton extends React.Component {
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
	borderBottom: '3px solid #b4bb48',
	bolor: 'white',
	padding: '5px 5px',
	textAlign: 'center',
	textDecoration: 'none',
	display: 'inline-block',
	fontSize: '8px',
	fontFamily: 'Arial',
	letterSpacing: 1,
};
export default ExchangeButton;