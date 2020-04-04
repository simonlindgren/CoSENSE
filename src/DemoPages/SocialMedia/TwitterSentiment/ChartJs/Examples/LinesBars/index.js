import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LineExample from '../line';
import LineExample2 from '../line2';
import BarExample from '../bar';
import HorizontalBarExample from '../horizontalBar';
import MixExample from '../mix';
import TwitterIndex from '../TwitterSentiment/twitterIndex'

import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

export default class ChartJsLinesBars extends React.Component {
    render() {
        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <Row>
                        <Col lg="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Twitter index</CardTitle>
                                    <TwitterIndex indexTypes={
                                        {
                                            disease: ["diseaseIndex"],
                                            emotion: ["emotionIndex"],
                                            relation: ["relationIndex"],
                                            economy: ["economyIndex"],
                                            political: ["politicalIndex"],
                                        }
                                    }/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Disease</CardTitle>
                                    <TwitterIndex indexTypes={
                                        {
                                            disease: ["health", "death", "bio", "body"],
                                        }
                                    }/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Emotion</CardTitle>
                                    <TwitterIndex indexTypes={
                                        {
                                            emotion: ["feel", "negemo", "affect", "anger", "sweat", "anxiety", "sad", "posemo"],
                                        }
                                    }/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Relation</CardTitle>
                                    <TwitterIndex indexTypes={
                                        {
                                            relation: ["friend", "family", "social"],
                                        }
                                    }/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Relation</CardTitle>
                                    <TwitterIndex indexTypes={
                                        {
                                            economy: ["money", "work"],
                                        }
                                    }/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Political</CardTitle>
                                    <TwitterIndex indexTypes={
                                        {
                                            political: ["power", "cause", "certain", "insight", "compare", "risk", "interogate", "future", "number", "relig", "tentat", "quant"]
                                        }
                                    }/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
