import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//import styles from './pages.module.css';

export default function CustomPieces() {

    return (
        <>
            <Container>
                <Row>
                    <Col>
                    <h2>
                        Custom Jewelry
                    </h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h3>Crafting Your Dream Into Reality</h3>
                    <p>
                        Do you have a vision or even a picture of something amazing 
                        that you would like to create? Together... we can make it a 
                        reality and have fun along the way! With our talented 
                        master jewelry artisans we can create something beautiful 
                        that captures your essence. 
                    </p>    
                    </Col>
                    <Col>
                    <p>insert image</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}