import React from "react";
import Tabs from "react-responsive-tabs";
import PageTitle from "../../../../Layout/AppMain/PageTitle";
import { UpperCategories, LowerCategories } from "./Examples/LinesBars";

const tabsContent = [
  {
    title: "Main Categories",
    content: <UpperCategories />,
  },
  {
    title: "Detailed Categories",
    content: <LowerCategories />,
  },
];

function getTabs() {
  return tabsContent.map((tab, index) => ({
    title: tab.title,
    getContent: () => tab.content,
    key: index,
  }));
}

const ChartJSExamples = () => (
  <React.Fragment>
    <PageTitle
      heading="Twitter sentiment"
      subheading="Sentiment analysis performed on Swedish tweets"
      icon="pe-7s-bandaid icon-gradient bg-amy-crisp"
    />
    <Tabs
      tabsWrapperClass="body-tabs body-tabs-layout"
      transform={false}
      showInkBar={true}
      items={getTabs()}
    />
  </React.Fragment>
);

export default ChartJSExamples;
