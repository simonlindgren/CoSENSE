import React from 'react';
import {Line} from 'react-chartjs-2';
import TWITTER_SENTIMENT_DATA from './twitterSentiment'

const initialState = {
  labels: [],
  datasets: [
    {
      label: 'Anxiety index',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    }
  ]
};

var createReactClass = require('create-react-class');

const Graph = createReactClass({
  displayName: 'Graph',
  componentWillMount(){
    this.setState(initialState);
  },
  componentDidMount(){

    var _this = this;

    var oldDataSet = _this.state.datasets[0];

    var newLabels = [];
    var newData = [];

    Object.keys(TWITTER_SENTIMENT_DATA).forEach(function(key) {
      newLabels.push(key);
      newData.push(TWITTER_SENTIMENT_DATA[key]['anxietyIndex']);
    });

    var newDataSet = {
      ...oldDataSet
    };

    newDataSet.data = newData;

    var newState = {
      ...initialState,
      labels: newLabels,
      datasets: [newDataSet]
    };
    console.log(newState);
    _this.setState(newState);
  },
  render() {
    return (
        <Line data={this.state} />
    );
  }
});

class AnxietyIndex extends React.Component {

  render() {
    return (
        <div>
          <Graph />
        </div>
    )
  }
}


export default AnxietyIndex;