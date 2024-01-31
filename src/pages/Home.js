import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import styles from './pages.module.css';

export default function Home() {

    return (
        <>
            <Container>
                <Row>
                    <Col>
                    <h1>
                        Golden State Jewelry & Loan
                    </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p>
                        Your Trusted Source for Esquisite Jewelry 
                        and Hassle-Free Loans
                    </p>   
                    </Col>
                </Row>
            </Container>
        </>
    );
}