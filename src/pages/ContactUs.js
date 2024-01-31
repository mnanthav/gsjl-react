import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//import styles from './pages.module.css';

export default function ContactUs() {

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h2>
                            Contact Us
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h3>
                        Connect With Us: Your Questions, Our Answers
                    </h3>
                    <p>
                        Matt Anderson, G.G. {'\n'}
                        Graduated Gemologist, G.I.A. {'\n'}
                        {'('}951{')'} 466-6669 {'\n'}
                        gsjewelrybuyers@gmail.com {'\n'}
                        830 East Vista Way Ste 110 {'\n'}
                        Vista, CA 92084
                    </p>
                    </Col>
                    <Col>
                    <p>Add map here</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}