import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faAddressCard, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Home.css';
import WhyChooseUs from "./WhyChooseUs";
import Gallery from "./Gallery";
import AboutFarm from "./AboutFarm";
import CallToAction from "./CallToAction";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import HomeBanner from "./HomeBanner";
import Faq from "./Faq";
// import Slider from "react-slick";

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <CallToAction />
            <AboutUs />
            {/* <Slider /> */}
            <Banner />
            <AboutFarm />
            <div class="text-loop flot position-relative">
                <div class="marquee">
                    <div class="marquee-content">
                        <span>High Value High Returns</span>
                        <span>High Value High Returns</span>
                    </div>
                </div>
            </div>
            {/* Marquee end */}
            <Gallery />
            {/* Why Choose Us start */}
            <WhyChooseUs />
            {/* Contact Us start */}
            <div className="contact-us flot position-relative head-left" id="contact">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 order-1 order-lg-1 contact-img">
                        <div className="heading1 position-relative">
                            <div className="contact-info-lhs">
                                <div className="heading">
                                    <span>Contact Us</span>
                                </div>
                                <p>Looking for a thriving mango farmland for sale at Tiruttani? Here is your perfect opportunity. Contact us today to know more information.</p>
                                <ul style={{paddingLeft: 0}}>
                                    <li>
                                        <div className="i"><FontAwesomeIcon icon={faEnvelope} /></div>
                                        <span style={{marginLeft: 10}}>Holidaymangofarm@Gmail.Com</span>
                                    </li>
                                    <li>
                                        <div className="i"><FontAwesomeIcon icon={faPhone} className="contact-icon"/></div>
                                        <span style={{marginLeft: 10}}>+91 7092653111</span>
                                    </li>
                                    <li>
                                        <div className="i"><FontAwesomeIcon icon={faLocationDot} className="contact-icon"/></div>
                                        <span style={{marginLeft: 10}}>Chennai, Tamil Nadu</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 order-1 order-lg-2">
                        <div className="book-now book-now1  position-relative">
                            <i className="sub-heading">Let’s Meet</i>
                            <h2 className="text-center">Get in touch</h2>
                            <form className="contact__form" name="contact-form-bottom">
                                <ul>
                                    <li className="full">
                                        <FontAwesomeIcon icon={faAddressCard} />
                                        <input type="text" name="Name" placeholder="Name *" className="form-control" required />
                                    </li>
                                    <li className="full">
                                        <FontAwesomeIcon icon={faMapMarker} />
                                        <input type="text" name="City" placeholder="Enter your city *" className="form-control" required />
                                    </li>
                                    <li className="full">
                                        <FontAwesomeIcon icon={faPhone} />
                                        <input type="number" name="Phone" placeholder="Phone *" className="form-control" required />
                                    </li>
                                    <li className="full">
                                        <input className="button-type" type="submit" value="Submit" />
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grass">
                <span className="g1"></span>
                <span className="g2"></span>
            </div>
        </div>
            {/* Contact Us end */}
            <Faq />
            {/* Address start */}
            <div className="address flot p-t70px position-relative address-tree">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="address-inner flot">
                            <ul>
                                <li className="d-flex align-items-center justify-content-center flex-column">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faLocationDot} />
                                    </div>
                                    <p>Chennai, Tamil Nadu</p>
                                </li>
                                <li className="d-flex align-items-center justify-content-center flex-column">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <p>holidaymangofarm@gmail.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Address end */}
        </div>
    );
}

export default Home;
