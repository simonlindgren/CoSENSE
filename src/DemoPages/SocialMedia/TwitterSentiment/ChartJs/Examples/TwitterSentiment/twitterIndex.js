import React from 'react';
import {Line} from 'react-chartjs-2';
import TWITTER_SENTIMENT_DATA from './twitterSentiment'

const CHART_OPTIONS = {
  scales: {
    xAxes: [{
      ticks: {
        autoSkip: true,
        maxTicksLimit: 20
      }
    }]
  }
}

const INDEXES = {
  anxietyIndex: {
    label: "Anxiety index",
    borderColor: 'rgba(75,192,192,1)',
  },
  fearIndex: {
    label: "Fear index",
    borderColor: 'rgba(192,192,192,1)',
  },
}

const getDataSet = (indexType, data) => ({
      label: INDEXES[indexType].label,
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: INDEXES[indexType].borderColor,
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
      data,
});

const initialState = {
  labels: [],
  datasets: [],
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

    var dates = Object.keys(TWITTER_SENTIMENT_DATA);
    var newData = [];

    const datasets = this.props.indexTypes.map((indexType) => {
      const data = dates.map((date) => 
        TWITTER_SENTIMENT_DATA[date][indexType]
      );
      return getDataSet(indexType, data);
    });
   
    var newState = {
      ...initialState,
      labels: dates,
      datasets
    };

    _this.setState(newState);
  },
  render() {
    return (
        <Line data={this.state} options={CHART_OPTIONS} />
    );
  }
});

class TwitterIndex extends React.Component {

  render() {

    return (
        <div>
          <Graph indexTypes={this.props.indexTypes} />
        </div>
    )
  }
}


export default TwitterIndex;