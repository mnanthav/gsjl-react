import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import styles from './pages.module.css';
import consignImg from '../images/consignImage.jpeg';

export default function Consignment() {

    return (
        <section
            className={styles.consignBackImg}
            id="consignment"
        >
            <Container>
                <Row
                    className={styles.headerBlack}
                >
                    <Col>
                        <h2>
                            Consignment
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
                            src={consignImg}
                            alt="Consignment image"
                            className="img-fluid"
                        />
                    </Col>
                    <Col
                        xs={12}
                        md={6}
                    >
                        <h3>
                            Elevate Your Returns, Minimize Your Effort
                        </h3>
                        <p>
                            Consignment is a great avenue to take if you have some extra {'\n'} 
                            time and you want to maximize your yield. Simply leave the {'\n'} 
                            item with us for a short period of time. This will allow us {'\n'}
                            time to find that perfect retail customer and ultimately net {'\n'}
                            you a larger profit!
                        </p>
                    </Col>

                </Row>
            </Container>

        </section>
    );
}
