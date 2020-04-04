import React from "react";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import dataJSON from "../../../../../assets/global-sentiment.json";

import world from "./Static/world-50m-with-population.json";
import { eachDayOfInterval, format } from "date-fns";
import { scaleLinear } from "d3-scale";

const colorScale = scaleLinear()
  .domain([-10, 0, 10])
  .range(["#b30202", "#2b740d"]);

const startDate = "2020-04-01";

const dates = eachDayOfInterval({
  start: new Date(2020, 0, 1),
  end: new Date(2020, 3, 1),
}).map((date) => format(date, "yyyy-MM-dd"));

export default class VectorMapsSentiment extends React.Component {
  constructor() {
    super();
    this.state = {
      date: startDate,
      data: dataJSON[startDate],
    };

    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({ date, data: dataJSON[date] });
  }

  render() {
    return (
      <React.Fragment>
        <div className="text-center mb-2">
          <p>{this.state.date}</p>
          <input
            type="range"
            step="1"
            list="dates"
            min={0}
            max={dates.length - 1}
            onChange={(e) =>
              this.onDateChange(dates[parseInt(e.target.value, 10) - 1])
            }
          />
          <datalist id="dates">
            {dates.map((date) => (
              <option value={date}></option>
            ))}
          </datalist>
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
                  if (!this.state.data) {
                    return null;
                  }
                  const countryData = this.state.data.countrySentiments[
                    geography.properties.iso_a3
                  ];
                  const regionStyles = {
                    fill: countryData
                      ? colorScale(countryData.tone * 100)
                      : "white",
                    stroke: "#adb5bd",
                    strokeWidth: 0.75,
                    outline: "none",
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
