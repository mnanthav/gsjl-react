import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import styles from './pages.module.css';

export default function Home() {

    return (
        <section className={styles.mainSlide} id="main-slide">
            <Container fluid>
                <Row className="justify-content-center align-items-center">
                    <Col xs={12} md={8}>
                        <h1>
                            Golden State Jewelry & Loan
                        </h1>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} md={10}>
                        <p>
                            Your Trusted Source for Esquisite Jewelry and Hassle-Free Loans
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}