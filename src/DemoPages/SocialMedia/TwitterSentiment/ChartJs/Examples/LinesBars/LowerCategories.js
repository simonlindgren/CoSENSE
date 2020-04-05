import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import TwitterIndex from "../TwitterSentiment/twitterIndex";

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

export const LowerCategories = () => (
  <ReactCSSTransitionGroup
    component="div"
    transitionName="TabsAnimation"
    transitionAppear={true}
    transitionAppearTimeout={0}
    transitionEnter={false}
    transitionLeave={false}
  >
    <Row>
      <Col lg="6">
        <Card className="main-card mb-3">
          <CardBody>
            <CardTitle>Disease</CardTitle>
            <TwitterIndex
              indexTypes={{
                disease: ["health", "death", "bio", "body"],
              }}
              timelineLabels={[
                {
                  date: "2020-03-11",
                  label: "Max 500 pers",
                  fontSize: 24,
                },
              ]}
            />
          </CardBody>
        </Card>
      </Col>
      <Col lg="6">
        <Card className="main-card mb-3">
          <CardBody>
            <CardTitle>Emotion</CardTitle>
            <TwitterIndex
              indexTypes={{
                emotion: [
                  "feel",
                  "negemo",
                  "affect",
                  "anger",
                  "swear",
                  "anxiety",
                  "sad",
                  "posemo",
                ],
              }}
              timelineLabels={[
                {
                  date: "2020-03-11",
                  label: "Max 500 pers",
                  fontSize: 24,
                },
              ]}
            />
          </CardBody>
        </Card>
      </Col>
      <Col lg="6">
        <Card className="main-card mb-3">
          <CardBody>
            <CardTitle>Relation</CardTitle>
            <TwitterIndex
              indexTypes={{
                relation: ["friend", "family", "social"],
              }}
              timelineLabels={[
                {
                  date: "2020-03-11",
                  label: "Max 500 pers",
                  fontSize: 24,
                },
              ]}
            />
          </CardBody>
        </Card>
      </Col>
      <Col lg="6">
        <Card className="main-card mb-3">
          <CardBody>
            <CardTitle>Economy</CardTitle>
            <TwitterIndex
              indexTypes={{
                economy: ["money", "work"],
              }}
              timelineLabels={[
                {
                  date: "2020-03-11",
                  label: "Max 500 pers",
                  fontSize: 24,
                },
              ]}
            />
          </CardBody>
        </Card>
      </Col>
      <Col lg="6">
        <Card className="main-card mb-3">
          <CardBody>
            <CardTitle>Political</CardTitle>
            <TwitterIndex
              indexTypes={{
                political: [
                  "power",
                  "cause",
                  "certain",
                  "insight",
                  "compare",
                  "risk",
                  "interrog",
                  "focusfuture",
                  "relig",
                  "tentat",
                  "quant",
                ],
              }}
              timelineLabels={[
                {
                  date: "2020-03-11",
                  label: "Max 500 pers",
                  fontSize: 24,
                },
              ]}
            />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </ReactCSSTransitionGroup>
);
