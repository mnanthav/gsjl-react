import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import abtImg from '../images/aboutSlideImage.jpeg';
import styles from './pages.module.css';

export default function AboutUs() {

    return (
        <>
            <Container>
                <Row 
                    className={styles.row}
                >
                    <Col>
                        <h2>
                            About Us
                        </h2>
                    </Col>
                </Row>
                <Row 
                    className={styles.row}
                >
                    <Col 
                        xs={12} 
                        md={8} 
                        className={styles.textLeft}
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
                        xs={6} 
                        md={4} 
                        className={styles.imgRight}
                    >
                        <img 
                            alt="Ring and Magnifier"
                            src={abtImg}
                            className={styles.aboutImg}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}