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
                    {/* <button aria-controls="agency-navbar" type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#agency-navbar"
                        aria-controls="agency-navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <img src="./toggler-icon.svg" alt="" />
                    </button> */}
                    <Navbar.Toggle aria-controls="agency-navbar" />
                    <Navbar.Collapse id="agency-navbar">
                        <Nav className="ml-auto text-center d-flex align-items-center">
                            <Nav.Item className="mr-4 text-dark">
                                <Nav.Link href="/" className="font-bold" >Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mr-4 text-dark">
                                <Nav.Link href="/">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mr-4 text-dark">
                                <Nav.Link href="/">Service</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mr-4 text-dark">
                                <Nav.Link href="/">Pricing</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mr-4 text-dark">
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