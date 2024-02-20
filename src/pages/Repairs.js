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
                    className={styles.headerBlack}
                >
                    <Col>
                        <h2>
                            Repairs
                        </h2>
                    </Col>
                </Row>
                <Row
                    className={styles.textBlack}
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
                            With over four decades of expertise, our Master Jewelers offer a wide array of services
                            to bring the original allure back to your cherished jewelry. These services range from intricate 
                            stone settins and prong tightening to precise ring sizing and expert polishing, 
                            we handle every detail with care. We also specialize in watch battery replacements, ensuring your 
                            timepieces are as funcitonal as they are beautiful.
                        </p>
                        <p>
                            Should you require assistance with a service not mentioned, please do not hesitate to contact us; 
                            we're here to meet all your jewelry care needs!
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
