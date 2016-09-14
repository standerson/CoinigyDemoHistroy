import React from 'react';
import Graph from '../Components/Graph.js';
import axios from 'axios';

class GraphContainer extends React.Component {

	constructor(){
		super();
		this.state = {
			data: [{}]
		};		
	}

	componentWillMount() {

		var url = this.props.graphSource;

		axios.get(url).then(response => {
			this.setState({
				data: response.data.data.history
			});
		}).catch(error => {
			console.log(error);
		});
	}
	
	componentWillReceiveProps(nextProp) {

		var url = nextProp.graphSource;

		axios.get(url).then(response => {
			this.setState({
				data: response.data.data.history
			});
		}).catch(error => {
			console.log(error);
		});
	}

	render() {

		return (
			<div>
				<Graph data={this.state.data}/>
			</div>
			) 
	}
}

export default GraphContainer;