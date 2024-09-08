import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaApple, FaGooglePlay  } from "react-icons/fa";
import logo from "../assets/imgs/logo.png";

const Footer = () => {
    return (
        <React.Fragment>
            <footer style={{ backgroundColor: "#5E5E5E" }}>

                <div style={{ backgroundColor: "#C9EADA", height: "412px", padding: "100px 80px" }} >
                    <Row className="text-center mb-5 " >
                        <Col md={12}  >
                            <h2 style={{ fontWeight: "500", color: "#222", marginBottom: "15px" }}>
                                Get in Touch with GetBetter!
                            </h2>
                            <div className="d-flex justify-content-center">
                                <p className="" style={{ color: "#222", width: "600px", height: "72px", lineHeight: "24px", fontSize: "16px", fontWeight: "400" }}>
                                    Have questions or need more information? Our team is here to help.
                                    Reach out to learn more about our services or to request a demo of
                                    GetBetter. We’re excited to assist you on your path to better health.
                                </p></div>
                            <button className="btn btn-lg  mt-2" style={{ backgroundColor: "#23A377", color: "white", width: "350px", padding: "2px" }} > Button</button>

                        </Col>
                    </Row></div>

                <div style={{ color: "white" }} >
                    <Row className="text-left " style={{ margin: "24px 50px" }} >
                        <Col md={4}>
                            <div className="mb-3" style={{ width: "340px", height: "156px" }} >
                                <img
                                    src={logo}
                                    alt="Logo"
                                    style={{ width: "60px", height: "60px", marginBottom: "15px", borderRadius: "12px" }}
                                />
                                <p>
                                    GetBetter offers personalized physiotherapy programs designed to
                                    help you recover from injury and improve your overall physical
                                    well-being.
                                </p>
                                {/* Social Icons */}
                                <div className="d-flex pt-3 pb-3" style={{ gap: "16px" }}>

                                    <FaTwitter style={{ borderRadius: "4px", width: "28px", height: "28px" }} />
                                    <FaLinkedinIn style={{ borderRadius: "4px", width: "28px", height: "28px" }} />
                                    <FaInstagram style={{ borderRadius: "4px", width: "28px", height: "28px" }} />
                                    <FaYoutube style={{ borderRadius: "4px", width: "28px", height: "28px" }} />
                                </div>

                                <div className="m-3"  >

                                    <Row>
                                        {/* <p>Download our App from</p> */}
                                        <button className="btn btn-md m-1 " style={{ width: "160px", height: "48px", backgroundColor: "#F9F9F9", borderRadius: "8px", padding: "8px 12px", color: "#23A377" }} >
                                            <FaGooglePlay style={{width: "32px", height: "32px"}} className="" />  Google Play
                                        </button>
                                        <button className="btn btn-md m-1" style={{ width: "160px", height: "48px", backgroundColor: "#F9F9F9", borderRadius: "8px", padding: "8px 12px", color: "#23A377" }} >
                                             <FaApple  style={{width: "32px", height: "32px"}}/> {" "}Apple Store</button>
                                    </Row></div>
                            </div>


                        </Col>

                        <Col lg={8} >
                            <Row className="" style={{ width: "100%", height: "192px" }} >

                                <Col md={3}>
                                    <h6 className="text-uppercase font-weight-bold" style={{ fontSize: "16px" }}>Product</h6>
                                    <ul className="list-unstyled mt-4" style={{ fontSize: "14px" }}>
                                         <li style={{ padding: "4px"}} >Product</li>
                                         <li style={{ padding: "4px"}} >Pricing</li>
                                    </ul>
                                </Col>

                                <Col md={3}>
                                    <h6 className="text-uppercase font-weight-bold" style={{ fontSize: "16px" }}>Services</h6>
                                    <ul className="list-unstyled mt-4" style={{ fontSize: "14px" }}>
                                        <li style={{ padding: "4px"}} >HIP</li>
                                         <li style={{ padding: "4px"}} >RTM</li>
                                         <li style={{ padding: "4px"}} >EHR</li>
                                         <li style={{ padding: "4px"}} >Virtual Care</li>
                                         <li style={{ padding: "4px"}} >AI Assistance</li>
                                    </ul>
                                </Col>

                                <Col md={3}>
                                    <h6 className="text-uppercase font-weight-bold" style={{ fontSize: "16px" }}>Company</h6>
                                    <ul className="list-unstyled mt-4" style={{ fontSize: "14px" }}>
                                         <li style={{ padding: "4px"}} >About Us</li>
                                         <li style={{ padding: "4px"}} >D,E,I</li>
                                         <li style={{ padding: "4px"}} >Career</li>
                                         <li style={{ padding: "4px"}} >Testimonials</li>
                                         <li style={{ padding: "4px"}} >Contact Us</li>
                                    </ul>
                                </Col>

                                <Col md={3}>
                                    <h6 className="text-uppercase font-weight-bold" style={{ fontSize: "16px" }} >Resources</h6>
                                    <ul className="list-unstyled mt-4" style={{ fontSize: "14px" }}>
                                         <li style={{ padding: "4px"}} >Blog</li>
                                         <li style={{ padding: "4px "}} >Privacy Policy</li>
                                         <li style={{ padding: "4px "}} >Terms of Use</li>
                                         <li style={{ padding: "4px"}} >FAQs</li>
                                    </ul>
                                </Col>

                                {/* <Col md={2}>
                                    <h6 className="text-uppercase font-weight-bold">Pricing</h6>
                                    <ul className="list-unstyled mt-4">
                                         <li style={{ padding: "4px"}} >Pricing</li>

                                    </ul>
                                </Col> */}
                            </Row>

                            <div className="d-flex justify-content-end mt-4" style={{height: "96px"}}  >

                            
                            <div className="" style={{padding: "21px 9px"}} >
                            <p className="">Subscribe to Our Newsletter</p>
                                        <input
                                            type="email"
                                            placeholder="Enter Email Address"
                                            className="m-1"
                                            style={{ width: "285px", height: "44px", padding: "14px 16px", borderRadius: "12px", border: "1px" }}
                                        />
                                        <button className="btn m-1" style={{ backgroundColor: "#23A377", borderRadius: "12px", color: "white", width: "111px", height: "44px", padding: "12px 24px" }} > Button</button>

                                </div>
                                </div>

                        </Col>

                    </Row>
<br/>

                   <hr style={{backgroundColor: "white", margin: "0px 56px"}} />


                    {/* Bottom Section */}
                    <Row className="mt-4 pb-3"  >
                        <Col className="text-center">
                            {/* <p>&copy; 2024 GetBetter. All rights reserved.</p> */}
                            <div>
                            &copy; 2024 GetBetter. All rights reserved | {" "}
                                <a href="/" style={{ color: "white", marginRight: "10px" }}>Site Map</a>| {" "}
                                <a href="/" style={{ color: "white", marginRight: "10px" }}>Privacy Policy</a>| {" "}
                                <a href="/" style={{ color: "white", marginRight: "10px" }}>Terms of Use</a>| {" "}
                                <a href="/" style={{ color: "white", marginRight: "10px" }}>HIPAA Notice</a>| {" "}
                                <a href="/" style={{ color: "white" }}>HITRUST</a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </footer></React.Fragment>
    );
};

export default Footer;
