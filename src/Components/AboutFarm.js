import React from 'react';

const AboutFarm = () => {
    return (
        <div className="about-us img-change head-left pad" style={AboutUs}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-content wow fadeInUp animated animated" data-wow-duration="0.3s">
                            <div className="heading">
                                <span>About Tirutani Mango Farm</span>
                            </div>
                            <div className="abt-benefits">
                                <h3 style={{fontSize: 36, lineHeight: '46px'}}>Discover Your Ideal Mango Farm with Tiruttani Mango Farm</h3>
                                <p>Embark on a journey of agricultural passion with Tiruttani Mango Farm. Uncover an unparalleled opportunity to own your very own mango farm land for sale in Tiruttani. Our meticulously curated selection caters to diverse preferences, ensuring you find the perfect match.</p>
                                <p>Experience the charm of rustic living without the burden of maintenance. Our dedicated team ensures your Tiruttani mango farm receives impeccable care, allowing you to fully immerse yourself in its enchanting surroundings. Modern amenities and a tranquil environment create a seamless blend of luxury and serenity.</p>
                                <p>Let Tiruttani Mango Farm guide you through acquiring a premium mango farm in Tiruttani. Indulge in the allure of owning a cherished oasis, a rural escape amidst the city's vibrant embrace. Reserve your Tiruttani mango farm today and take a step closer to your mango-scented paradise!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="abt-student-img wow fadeInUp animated animated" data-wow-duration="0.6s">
                            <img className=" student-img" src={require('../Images/tiruttani-mango-farm1.webp')} alt="Mango Farms Tirutani" title="Mango Farms Tirutani" />
                            <img className=" student-img1" src={require('../Images/tiruttani-mango-farm2.webp')} alt="Mango Farms Tirutani" title="Mango Farms Tirutani" />
                            <img className=" student-img2" src={require('../Images/tiruttani-mango-farm3.webp')} alt="Mango Farms Tirutani" title="Mango Farms Tirutani" />
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

export default AboutFarm;

const AboutUs = {
    float: 'left',
    width: '100%',
    padding: '130px 0px 160px',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#F5F5F5'
}