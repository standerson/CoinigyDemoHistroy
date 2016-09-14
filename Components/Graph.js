import React from 'react';
import ReactDOM from 'react-dom';
//var LChart = require("react-chartjs").Line;
const LChart = require('react-plotlyjs');
//var Chart = require('chartjs');

class LineChart extends React.Component {

//     componentWillMount() {
//             var marketHistory = this.props.data;

// var result = [];
// var labels = [];
// for (var i = 0; i < marketHistory.length; i++) {
//   result.push(marketHistory[i].price);
//   labels.push(i);
// }
// console.log(labels);
// var trace1 = {
//   x: labels,
//   y: result,
//   type: 'line'
// };

// var data1 = [trace1];
//     }

render() {
	var marketHistory = this.props.data;
	var price = [];
	var labels = [];

	for (var i = 0; i < marketHistory.length; i++) {
		price.push(marketHistory[i].price);
		labels.push(marketHistory[i].time_local);
	}
	
	var trace1 = {
		x: labels,
		y: price,
		type: 'line'
	};

	var data1 = [trace1];

	return (
		<LChart data={data1} width="600" height="250" />
		)
}   

}

export default LineChart;