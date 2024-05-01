import React from 'react';

const Amenities = () => {
    return (
        <div className="amenites-start flot">
            <div className="container">
                <div className="am-inner flot bg4">
                    <h2 className="text-center"><span> SITES OUR AMENITIES</span></h2>
                    <div className="brand-slider-wrapper float pt_120 pb_120">
                        <div className="rc-carousel" data-rc-carousel>
                            <div className="rc-carousel-strip">
                                <div className="rc-carousel-box" data-rc-carousel-box>
                                    <div className="rc-carousel-item" data-rc-carousel-item="1">
                                        <div style={{ backgroundColor: '#FFF8F8' }} className="d-flex align-items-center justify-content-center flex-column">
                                            <img className="shapes2" src="assets/images/shapes/frame.png" alt="" />
                                            <div className="icon1">
                                                <img src={require('../Images/Gated Farming Community-.webp')} alt="" />
                                            </div>
                                            <h4>Gated Community Farms</h4>
                                        </div>
                                    </div>
                                    <div className="rc-carousel-item" data-rc-carousel-item="1">
                                        <div style={{ backgroundColor: '#FFF8F8' }} className="d-flex align-items-center justify-content-center flex-column">
                                            <img className="shapes2" src="assets/images/shapes/frame.png" alt="" />
                                            <div className="icon1">
                                                <img src={require('../Images/Individual Fencing-.webp')} alt="" />
                                            </div>
                                            <h4>Gated Community Farms</h4>
                                        </div>
                                    </div>
                                    <div className="rc-carousel-item" data-rc-carousel-item="1">
                                        <div style={{ backgroundColor: '#FFF8F8' }} className="d-flex align-items-center justify-content-center flex-column">
                                            <img className="shapes2" src="assets/images/shapes/frame.png" alt="" />
                                            <div className="icon1">
                                                <img src={require('../Images/Water Management-.webp')} alt="" />
                                            </div>
                                            <h4>Gated Community Farms</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Amenities;
