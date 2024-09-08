import React from "react";
import logo from "../assets/imgs/logo.png";
import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <header style={{ backgroundColor: "#D4F1E3", padding: "10px 0" }}>
            <Container>
                <Navbar expand="lg">
                    {/* Logo */}
                    <Navbar.Brand href="/">
                        <img src={logo} alt="Logo" style={{ width: "60px", height: "60px", borderRadius: "12px" }} />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbar-nav" />

                    <Navbar.Collapse id="navbar-nav" className="justify-content-between">
                        <Nav className="mx-auto" style={{ backgroundColor: "white", borderRadius: "20px", fontWeight: 500, fontSize: "16px", color: "#5E5E5E" }} >
                            <Nav.Link href="/product" style={{ padding: "23px 12px", color: "#5E5E5E", }} >Product</Nav.Link>
                            <NavDropdown title="Services" id="services-dropdown" style={{ padding: "16px 12px" }}>
                                <NavDropdown.Item href="#action1" >Service 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action2">Service 2</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Company" id="company-dropdown" style={{ padding: "16px 12px" }}>
                                <NavDropdown.Item href="#about">About Us</NavDropdown.Item>
                                <NavDropdown.Item href="#careers">Careers</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Resources" id="resources-dropdown" style={{ padding: "16px 12px" }}>
                                <NavDropdown.Item href="#blog">Blog</NavDropdown.Item>
                                <NavDropdown.Item href="#faq">FAQs</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" style={{ padding: "23px 12px", color: "#5E5E5E" }}>Pricing</Nav.Link>
                        </Nav>

                        {/* Right-side buttons */}
                        <div className="d-flex justify-content-center">
                            <Button
                                variant="outline-success"
                                className="mr-2"
                                style={{ borderColor: '#23A377', color: '#23A377', backgroundColor: 'white', borderRadius: "10px", padding: "10px" }}
                            >
                                Request Demo
                            </Button>
                            <Button
                                variant="success"
                                style={{ borderColor: '#C9EADA', color: 'white', backgroundColor: "#23A377", borderRadius: "10px", padding: "10px" }}
                            >
                                Sign Up
                            </Button>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    );
};


export default Header;