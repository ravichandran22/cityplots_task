import React from 'react';
import faq from '../../src/Images/faq.webp';
import { Accordion } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Faq = () => {
    return (
        <div>
            <div className="faqs" id="Faq">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 order-2 order-lg-1 wow fadeInLeft" data-wow-duration="0.3s">
                            <div className="faq-img d-flex align-items-center">
                                <img src={faq} alt="Mango Farm land" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 order-1 order-lg-2 wow fadeInRight" data-wow-duration="0.6">
                            <div className="heading position-relative">
                                <span>FAQ</span>
                                <h2>Frequently Asked Question</h2>
                            </div>
                            <div className="faq-rhs">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>How does M/S Holiday Mango Farms select its farmland projects?</Accordion.Header>
                                        <Accordion.Body>At M/S Holiday Mango Farms, we take a meticulous approach in choosing our projects. Our selection process involves thorough scrutiny to ensure that the farmlands are not only fertile but also tailored to be investor-friendly. We prioritize locations with ideal soil conditions, climate, and accessibility to create a successful investment environment.</Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>What sets M/S Holiday Mango Farms apart in terms of client satisfaction?</Accordion.Header>
                                        <Accordion.Body>Each client at M/S Holiday Mango Farms is considered a partner in our success. Our tailored approach ensures that every investor's expectations are not only met but exceeded. We value transparent communication, personalized service, and a commitment to quality, fostering a positive and satisfactory experience for all our clients.</Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>How has M/S Holiday Mango Farms achieved success in its agricultural ventures?</Accordion.Header>
                                        <Accordion.Body>We take pride in turning agricultural ventures into financial triumphs. In just two years, we have successfully completed over 25 ROI projects. Our success is attributed to a combination of agricultural expertise, transparent business practices, and a commitment to delivering consistent and proven returns for our investors.</Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;
