import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import styles from './pages.module.css';

export default function ContactUs() {

    return (
        <section
            className={styles.contactBackImg}
            id="contact-us"
        >
            <Container>
                <Row
                    className="justify-content-center text-center"
                >
                    <Col>
                        <h2>
                            Contact Us
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
                    <Col
                        xs={12}
                        md={6}
                    >
                        <div className="contactMap">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.1317573398474!2d-117.23746772431916!3d33.21064187348545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc76905386cdcb%3A0xf03ca842f5f0158f!2s830%20E%20Vista%20Way%20%23110%2C%20Vista%2C%20CA%2092084!5e0!3m2!1sen!2sus!4v1701563148959!5m2!1sen!2sus" 
                                width="400" 
                                height="500" 
                                className="img-fluid"
                                style={{border: "0"}} 
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
/*
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
*/