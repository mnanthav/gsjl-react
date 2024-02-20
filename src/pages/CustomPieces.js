import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import styles from './pages.module.css';
import customImg from '../images/customImage.jpeg';

export default function CustomPieces() {

    return (
        <section
            className={styles.customBackImg}
            id="custom-pieces"
        >
            <Container>
                <Row
                    className={styles.headerWhite}
                >
                    <Col>
                        <h2>
                            Custom Jewelry
                        </h2>
                    </Col>
                </Row>
                <Row
                    className={styles.textWhite}
                >
                    <Col
                        xs={12}
                        md={6}
                    >
                        <h3>
                            Crafting Your Dream Into Reality
                        </h3>
                        <p>
                            Do you have a vision or even a picture of something amazing 
                            that you would like to create? Together... we can make it a 
                            reality and have fun along the way! With our talented 
                            master jewelry artisans we can create something beautiful 
                            that captures your essence. 
                        </p>   
                    </Col>
                    <Col
                        xs={12}
                        md={6}
                    >
                        <img 
                            src={customImg}
                            alt="Custom Jewelry"
                            className="img-fluid"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
