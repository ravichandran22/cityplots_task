import React from 'react';
import './HomeBanner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';


const HomeBanner = () => {
    return (
        <section>
            <div className="banner" id="banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="banner-inner text-left">
                                <span className="wow fadeInUp" data-wow-duration="0.2s">Affordable Aroma</span>
                                <h1 className="wow fadeInUp" data-wow-duration="0.5s">Tiruttani Mango Farm Your Investment in Lush Mango Groves</h1>
                                <p className="wow fadeInUp" data-wow-duration="0.9s">Experience the joy of expansive mango orchards, where both flavor and savings flourish at mango farm land for sale in Tiruttani.</p>
                                <div className="theme-btn wow fadeInUp" data-wow-duration="0.7s">
                                    <a href="#" data-toggle="modal" data-target="#myModal">Book Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 banner-form" id="arrow">
                            <div className="book-now position-relative wow fadeInRight animated" data-wow-duration="1s">
                                <i className="sub-heading">Let’s Meet</i>
                                <h2 className="text-center">Get in touch</h2>
                                <form className="contact__form" name="contact-form-top">
                                    <ul>
                                        <li className="full">
                                            <FontAwesomeIcon icon={faAddressCard} />
                                            <input type="text" name="Name" placeholder="Name *" className="form-control" required="" />
                                        </li>
                                        <li className="full">
                                            <FontAwesomeIcon icon={faMapMarker} />
                                            <input type="text" name="City" placeholder="Enter your city *" className="form-control" required="" />
                                        </li>
                                        <li className="full">
                                            <FontAwesomeIcon icon={faPhone} />
                                            <input type="number" name="Phone" placeholder="Phone *" className="form-control" required="" />
                                        </li>
                                        <li className="full">
                                            <input className="button-type" type="submit" value="sign up" />
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                    <span className="round-shapes"></span>
                </div>
            </div>
        </section>
    );
}

export default HomeBanner;
