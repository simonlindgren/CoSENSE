import React, { Fragment } from "react";
import Tabs from "react-responsive-tabs";
import PageTitle from "../../../Layout/AppMain/PageTitle";

// Examples
import VectorMapsExample from "./Examples/VectorMaps";

const tabsContent = [
  {
    title: "English news",
    content: <VectorMapsExample />,
  },
];

function getTabs() {
  return tabsContent.map((tab, index) => ({
    title: tab.title,
    getContent: () => tab.content,
    key: index,
  }));
}

export default class MapsExample extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          heading="World sentiment analysis"
          subheading="Sentiment analysis of international covid-19 news on each country day by day"
          icon="pe-7s-map icon-gradient bg-premium-dark"
        />
        <Tabs
          tabsWrapperClass="body-tabs body-tabs-layout"
          transform={false}
          showInkBar={true}
          items={getTabs()}
        />
      </Fragment>
    );
  }
}
