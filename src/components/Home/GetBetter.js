// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import image from "../assets/imgs/image_1.jpg";

// const GetBetter = () => {
//     return (
//         <React.Fragment>
//             <div style={{ paddingTop:"100px", paddingLeft: "80px", paddingRight: "80px", paddingBottom: "100px" }} >
//             <Container >
//                 <div className="text-center h2" style={{
//                     fontWeight: "500",
//                     fontSize: "32px",
//                     lineHeight: "40px",
//                     marginBottom: "50px"
//                 }}  >
//                     Why Choose GetBetter!
//                 </div>
//                 <Row className="m-4" >
//                     <Col lg={6} className="text-left" >
//                         <div  >
//                             <p style={{
//                                 fontWeight: "500",
//                                 fontSize: "28px",
//                                 lineHeight: "36px",
//                                 color: "black"
//                             }} >
//                                 Our Unique Feature Title
//                             </p>

//                             <p style={{
//                                 fontWeight: "400",
//                                 fontSize: "16px",
//                                 lineHeight: "24px",
//                                 letterSpacing: "0.5pz"
//                             }} >
//                                 Lorem ipsum dolor sit amet consectetur. In eu in lorem quis urna massa amet in. Egestas arcu a mi a ac urna etiam dolor. Nisi ipsum et molestie auctor urna commodo at laoreet. amet consectetur. In eu in lorem quis urna massa amet in. Egestas arcu a mi a ac urna etiam
//                             </p>

//                             <button className="btn btn-lg  " style={{ backgroundColor: "#23A377", color: "white", width: "350px", padding: "2px" }} >Lern More</button>

//                         </div>
//                     </Col>
//                     <Col lg={6} >
//                         <img src={image} alt="getbetter" width="500px" height="300px" style={{borderRadius: "24px",border: "1px"}} /> </Col>
//                 </Row>
//             </Container></div>  
//         </React.Fragment>
//     )
// }

// export default GetBetter;


import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import image1 from "./../../assets/imgs/product2.jpeg";
import image2 from "./../../assets/imgs/product1.jpeg"; 
import image3 from "./../../assets/imgs/image_1.jpg";
import "./../../assets/css/Home/GetBetter.css";

const GetBetter = () => {
    return (
        <React.Fragment>
            <div className="getbetter-container">
                <Container>
                    <div className="getbetter-heading">
                        Why Choose GetBetter!
                    </div>
                    <Carousel controls={false} indicators={false} interval={3000} pause={false}>
                        {/* Carousel Item 1 */}
                        <Carousel.Item>
                            <Row className="getbetter-row">
                                <Col lg={6} className="getbetter-left-col">
                                    <div>
                                        <p className="title">
                                            Our Unique Feature Title 1
                                        </p>
                                        <p className="description">
                                            Lorem ipsum dolor sit amet consectetur. In eu in lorem quis urna massa amet in. Egestas arcu a mi a ac urna etiam dolor. Nisi ipsum et molestie auctor urna commodo at laoreet.
                                        </p>
                                        <button className="btn btn-lg learn-more-btn">
                                            Learn More
                                        </button>
                                    </div>
                                </Col>
                                <Col lg={6} className="getbetter-right-col">
                                    <img src={image1} alt="getbetter" />
                                </Col>
                            </Row>
                        </Carousel.Item>

                        {/* Carousel Item 2 */}
                        <Carousel.Item>
                            <Row className="getbetter-row">
                                <Col lg={6} className="getbetter-left-col">
                                    <div>
                                        <p className="title">
                                            Our Unique Feature Title 2
                                        </p>
                                        <p className="description">
                                            Lorem ipsum dolor sit amet consectetur. Egestas arcu a mi a ac urna etiam dolor. Nisi ipsum et molestie auctor urna commodo at laoreet.
                                        </p>
                                        <button className="btn btn-lg learn-more-btn">
                                            Learn More
                                        </button>
                                    </div>
                                </Col>
                                <Col lg={6} className="getbetter-right-col">
                                    <img src={image2} alt="getbetter" />
                                </Col>
                            </Row>
                        </Carousel.Item>

                        {/* Carousel Item 3 */}
                        <Carousel.Item>
                            <Row className="getbetter-row">
                                <Col lg={6} className="getbetter-left-col">
                                    <div>
                                        <p className="title">
                                            Our Unique Feature Title 3
                                        </p>
                                        <p className="description">
                                            Lorem ipsum dolor sit amet consectetur. In eu in lorem quis urna massa amet in. Nisi ipsum et molestie auctor urna commodo at laoreet.
                                        </p>
                                        <button className="btn btn-lg learn-more-btn">
                                            Learn More
                                        </button>
                                    </div>
                                </Col>
                                <Col lg={6} className="getbetter-right-col">
                                    <img src={image3} alt="getbetter" />
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div>
        </React.Fragment>
    );
};


export default GetBetter;

