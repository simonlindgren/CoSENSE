import "chartjs-plugin-annotation";
import React from "react";
import { Line } from "react-chartjs-2";
import TWITTER_SENTIMENT_DATA from "./twitterSentiment";
import { parseISO, isAfter } from "date-fns";

const createAnnotation = (date, label, fontSize = 16) => ({
  type: "line",
  mode: "vertical",
  scaleID: "x-axis-0",
  value: date,
  borderColor: "orange",
  borderWidth: 3,
  borderDash: [30, 5],
  label: {
    fontSize,
    xPadding: 12,
    yPadding: 12,
    content: label,
    enabled: true,
    position: "top",
  },
});

const CHART_OPTIONS = {
  scales: {
    xAxes: [
      {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 20,
        },
      },
    ],
  },
};

const INDEXES = {
  disease: {
    diseaseIndex: {
      label: "Disease index",
      borderColor: 'rgba(75,192,192,1)',
    },
    health: {
      label: "Health",
      borderColor: 'rgba(255,77,77,1)',
    },
    death: {
      label: "Death",
      borderColor: 'rgba(0,204,0, 1)',
    },
    bio: {
      label: "Medical",
      borderColor: 'rgba(0,102,255,1)',
    },
    body: {
      label: "Symptoms",
      borderColor: 'rgba(153,51,255,1)',
    }
  },
  emotion: {
    emotionIndex: {
      label: "Emotion index",
      borderColor: 'rgba(153, 102, 0,1)',
    },
    feel: {
      label: "Feelings",
      borderColor: 'rgba(255,77,77,1)',
    },
    negemo: {
      label: "Negative emotions",
      borderColor: 'rgba(0,204,0, 1)',
    },
    affect: {
      label: "Affect",
      borderColor: 'rgba(0,102,255,1)',
    },
    anger: {
      label: "Anger",
      borderColor: 'rgba(153,51,255,1)',
    },
    swear: {
      label: "Swear",
      borderColor: 'rgba(204, 51, 153,1)',
    },
    anxiety: {
      label: "Anxiety",
      borderColor: 'rgba(204, 102, 0,1)',
    },
    sad: {
      label: "Sadness",
      borderColor: 'rgba(192, 192, 192,1)',
    },
    posemo: {
      label: "Positive emotions",
      borderColor: 'rgba(0, 102, 153,1)',
    },
  },
  relation: {
    relationIndex: {
      label: "Relation index",
      borderColor: 'rgba(0, 102, 153,1)',
    },
    friend: {
      label: "Friends",
      borderColor: 'rgba(255,77,77,1)',
    },
    family: {
      label: "Family",
      borderColor: 'rgba(0,204,0,1)',
    },
    social: {
      label: "Community",
      borderColor: 'rgba(0,102,255,1)',
    }
  },
  economy: {
    economyIndex: {
      label: "Economy index",
      borderColor: 'rgba(0,102,255,1)',
    },
    money: {
      label: "Money",
      borderColor: 'rgba(255,77,77,1)',
    },
    work: {
      label: "Work",
      borderColor: 'rgba(0,204,0,1)',
    }
  },
  political: {
    politicalIndex: {
      label: "Political index",
      borderColor: 'rgba(204, 51, 153,1)',
    },
    power: {
      label: "Power",
      borderColor: 'rgba(255,77,77,1)',
    },
    cause: {
      label: "Cause",
      borderColor: 'rgba(0,204,0, 1)',
    },
    certain: {
      label: "Certainty",
      borderColor: 'rgba(0,102,255,1)',
    },
    insight: {
      label: "Insight",
      borderColor: 'rgba(153,51,255,1)',
    },
    compare: {
      label: "Comparisons",
      borderColor: 'rgba(192, 192, 192,1)',
    },
    risk: {
      label: "Risk",
      borderColor: 'rgba(204, 102, 0,1)',
    },
    interrog: {
      label: "Questioning",
      borderColor: 'rgba(153, 102, 0,1)',
    },
    focusfuture: {
      label: "Future focus",
      borderColor: 'rgba(0,204,0,1)',
    },
    relig: {
      label: "Religion",
      borderColor: 'rgba(255, 102, 255,1)',
    },
    tentat: {
      label: "Uncertainty",
      borderColor: 'rgba(255, 255, 26,1)',
    },
    quant: {
      label: "Numbers",
      borderColor: 'rgba(153, 0, 0,1)',
    }
  },
};

const getDataSet = (upperCategoryKey, lowerCategoryKey, data) => {
  const index = INDEXES[upperCategoryKey][lowerCategoryKey];
  return {
  label: index.label,
  fill: false,
  lineTension: 0.1,
  backgroundColor: "rgba(75,192,192,0.4)",
  borderColor: index.borderColor,
  borderCapStyle: "round",
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: "miter",
  pointBorderColor: "rgba(75,192,192,1)",
  pointBackgroundColor: "#fff",
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: "rgba(75,192,192,1)",
  pointHoverBorderColor: "rgba(220,220,220,1)",
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10,
  data,
}};

const initialState = {
  labels: [],
  datasets: [],
};

var createReactClass = require("create-react-class");

const Graph = createReactClass({
  displayName: "Graph",
  componentWillMount() {
    this.setState(initialState);
  },
  componentDidMount() {
    const startDate = parseISO("2020-01-20");
    var dates = Object.keys(TWITTER_SENTIMENT_DATA).filter((date) => isAfter(parseISO(date), startDate));
    var upperCategories = Object.keys(this.props.indexTypes);

    const datasets = upperCategories.reduce((acc, upperCategoryKey) => {
      const lowerCategories = this.props.indexTypes[upperCategoryKey];
      const dataset = lowerCategories.map((lowerCategoryKey) => {
        const data = dates.map(
          (date) =>
            TWITTER_SENTIMENT_DATA[date][upperCategoryKey][lowerCategoryKey]
        );
        return getDataSet(upperCategoryKey, lowerCategoryKey, data);
      });
      return [...acc, ...dataset];
    }, []);

    var newState = {
      ...initialState,
      labels: dates,
      datasets,
    };

    this.setState(newState);
  },

  render() {
    const { timelineLabels } = this.props;
    const annotations = timelineLabels
      ? timelineLabels.map(({ date, label }) => createAnnotation(date, label))
      : [];
    const options = {
      ...CHART_OPTIONS,
      annotation: {
        annotations,
      },
    };
    return <Line data={this.state} options={options} />;
  },
});

const TwitterIndex = ({ indexTypes, timelineLabels }) => (
  <div>
    <Graph indexTypes={indexTypes} timelineLabels={timelineLabels} />
  </div>
);

export default TwitterIndex;
