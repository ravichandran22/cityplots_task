import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="bg-video">
                <video className="video-banner wow fadeInRight ani2 animated" data-wow-duration="1.1s" muted autoPlay loop playsInline>
                    <source src="https://agraria.qodeinteractive.com/wp-content/uploads/2023/05/agraria-main-home-video.mp4" type="video/webm" />
                </video>
            </div>

            <div className="counting-items flot">
                <div className="container">
                    <div className="row marginStyle">
                        <div className="col-lg-4 col-md-12 wow fadeInUp animated">
                            <div className="number">
                                <span style={{ color: '#00DDC7' }}>2 + </span>
                                <h3>2 Years Successful Ventures</h3>
                                <span className="line"></span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 wow fadeInUp animated">
                            <div className="number">
                                <span style={{ color: '#FF9F00' }}>25 + </span>
                                <h3>25+ Satisfied Partners</h3>
                                <span className="line"></span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 wow fadeInUp animated">
                            <div className="number">
                                <span style={{ color: '#FF2222' }}>15+</span>
                                <h3>15+ ROI Success Stories</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
