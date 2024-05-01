import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
    return (
        <section className="action float position-relative" style={{overflow: 'hidden'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 position-absolute d-flex align-items-center">
                        <img src={require('../Images/c-action.webp')} alt="" />
                        <a className="" href="#">
                            <i className="fa fa-play" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <p className="float">
                            <span className="float">Green Dreams, Golden Harvests: Acquire Your Mango Farm!</span>
                        </p>
                        <div className="theme-btn">
                            <a href="#" data-toggle="modal" data-target="#myModal">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;
