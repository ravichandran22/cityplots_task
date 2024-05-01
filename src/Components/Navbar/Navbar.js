import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <>
        <section>
            <div className="nav">
                <div className="container">
                    <div className="row">
                        <div className="nav-inner">
                            <div className="logo">
                                <a href="#">
                                    <img src={require('../../Images/holidaysfarm-logo.png')} alt="" />
                                </a>
                            </div>
                            <div className="menu">
                                <ul>
                                    <li>
                                        <span className="fa fa-times" aria-hidden="true"></span>
                                    </li>
                                    <li>
                                        <a href="https://holidaysfarm.in/">Home</a>
                                    </li>
                                    <li>
                                        <a className="#about" href="about-us.html">About</a>
                                    </li>
                                    <li>
                                        <a href="blog.html">Blog</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
                                    <li className="sub">
                                        <a href="#">Gallery</a>
                                        <div className="sub-menu">
                                            <ul>
                                                <li>
                                                    <a className="sub-btn3" href="photos.html">Photos</a>
                                                </li>
                                                <li>
                                                    <a className="sub-btn3" href="videos.html">Videos</a>
                                                </li>
                                            </ul>
                                            <i className="fa fa-times sub-menu-close" aria-hidden="true"></i>
                                        </div>
                                    </li>
                                    <li className="sub">
                                        <a href="#">Farming</a>
                                        <div className="sub-menu">
                                            <ul>
                                                <li>
                                                    <a className="sub-btn3" href="farm-land-for-sale.html">Farm Land</a>
                                                </li>
                                                <li>
                                                    <a className="sub-btn3" href="agriculture-farm-land-for-sale.html">Agriculture Farming</a>
                                                </li>
                                                <li>
                                                    <a className="sub-btn3" href="eco-farm-land-for-sale.html">Eco Farming</a>
                                                </li>
                                                <li>
                                                    <a className="sub-btn3" href="organic-farm-land-for-sale.html">Organic Farming</a>
                                                </li>
                                                <li>
                                                    <a className="sub-btn3" href="mango-farm-land-for-sale.html">Mango Farming</a>
                                                </li>
                                                <li>
                                                    <a className="sub-btn3" href="farmhouse-for-sale.html">Farm House</a>
                                                </li>
                                            </ul>
                                            <i className="fa fa-times sub-menu-close" aria-hidden="true"></i>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="side-bar-right">
                                {/* <i className="fa fa-bars sidebat-act" aria-hidden="true"></i> */}
                                <div className='i'><FontAwesomeIcon icon={faBars}/></div>
                                <div className="theme-btn">
                                    <a href="#" data-toggle="modal" data-target="#myModal">Book Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="menu-bar">
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
);
}

export default Navbar;
