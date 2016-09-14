import React from 'react';
import MarketButton from '../Components/MarketButton.js'
import _ from 'lodash';
import axios from 'axios';

class MarketContainer extends React.Component {

	constructor(){
		super();
		this.state = {

		};

		this.onMarketButtonClicked = this.onMarketButtonClicked.bind(this);
	}

	onMarketButtonClicked(market, exch_code) {

		if(this.props.onSourceClicked) {
			this.props.onSourceClicked(market, exch_code);
		}
	}

	componentWillReceiveProps(nextProp) {

		var url = nextProp.exchangeSource;

		axios.get(url).then(response => {
			this.setState({
				data: response.data.data
			});
		}).catch(error => {
			console.log(error);
		});
	}

	render() {

 	var mkt_name = _.map(this.state.data);
 	return (
 		<div>
 		{mkt_name.map((market) => {
 			return (
 				<MarketButton key={market.mkt_name} text={market.mkt_name} onClick={() => this.onMarketButtonClicked(market.mkt_name, market.exch_code)}> </MarketButton>
 				);
 			}
 		)}
 		</div>
 		) 
 	}
}

MarketContainer.propTypes = {
	onSourceClicked: React.PropTypes.func.isRequired
}

export default MarketContainer;