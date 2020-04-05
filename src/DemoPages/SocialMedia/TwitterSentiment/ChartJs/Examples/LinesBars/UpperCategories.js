import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import TwitterIndex from "../TwitterSentiment/twitterIndex";

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

export const UpperCategories = () => (
  <ReactCSSTransitionGroup
    component="div"
    transitionName="TabsAnimation"
    transitionAppear={true}
    transitionAppearTimeout={0}
    transitionEnter={false}
    transitionLeave={false}
  >
    <Row>
      <Col lg="12">
        <Card className="main-card mb-3">
          <CardBody>
            <CardTitle>Twitter index</CardTitle>
            <TwitterIndex
              indexTypes={{
                disease: ["diseaseIndex"],
                emotion: ["emotionIndex"],
                relation: ["relationIndex"],
                economy: ["economyIndex"],
                political: ["politicalIndex"],
              }}
              timelineLabels={[
                { date: "2020-03-22", label: "Stefan löfven håller tal" },
              ]}
            />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </ReactCSSTransitionGroup>
);
