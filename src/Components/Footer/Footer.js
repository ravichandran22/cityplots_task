import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import logo from '../../Images/holidaysfarm-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';



function Footer() {
  return (
    <>
      <section className="footer footer-1">
        <div className="container">
          <div className="row" style={{paddingTop: 60}}>
            <div className="col-lg-6 col-md-6 log-det">
              <a href="#">
                <img src={logo} alt="" />
              </a>
              <p>Established just two years ago, M/S Holiday Mango Farms has quickly become a notable player in the agribusiness sector, offering a unique and alluring investment opportunity.  </p>
            </div>
            <div className="col-lg-3 col-md-6 footer-details">
              <h2>useful Links </h2>
              <a href="#">Home</a>
              <a href="#">about</a>
              <a href="#">blog</a>
              <a href="#">contact us</a>
              <a href="#">privacy policy </a>
            </div>
            <div className="col-lg-3 col-md-6 footer-details">
              <h2>quick links</h2>
              <a href="#">Mango Farm Land In Tiruttani</a>
              <a href="#">Farm land for Sale</a>
              <a href="#">benefits-and-returns-of-organic</a>
              <a href="#">10 Pros And Cons Of Organic</a>
            </div>
          </div>
        </div>
      </section>
      <section className="cpy-right-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 cpy">
              <h3>
                <i className="c-arrow">©</i> © 2024 Managed Farms.in - All right reserved
              </h3>
            </div>
            <div className="col-lg-4 col-md-12 cpy">
              <div className="footer-follow">
                <ul>
                  <li className='iconStyle'>
                      <FontAwesomeIcon icon={faFacebookF}/>
                  </li>
                  <li className='iconStyle'>
                    <FontAwesomeIcon icon={faTwitter} />
                  </li>
                  <li className='iconStyle'>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </li>
                  <li className='iconStyle'>
                    <FontAwesomeIcon icon={faInstagram} />
                  </li>
                  <li className='iconStyle'>
                    <FontAwesomeIcon icon={faYoutube} />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 cpy">
              <div className="privacy">
                <p>Privacy policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;

// const iconStyle = {
//     float: 'left',
//     fontSize: '13px',
//     border: '1px solid rgb(255, 255, 255)',
//     width: '30px',
//     height: '30px',
//     borderRadius: '50%',
//     transition: 'all 0.4s ease 0s',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: '#fff',
//     marginRight: '17px'
// }
