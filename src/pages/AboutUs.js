import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import abtImg from '../images/aboutSlideImage.jpeg';
import styles from './pages.module.css';

export default function AboutUs() {

    return (
        <section
            className={styles.aboutBackImg}
            id="about-us"
        >
            <Container>
                <Row
                    className="justify-content-center text-center"
                >
                    <Col>
                        <h2>
                            About Us
                        </h2>
                    </Col>
                </Row>
                <Row
                    className="align-items-center mt-4"
                >
                    <Col 
                        xs={12}
                        md={6}
                    >
                        <h3>
                            Meet Our Experienced Team of G.I.A. Graduates 
                        </h3>
                        <p>
                            We have over two decades of jewelry, diamond, and gemstone
                            knowledge. With all of our buyers being G.I.A. graduates,
                            we are able to give our clients a better overall experience
                            and value whether you are selling, buying or creating that
                            one of a kind custom piece!
                        </p>
                    </Col>
                    <Col 
                        xs={12}
                        md={6}
                    >
                        <img 
                            src={abtImg}
                            alt="About Us"
                            className="img-fluid"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
