import React from 'react';
import ExchangeButton from '../Components/ExchangeButton.js'
import _ from 'lodash';
import axios from 'axios';

class ExchangeContainer extends React.Component {

	constructor(){
		super();
		this.state = {

		};

		this.onExchangeButtonClicked = this.onExchangeButtonClicked.bind(this);
	}
 
 onExchangeButtonClicked(exchange) {
 	
 	if(this.props.onSourceClicked) {
 		this.props.onSourceClicked(exchange);
 	}
 }

 componentWillMount() {
  //mock the json response for markets
  var url = this.props.source;
  
  axios.get(url).then(response => {
  	this.setState({
  		data: response.data.data
  	});
  }).catch(error => {
  	console.log(error);
  });


}

render() {

	var exch_code = _.map(this.state.data, 'exch_code');
	return (
		<div>
		{exch_code.map((exch) => {
			return (
				<ExchangeButton key={exch} text={exch} onClick={() => this.onExchangeButtonClicked(exch)}> </ExchangeButton>
				);
		})}
		</div>
		) 
}
}

ExchangeContainer.propTypes = {
	onSourceClicked: React.PropTypes.func.isRequired
}

export default ExchangeContainer;