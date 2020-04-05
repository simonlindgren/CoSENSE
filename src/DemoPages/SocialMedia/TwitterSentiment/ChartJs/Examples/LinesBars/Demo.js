import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import TwitterIndex from "../TwitterSentiment/twitterIndex";

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

export const Demo = () => (
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
            <CardTitle>Work</CardTitle>
            <TwitterIndex
                indexTypes={{
                  economy: ["work"],
                }}
            />
          </CardBody>
        </Card>
      </Col>
      <Col lg="6">
        <Card className="main-card mb-3">
          <CardBody>
            <CardTitle>Anxiety</CardTitle>
            <TwitterIndex
                indexTypes={{
                  emotion: [
                    "anxiety",
                  ],
                }}
            />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </ReactCSSTransitionGroup>
);
