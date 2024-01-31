import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//import styles from './pages.module.css';

export default function Repairs() {

    return (
        <>
            <Container>
                <Row>
                    <Col>
                    <h2>
                        Repairs
                    </h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p>
                        image
                    </p>
                    </Col>
                    <Col>
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
        </>
    );
}