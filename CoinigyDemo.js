import React from 'react';
import ReactDOM from 'react-dom';
import ExchangeContainer from './Containers/ExchangeContainer';
import MarketContainer from './Containers/MarketContainer';
import GraphContainer from './Containers/GraphContainer';

class CoinigyDemo extends React.Component {

	constructor() {
		super();

		this.state = {
			exchangeSource: '/api/markets/GDAX',
			graphSource: '/api/data/OK/BTC/CNY/history',
			data : this.trace1
		};

		this.changeExchangeSource = this.changeExchangeSource.bind(this);
		this.changeGraphSource = this.changeGraphSource.bind(this);
	}

	changeExchangeSource(newExchangeSource) {
		this.setState({
			exchangeSource: `/api/markets/${newExchangeSource}`
		});
	}

	changeGraphSource(newMarket, newExchange) {
		this.setState({
			graphSource: `/api/data/${newExchange}/${newMarket}/history`
		});
	}

	render() {
		return (
			<div>
			<h3>Last 100 trades</h3>
			Exchanges
			<ExchangeContainer  source="/api/exchanges" onSourceClicked={this.changeExchangeSource} />
			Matkets
			<MarketContainer exchangeSource={this.state.exchangeSource} onSourceClicked={this.changeGraphSource} />
			{/*todo: add Dynamic, human readable graph source */}
			<GraphContainer graphSource={this.state.graphSource} />
			</div>
			)
	}
}

export default CoinigyDemo;