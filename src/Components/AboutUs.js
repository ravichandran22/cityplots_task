import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us img-change head-left pad" style={Aboutus}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-content wow fadeInUp animated animated" data-wow-duration="0.3s">
                            <div className="heading">
                                <span>ABOUT US</span>
                            </div>
                            <div className="abt-benefits">
                                <h3 style={{fontSize: 36, lineHeight: '46px'}}>Cultivating Prosperity: Your Investment in Agricultural Excellence</h3>
                                <p>Established just two years ago, Tiruttani Mango Farm has become a leading provider of mango farm land for sale in Tiruttani. We offer a unique and lucrative investment opportunity, allowing you to sow the seeds of financial growth in the vibrant fields of agriculture. Enter the world of Tiruttani Mango Farm, where our commitment to excellence and agricultural expertise promises a rewarding journey for both our farms and your investments.</p>
                                <ul>
                                    <li>
                                        <i class="fa fa-check-square-o" aria-hidden="true"></i>
                                        <h4>Community Mango Farms</h4>
                                    </li>
                                    <li>
                                        <i class="fa fa-check-square-o" aria-hidden="true"></i>
                                        <h4>Best Return on Investment</h4>
                                    </li>
                                    <li>
                                        <i class="fa fa-check-square-o" aria-hidden="true"></i>
                                        <h4>Instant Farm Assistance</h4>
                                    </li>
                                    <li>
                                        <i class="fa fa-check-square-o" aria-hidden="true"></i>
                                        <h4>Scenic Surrounding</h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="abt-student-img wow fadeInUp animated animated" data-wow-duration="0.6s">
                            <img className=" student-img" src={require('../Images/cultivating- pros-mangofarmland1.webp')} alt="Mango Farms Tirutani" title="Mango Farms Tirutani" />
                            <img className=" student-img1" src={require('../Images/cultivating- pros-mangofarmland2.webp')} alt="Mango Farms Tirutani" title="Mango Farms Tirutani" />
                            <img className=" student-img2" src={require('../Images/cultivating- pros-mangofarmland3.webp')} alt="Mango Farms Tirutani" title="Mango Farms Tirutani" />
                            <span className="back-shape"></span>
                            <span className="back-shape1"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rotate-shapes">
                <span></span>
            </div>
        </div>
    );
}

export default AboutUs;

const Aboutus = {
    float: 'left',
    width: '100%',
    padding: '130px 0px 180px',
    position: 'relative',
    background: 'rgb(245, 245, 245)',
    overflow: 'hidden'
}