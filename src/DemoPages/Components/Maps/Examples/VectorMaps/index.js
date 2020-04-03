import React, { Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Row, Col } from "reactstrap";

// Examples

import VectorMapsBasic from "./Basic";
import VectorMapsMarkers from "./Markers";
import VectorMapsDatasets from "./Datasets";
import VectorMapsAnimated from "./Animated";
import VectorMapsSentiment from "./SentimentMap";

class VectorMapsExample extends React.Component {
  render() {
    return (
      <Fragment>
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
              <VectorMapsSentiment />
            </Col>
          </Row>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

export default VectorMapsExample;
