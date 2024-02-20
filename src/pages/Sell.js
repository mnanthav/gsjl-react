import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import styles from './pages.module.css';

export default function Sell() {

    return (
        <section
            className={styles.buyBackImg}
            id="sell"
        >
            <Container>
                <Row
                    className={styles.headerWhite}
                >
                    <Col
                        xs={12}
                    >
                        <h2>
                            What We Buy
                        </h2>
                    </Col>
                </Row>
                <Row
                    className={styles.textWhite}
                >
                    <Col
                        xs={12}
                        md={8}
                        className={styles.buyBullets}
                    >
                        <ul>
                            <li>Gold & Platinum Jewelry</li>
                            <li>Diamonds & Gemstones</li>
                            <li>Engagement Rings</li>
                            <li>High-end Watches</li>
                            <li>Antique & Estate Jewelry</li>
                            <li>Sterling Silver Flatware & Holloware</li>
                            <li>Gold & Silver Coins</li>
                            <li>Scrap Gold & More...</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
