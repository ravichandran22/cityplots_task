import React from 'react';
import './Home.css';

const WhyChooseUs = () => {
  return (
    <div className="about-us flot position-relative why-choose-us about-4" id="why-choose-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 abt-img order-2 order-lg-2">
            <div className="row">
              <div className="col-sm-12 vid position-relative">
                <div className="wh-videos w-100 position-relative">
                  <video className="vi1 w-100" id="video1" controls poster="#">
                    <source src="" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 order-1 order-lg-1">
            <div className="about-inner">
              <div className="heading">
                <span>Feel Our Farms Virtually</span>
                <h2>Why Choose Tiruttani Mango Farm?</h2>
                <p>Tiruttani Mango Farm offers an exclusive opportunity to purchase managed mango farmland for sale in Tiruttani. Immerse yourself in the serene ambiance of our charming mango farms, offering a perfect blend of relaxation and adventure.</p>
              </div>
              <div className="box-text position-relative d-flex align-items-center">
                <div style={{ background: '#ffeccd', marginRight: '10px', height: 169, padding: 20 }} className="box1 flot text-center d-flex align-items-center justify-content-center flex-column">
                  <h3 style={{fontSize: 22}}>Complimentary 1-Year Maintenance</h3>
                </div>
                <div style={{ background: '#e6e0fc', marginRight: '10px', height: 169, padding: 20 }} className="box1 box2 flot text-center d-flex align-items-center justify-content-center flex-column">
                  <h3 style={{fontSize: 22}}>Dedicated Manpower for Daily Operations</h3>
                </div>
                <div style={{ background: '#d4f4fc', marginRight: '10px', height: 169, padding: 20 }} className="box1 flot text-center d-flex align-items-center justify-content-center flex-column">
                  <h3 style={{fontSize: 22}}>Private Weekend Retreat</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
