import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { BrandLogo } from '../../images';
import "./Header.scss"


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="" className="" >
                <Container className="d-flex align-items-center">
                    <Navbar.Brand className="mr-auto" href="/">
                        <img src={BrandLogo} alt="" className="brand-logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="agency-navbar" />
                    <Navbar.Collapse id="agency-navbar">
                        <Nav className="ml-auto text-center">
                            <Nav.Item className="mr-4">
                                <Nav.Link href="/">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mr-4">
                                <Nav.Link href="/">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mr-4">
                                <Nav.Link href="/">Service</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mr-4">
                                <Nav.Link href="/">Pricing</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mr-4">
                                <Nav.Link href="/">Our Team</Nav.Link>
                            </Nav.Item>
                            <button className="btn btn-info btn-custom">
                                Contact Us
                            </button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;