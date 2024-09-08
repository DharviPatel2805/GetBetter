import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import productImage from '../../assets/imgs/product1.jpeg'; 
import "./../../assets/css/Product/ProductSection1.css";


const ProductSection1 = () => {
    return (
        <section className="product-section">
            <Container>
                <Row className="justify-content-center text-center mb-2 mt-2">
                    <Col md={8} style={{ maxWidth: "500px" }}>
                        <h2 className="product-heading">
                            Transform Your Recovery
                            <br /> With GetBetter
                        </h2>
                        <p className="product-description">
                            Discover our innovative platform designed to support your <br /> health journey.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <div className="text-center">
                            <img
                                src={productImage}
                                alt="Transform Your Recovery"
                                className="product-image"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ProductSection1;
