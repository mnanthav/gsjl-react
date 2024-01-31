import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//import styles from './pages.module.css';

export default function Consignment() {

    return (
        <>
            <Container>
                <Row>
                    <Col>
                    <h2>
                        Consignment
                    </h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={4}>
                    <p>image</p>
                    </Col>
                    <Col xs={12} md={8}>
                    <h3>Elevate Your Returns, Minimize Your Effort</h3>
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
        </>
    );
}