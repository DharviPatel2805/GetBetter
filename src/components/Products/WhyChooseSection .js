import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import image from "../../assets/imgs/product2.jpeg"
import "./../../assets/css/Product/WhyChooseSection.css"


const WhyChooseSection = () => {
    return (
        <section className="why-choose-section">
            <Container>
                <h2 className="why-choose-title">Why Choose GetBetter!</h2>
                <Row className="align-items-center">
                    <Col md={6}>
                        <p className="why-choose-description">
                            Lorem ipsum dolor sit amet consectetur. In eu in lorem quis urna massa amet in. Egestas arcu a mi a ac urna etiam dolor.
                            Nisi ipsum et molestie auctor urna commodo at laoreet. amet consectetur. In eu in lorem quis urna massa amet in. Egestas arcu a mi a ac urna etiam.
                        </p>
                        <Row style={{ gap: '20px', justifyContent: "space-around" }}>
                            <Col xs={6} md={5} className="why-choose-feature">
                                <FaCheckCircle className="why-choose-feature-icon" size={24} />
                                <p className="why-choose-feature-text">Comprehensive Care</p>
                            </Col>
                            <Col xs={6} md={5} className="why-choose-feature">
                                <FaCheckCircle className="why-choose-feature-icon" size={24} />
                                <p className="why-choose-feature-text">Expert Guidance</p>
                            </Col>
                            <Col xs={6} md={5} className="why-choose-feature">
                                <FaCheckCircle className="why-choose-feature-icon" size={24} />
                                <p className="why-choose-feature-text">Convenience and Accessibility</p>
                            </Col>
                            <Col xs={6} md={5} className="why-choose-feature">
                                <FaCheckCircle className="why-choose-feature-icon" size={24} />
                                <p className="why-choose-feature-text">Innovative Technology</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <div style={{ textAlign: 'center' }}>
                            <img src={image} alt="Group Therapy" className="why-choose-image" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default WhyChooseSection;

// const WhyChooseSection = () => {
//     return (
//         <section style={{ backgroundColor: '#F9F9F9', padding: '80px 0' }}>
//             <Container>
//             <h2 style={{ fontWeight: '500', fontSize: '32px', lineHeight: '40px', marginBottom: '30px' }}>Why Choose GetBetter!</h2>
//                 <Row className="align-items-center">
//                     <Col md={6}>
                       
//                         <p style={{ fontSize: '16px', fontWeight: '400', color: '#5E5E5E', lineHeight: '24px', marginBottom: '24px' }}>
//                             Lorem ipsum dolor sit amet consectetur. In eu in lorem quis urna massa amet in. Egestas arcu a mi a ac urna etiam dolor.
//                             Nisi ipsum et molestie auctor urna commodo at laoreet. amet consectetur. In eu in lorem quis urna massa amet in. Egestas arcu a mi a ac urna etiam.
//                         </p>
//                         <Row style={{ gap: '20px', justifyContent: "center" }}>
//                             <Col xs={6} md={5} className="d-flex align-items-center" style={{
//                                 backgroundColor: "#F3F3F3",
//                                 borderRadius: "8px",
//                                 padding: "8px"
//                             }} >
//                                 <FaCheckCircle color="#C9EADA" size={24} className="me-2 m-1" style={{width: "48px", height: "48px"}} />
//                                 <p style={{ fontSize: '16px', fontWeight: '400', color: '#000000', marginBottom: '0' }}>Comprehensive Care</p>
//                             </Col>
//                             <Col xs={6} md={5} className="d-flex align-items-center" style={{
//                                 backgroundColor: "#F3F3F3",
//                                 borderRadius: "8px",
//                                 padding: "8px"
//                             }}>
//                                 <FaCheckCircle color="#C9EADA" size={24} className="me-2 m-1" style={{width: "48px", height: "48px"}} />
//                                 <p style={{ fontSize: '16px', fontWeight: '400', color: '#000000', marginBottom: '0' }}>Expert Guidance</p>
//                             </Col>
//                             <Col xs={6} md={5} className="d-flex align-items-center" style={{
//                                 backgroundColor: "#F3F3F3",
//                                 borderRadius: "8px",
//                                 padding: "8px"
//                             }}>
//                                 <FaCheckCircle color="#C9EADA" size={24} className="me-2 m-1" style={{width: "48px", height: "48px"}} />
//                                 <p style={{ fontSize: '16px', fontWeight: '400', color: '#000000', marginBottom: '0' }}>Convenience and Accessibility</p>
//                             </Col>
//                             <Col xs={6} md={5} className="d-flex align-items-center" style={{
//                                 backgroundColor: "#F3F3F3",
//                                 borderRadius: "8px",
//                                 padding: "8px"
//                             }}>
//                                 <FaCheckCircle color="#C9EADA" size={24} className="me-2 m-1" style={{width: "48px", height: "48px"}} />
//                                 <p style={{ fontSize: '16px', fontWeight: '400', color: '#000000', marginBottom: '0' }}>Innovative Technology</p>
//                             </Col>
//                         </Row>
//                     </Col>
//                     <Col md={6}>
//                         <div style={{ textAlign: 'center', margin: "20px" }}>
//                             <img src={image} alt="Group Therapy" style={{ maxWidth: '100%', width: "500px", height: "500px", borderRadius: '10px' }} />
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     );
// };


