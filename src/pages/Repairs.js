import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import styles from './pages.module.css';
import repairsImg from '../images/repairsImage.jpeg';

export default function Repairs() {

    return (
        <section
            className={styles.repairsBackImg}
            id="repairs"
        >
            <Container>
                <Row
                    className="justify-content-center text-center"
                >
                    <Col>
                        <h2>
                            Repairs
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
                        <img 
                            src={repairsImg}
                            alt="Repairs image"
                            className="img-fluid"
                        />
                    </Col>
                    <Col
                        xs={12}
                        md={6}
                    >
                        <h3>
                            Renewing the Beauty of Your Treasured Pieces
                        </h3>
                        <p>
                            Our Master Jewelers have been delicately repairing {'\n'}
                            priceless jewelry pieces for over four decades. We can do {'\n'}
                            anything from setting stones and tightening prongs to ring {'\n'}
                            sizing and polishing. 
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
