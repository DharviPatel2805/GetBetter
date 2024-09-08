import React from "react";
import image from "./../../assets/imgs/home.png";
import { Container, Row, Col, Button } from 'react-bootstrap';
import './../../assets/css/Home/Slider.css';  // Import the CSS file

const Slider = () => {
    return (
        <React.Fragment>
            <div className="slider-section">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="slider-text">
                            <h2>Join GetBetter for Personalized Physical Therapy</h2>
                            <p>
                                Join GetBetter for personalized physical therapy, innovative telehealth, and top-notch health tracking.
                                Experience expert guidance and compassionate care on your journey to optimal health.
                            </p>
                            <div className="d-flex slider-buttons">
                                <Button
                                    variant="outline-success"
                                    className="m-1 col-6"
                                >
                                    Request Demo
                                </Button>
                                <Button
                                    variant="success"
                                    className="m-1 col-6"
                                >
                                    Get Started
                                </Button>
                            </div>
                        </Col>
                        {/* Right Side - Image */}
                        <Col md={6} className="slider-image d-flex justify-content-center">
                            <img
                                src={image}
                                alt="Physical Therapy"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Slider;
