import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './NavBar.module.css';
import logo from './images/gsjl-logo.png';

export default function NavBar() {

    return (
        <Navbar
            collapseOnSelect 
            expand="lg"
            className={styles.nav}
        >
            <Navbar.Brand href="#home">
                <img 
                    src={logo}
                    className={styles.navLogo}
                    alt="Golden State Jewelry & Loan logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="resonsive-navbar-nav">
                <Nav className={styles.topnav}>
                    <Nav.Link href="#about-us" className={styles.navlink} >
                        About Us
                    </Nav.Link>
                    <Nav.Link href="#sell" className={styles.navlink} >
                        Sell
                    </Nav.Link>
                    <Nav.Link href="#consignment" className={styles.navlink} >
                        Consignment
                    </Nav.Link>
                    <Nav.Link href="#custom-pieces" className={styles.navlink} >
                        Custom Pieces
                    </Nav.Link>
                    <Nav.Link href="#repairs" className={styles.navlink} >
                        Repairs
                    </Nav.Link>
                    <Nav.Link href="#appraisals" className={styles.navlink} >
                        Appraisals
                    </Nav.Link>
                    <Nav.Link href="#contact-us" className={styles.navlink} >
                        Contact Us
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
/*
<>
            <Navbar
                collapseOnSelect
                expand="lg"
                className={styles.nav}
            >
                <Container className={styles.navbarContainer}>
                    <Navbar.Brand
                        as={Link}
                        activeClass="active" smooth spy
                        to="main"
                        className={styles.navLogo}
                    >
                        <img 
                            alt="GSJL Logo"
                            src={logo}
                            width="100%"
                            height="auto"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle 
                        aria-controls="responsive-navbar-nav"
                    />
                    <Navbar.Collapse
                        id="responsive-navbar-nav"
                    >
                        <Nav
                            className={styles.topnav}
                        >
                            <Nav.Link
                                as={Link}
                                activeClass="active" smooth spy
                                to="contact-us"
                                className={styles.navLink}
                            >
                                Contact Us
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                activeClass="active" smooth spy
                                to="repairs"
                                className={styles.navLink}
                            >
                                Repairs
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                activeClass="active" smooth spy
                                to="custom-pieces"
                                className={styles.navLink}
                            >
                                Custom Pieces
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                activeClass="active" smooth spy
                                to="consignment"
                                className={styles.navLink}
                            >
                                Consignment
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                activeClass="active" smooth spy
                                to="sell"
                                className={styles.navLink}
                            >
                                Sell 
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                activeClass="active" smooth spy
                                to="about-us"
                                className={styles.navLink}
                            >
                                About Us
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
*/