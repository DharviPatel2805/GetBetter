import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image from "../../assets/imgs/coreFeatures.jpeg"
import "./../../assets/css/Product/CoreFeatures.css"

const CoreFeatures = () => {
    return (
        <section className="core-features-section">
            <Container>
                <Row className="text-center">
                    <Col>
                        <h2 className="core-features-title">Our Core Features</h2>
                    </Col>
                </Row>
                <div className="core-features-container">
                    <Row className="core-features-row">
                        {['Personalized Care Plans', 'Telehealth Services', 'Appointment Scheduling', 'Health Tracking Tools', 'Educational Resources', 'Secure Messaging', 'Payment Processing', 'Data Analytics and Reporting'].map((feature, index) => (
                            <Col xs={6} md={3} className="d-flex justify-content-center mb-3" key={index}>
                                <div className={`feature-box ${feature === 'Educational Resources' ? 'feature-box-highlight' : ''}`}>
                                    <p className="feature-text">{feature}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
                <Row className="mt-5">
                    <Col md={6} className="core-features-description-section">
                        <h3 className="core-features-heading">Educational Resources</h3>
                        <p className="core-features-description">
                            Explore articles, videos, and other educational content on health topics.
                        </p>
                    </Col>
                    <Col md={6} className="d-flex justify-content-left">
                        <img src={image} alt="Educational Resources Illustration" className="core-features-image" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CoreFeatures;

// const CoreFeatures = () => {
//     return (
//         <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}>
//             <Container>
//                 <Row className="text-center">
//                     <Col>
//                         <h2 style={{ fontWeight: '500', fontSize: '32px', lineHeight: '40px', marginBottom: '40px' }}>Our Core Features</h2>
//                     </Col>
//                 </Row>
//                 <div className='d-flex justify-content-center' >
//                 <Row className="" style={{width: "700px"}} >
//                     <Col xs={6} md={3} className="d-flex justify-content-center mb-3">
//                         <div style={{ padding: '20px', backgroundColor: '#FFFFFF', border: '1px solid #E2E2E5',  width: '150px', height: "100px" }}>
//                             <p style={{ fontSize: "14px", fontWeight: '400', color: '#000000' }}>Personalized Care Plans</p>
//                         </div>
//                     </Col>
//                     <Col xs={6} md={3} className="d-flex justify-content-center mb-3">
//                         <div style={{ padding: '20px', backgroundColor: '#FFFFFF', border: '1px solid #E2E2E5',  width: '150px', height: "100px"}}>
//                             <p style={{ fontSize: "14px", fontWeight: '400', color: '#000000' }}>Telehealth Services</p>
//                         </div>
//                     </Col>
//                     <Col xs={6} md={3} className="d-flex justify-content-center mb-3">
//                         <div style={{ padding: '20px', backgroundColor: '#FFFFFF', border: '1px solid #E2E2E5',  width: '150px', height: "100px" }}>
//                             <p style={{ fontSize: "14px", fontWeight: '400', color: '#000000' }}>Appointment Scheduling</p>
//                         </div>
//                     </Col>
//                     <Col xs={6} md={3} className="d-flex justify-content-center mb-3">
//                         <div style={{ padding: '20px', backgroundColor: '#FFFFFF', border: '1px solid #E2E2E5',  width: '150px', height: "100px" }}>
//                             <p style={{ fontSize: "14px", fontWeight: '400', color: '#000000' }}>Health Tracking Tools</p>
//                         </div>
//                     </Col>
//                     <Col xs={6} md={3} className="d-flex justify-content-center mb-3">
//                         <div style={{ padding: '20px', backgroundColor: '#D1E8DA', border: '1px solid #E2E2E5',  width: '150px', height: "100px" }}>
//                             <p style={{ fontSize: "14px", fontWeight: '400', color: '#000000' }}>Educational Resources</p>
//                         </div>
//                     </Col>
//                     <Col xs={6} md={3} className="d-flex justify-content-center mb-3">
//                         <div style={{ padding: '20px', backgroundColor: '#FFFFFF', border: '1px solid #E2E2E5',  width: '150px', height: "100px" }}>
//                             <p style={{ fontSize: "14px", fontWeight: '400', color: '#000000' }}>Secure Messaging</p>
//                         </div>
//                     </Col>
//                     <Col xs={6} md={3} className="d-flex justify-content-center mb-3">
//                         <div style={{ padding: '20px', backgroundColor: '#FFFFFF', border: '1px solid #E2E2E5',  width: '150px', height: "100px" }}>
//                             <p style={{ fontSize: "14px", fontWeight: '400', color: '#000000' }}>Payment Processing</p>
//                         </div>
//                     </Col>
//                     <Col xs={6} md={3} className="d-flex justify-content-center mb-3">
//                         <div style={{ padding: '20px', backgroundColor: '#FFFFFF', border: '1px solid #E2E2E5',  width: '150px', height: "100px" }}>
//                             <p style={{ fontSize: "14px", fontWeight: '400', color: '#000000' }}>Data Analytics and Reporting</p>
//                         </div>
//                     </Col>
//                 </Row>
//                 </div>
//                 <Row className="mt-5">
//                     <Col md={6} style={{alignContent: "center", textAlign: "left", padding:  "0px 84px"}} >
//                         <h3 style={{ fontWeight: '500', fontSize: '28px', lineHeight: '30px' }}>Educational Resources</h3>
//                         <p style={{ fontSize: '24px', color: '#5E5E5E' }}>
//                             Explore articles, videos, and other educational content on health topics.
//                         </p>
//                     </Col>
//                     <Col md={6} className='d-flex justify-content-left' >
//                         <img src={image} alt="Educational Resources Illustration" style={{ width: '400px', height: "400px" }} />
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     );
// };

//////////////////////////////////////////////////////////////////////////
