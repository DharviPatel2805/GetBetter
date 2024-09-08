import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./../../assets/css/Product/RecoverySection.css"

const RecoverySection = () => {
    return (
        <section className="recovery-section">
            <div className="recovery-container">
                <Row className="align-items-center">
                    <Col md={6}>
                        <div className="recovery-content">
                            <h2 className="recovery-title">
                                Transform Your <span className="recovery-title-highlight">Recovery</span> With <span className="recovery-title-highlight">GetBetter</span>
                            </h2>
                            <p className="recovery-description">
                                Experience the future of physiotherapy with GetBetter, where professionals and advanced technology unite to provide a solution for your recovery and wellness needs.
                            </p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="recovery-features">
                            <div className="feature-circle">
                                <p className="feature-text">Personalized Care Plans</p>
                            </div>
                            <div className="feature-circle">
                                <p className="feature-text">Innovative Telehealth Services</p>
                            </div>
                            <div className="feature-circle">
                                <p className="feature-text">Advanced Health Tracking Tools</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default RecoverySection;

// const RecoverySection = () => {
//     return (
//         <section style={{ backgroundColor: '#F3F3F3', padding: '80px' }}>
//             <div style={{
//                 backgroundColor: "#C9EADA",
//                 padding: "0px",
//                 borderRadius: "0px 0px 100px 0px"
//             }}
//             >
//                 <Row className="align-items-center">
//                     <Col md={6}>
//                         <div style={{ padding: "98px 112px" }} >
//                             <h2 style={{ fontWeight: '500', fontSize: '32px', lineHeight: '40px', textAlign: "left" }}>
//                                 Transform Your <span style={{ color: '#23A377' }}>Recovery</span> With <span style={{ color: '#23A377' }}>GetBetter</span>
//                             </h2>
//                             <p style={{ fontSize: '16px', lineHeight: "24px", fontWeight: "400", color: '#5E5E5E', marginTop: '24px', textAlign: "left" }}>
//                                 Experience the future of physiotherapy with GetBetter, where professionals and advanced technology unite to provide a solution for your recovery and wellness needs.
//                             </p>
//                         </div>
//                     </Col>
//                     <Col md={6}>
//                         <div style={{ padding: "98px 112px", display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: "24px" }}>
//                             <div style={{ textAlign: 'center', alignContent: "space-around",  backgroundColor: "white", borderRadius: '50%', border: '2px solid #23A377', padding: '20px', width: '150px', height: '150px' }}>
//                                 <p style={{ fontSize: '16px', fontWeight: '400', lineHeight: "24px", color: '#23A377' }}>Personalized Care Plans</p>
//                             </div>
//                             <div style={{ textAlign: 'center', alignContent: "space-around", backgroundColor: "white", borderRadius: '50%', border: '2px solid #23A377', padding: '20px', width: '150px', height: '150px' }}>
//                                 <p style={{ fontSize: '16px', fontWeight: '400', lineHeight: "24px", color: '#23A377' }}>Innovative Telehealth Services</p>
//                             </div>
//                             <div style={{ textAlign: 'center', alignContent: "space-around", backgroundColor: "white", borderRadius: '50%', border: '2px solid #23A377', padding: '20px', width: '150px', height: '150px' }}>
//                                 <p style={{ fontSize: '16px', fontWeight: '400', lineHeight: "24px", color: '#23A377' }}>Advanced Health Tracking Tools</p>
//                             </div>
//                         </div>
//                     </Col>

//                 </Row>
//             </div>
//         </section>
//     );
// };

