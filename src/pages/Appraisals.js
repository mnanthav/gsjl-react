import React from 'react';
import { Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';  

import styles from './pages.module.css';

export default function Appraisals() {

    return (
        <section
            className={styles.apprBackImg}
            id="appraisals"
        >
            <Container>
                <Row
                    className={styles.headerWhite}
                >
                    <Col>
                        <h2>
                            Appraisals
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
                        <DropdownButton
                            id="appr-dropdown-button"
                            size="lg"
                            drop="down"
                            variant="outline-light"
                            title="What You can expect in Your Appraisal"
                            className={styles.apprDropdownBtn}
                            data-bs-theme="dark"
                        >
                            <Dropdown.ItemText>
                            
                            </Dropdown.ItemText>
                            <Dropdown.ItemText>
                            <b>Appraisal Date:</b> The exact day your items were evaluated, for record-keeping.
                            </Dropdown.ItemText>
                            <Dropdown.ItemText>
                            <b>Precise Measurements:</b> Detailed dimensions of each piece, capturing its unique proportions.
                            </Dropdown.ItemText>
                            <Dropdown.ItemText>
                            <b>Design Insights:</b> An exploration of each item's design, including weight, grade, and the intricacy of its setting.
                            </Dropdown.ItemText>
                            <Dropdown.ItemText>
                            <b>Gemstone Analysis:</b> A thorough examination of any gemstones, accessing cut, clarity, color, and carat weight.
                            </Dropdown.ItemText>
                            <Dropdown.ItemText>
                            <b>Quality Overview:</b> A comprehensive summary of the overall quality and condition, offering a clear picture of your jewelry's value.
                            </Dropdown.ItemText>
                            <Dropdown.ItemText>
                            <b>Expert Opinion:</b> A professional statement from our appraiser, underscoring the credibility of the evaluation.
                            </Dropdown.ItemText>
                            <Dropdown.ItemText>
                            <b>Visual Documentation:</b> High-quality photographs of each piece, providing a visual reference to accompany the appraisal.
                            </Dropdown.ItemText>
                            <Dropdown.ItemText>
                            <b>Valuation:</b> The appraised value of your jewelry, reflecting its true worth. 
                            </Dropdown.ItemText>
                        </DropdownButton>
                    </Col>
                    </Row>
                    <Row className={styles.textWhite}>
                    <Col
                        xs={12}
                        md={6}
                    >
                        <h3>
                            Securing the True Value of Your Treasures
                        </h3>
                        <p>
                            Considering insurance for your cherished jewelry? 
                            Let our expert team assist with a comprehensive written appraisal. 
                            Our accredited Graduate Gemologists are committed to delivering an 
                            intricate and precise evaluation of your precious items, ensuring 
                            your absolute security and peace of mind.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
/*
<div
                            className={styles.apprbullets}
                        >
                            <h3>
                            What You Can Expect in Your Appraisal:
                            </h3>
                            <ul>
                                <li>
                                    <b>Personal Details:</b> Your name and contact information for a personalized touch.
                                </li>
                                <li>
                                    <b>Appraisal Date:</b> The exact day your items were evaluated, for record-keeping.
                                </li>
                                <li>
                                    <b>Precise Measurements:</b> Detailed dimensions of each piece, capturing its unique proportions.
                                </li>
                                <li>
                                    <b>Design Insights:</b> An exploration of each item's design, including weight, grade, and the intricacy of its setting.
                                </li>
                                <li>
                                    <b>Gemstone Analysis:</b> A thorough examination of any gemstones, accessing cut, clarity, color, and carat weight.
                                </li>
                                <li>
                                    <b>Quality Overview:</b> A comprehensive summary of the overall quality and condition, offering a clear picture of your jewelry's value.
                                </li>
                                <li>
                                    <b>Expert Opinion:</b> A professional statement from our appraiser, underscoring the credibility of the evaluation.
                                </li>
                                <li>
                                    <b>Visual Documentation:</b> High-quality photographs of each piece, providing a visual reference to accompany the appraisal.
                                </li>
                                <li>
                                    <b>Valuation:</b> The appraised value of your jewelry, reflecting its true worth. 
                                </li>
                            </ul>
                        </div>
*/