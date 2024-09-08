import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCalendarCheck, FaVideo, FaShieldAlt, FaMobileAlt, FaUserAlt, FaDollarSign, FaHeadset } from "react-icons/fa"; // Importing icons from react-icons
import './../../assets/css/Home/FeaturesSection.css';  // Import the CSS file

const FeaturesSection = () => {
    const features = [
        { icon: <FaCalendarCheck />, title: "Scheduling", description: "Easy scheduling appointments with your clients and manage your calendar effectively." },
        { icon: <FaVideo />, title: "Telehealth", description: "Provide secure and convenient virtual consultation with your clients through our integrated Telehealth platform." },
        { icon: <FaShieldAlt />, title: "Insurance", description: "Streamline insurance billing and claims processing with our intuitive Insurance Management tools." },
        { icon: <FaMobileAlt />, title: "Mobile App", description: "Stay connected with your clients and manage your practice-on-the-go with our user-friendly mobile app." },
        { icon: <FaUserAlt />, title: "Client Portal", description: "Provide your clients with a secure and convenient online portal to access their records and communication with you." },
        { icon: <FaDollarSign />, title: "Affordable Billing", description: "Our cost-effective billing solution helps you streamline your practice's financial operation and maximize revenue." },
        { icon: <FaHeadset />, title: "24/7 Support", description: "Our dedicated support team is around the clock to assist you with any questions or issues." },
    ];

    return (
        <div className="features-section">
            <Container>
                <div className="section-title">Everything in one App</div>
                <Row>
                    {features.map((feature, index) => (
                        <Col md={4} className="mb-4" key={index}>
                            <div className="feature-card">
                                <div className="feature-icon">
                                    {feature.icon}
                                </div>
                                <h4>{feature.title}</h4>
                                <p>{feature.description}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default FeaturesSection;
