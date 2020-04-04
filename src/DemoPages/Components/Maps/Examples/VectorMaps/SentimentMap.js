import React from "react";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import swedishSentiment from "../../../../../assets/swedish-sentiment.json";
import globalSentiment from "../../../../../assets/global-sentiment.json";

import world from "./Static/world-50m-with-population.json";
import { eachDayOfInterval, format, parseISO } from "date-fns";
import { scaleLinear } from "d3-scale";

const colorScale = scaleLinear()
  .domain([-10, 10])
  .range(["red", "green"]);

const startDate = "2020-01-01";
const endDate = "2020-04-03";

const dates = eachDayOfInterval({
  start: parseISO(startDate),
  end: parseISO(endDate),
}).map((date) => format(date, "yyyy-MM-dd"));

export default class VectorMapsSentiment extends React.Component {
  constructor() {
    super();
    this.state = {
      value: dates.length - 1,
    };

    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(value) {
    this.setState({ value });
  }

  render() {
    const date = dates[this.state.value];
    const dateData = globalSentiment[date];
    return (
      <React.Fragment>
        <div className="text-center mb-2">
          <p>{date}</p>
          <input
            type="range"
            step="1"
            min={1}
            max={dates.length}
            value={this.state.value}
            onChange={(e) =>
              this.onDateChange(parseInt(e.target.value, 10) - 1)
            }
          />
        </div>
        <div>
          <ComposableMap
            projectionConfig={{
              scale: 205,
              rotation: [-11, 0, 0],
            }}
            width={980}
            height={551}
            style={{
              width: "100%",
              height: "auto",
            }}
          >
            <Geographies geography={world} disableOptimization>
              {(geographies, projection) =>
                geographies.map((geography, i) => {
                  if (!dateData) {
                    return null;
                  }
                  const countryData =
                    dateData.countrySentiments[geography.properties.iso_a3];
                  const regionStyles = {
                    fill: countryData ? colorScale(countryData.tone) : "white",
                    stroke: "#adb5bd",
                    strokeWidth: 0.75,
                    outline: "none",
                    transition: "fill 0.5s ease-out",
                  };
                  return (
                    <Geography
                      key={`${geography.properties.iso_a3}-${i}`}
                      cacheId={`${geography.properties.iso_a3}-${i}`}
                      geography={geography}
                      projection={projection}
                      onClick={this.handleClick}
                      round
                      style={{
                        default: regionStyles,
                        hover: regionStyles,
                        pressed: regionStyles,
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </div>
      </React.Fragment>
    );
  }
}
