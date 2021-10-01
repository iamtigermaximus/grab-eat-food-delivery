import React from 'react'
import {FaFacebook,FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="footer text-light">
            <div className="footer-links pt-5">
                <div className="social-media-links">
                    <div className="container">
                        <div className="about-links ">
                            <div className="row text-center pb-3 ">
                                <div className="col-4"> 
                                    <div className="footer-column1">
                                        <div className="column-title">
                                            <h4 className="title">Grab Eat Links</h4>
                                        </div>
                                        <div className="column-links">
                                            <div className="column-item">Link 1 Lorem Ipsum</div>
                                            <div className="column-item">Link 2 Lorem Ipsum</div>
                                            <div className="column-item">Link 3 Lorem Ipsum</div>
                                            <div className="column-item">Link 4 Lorem Ipsum</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4"> 
                                    <div className="footer-column2">
                                        <div className="column-title">
                                            <h4 className="title">About Grab Eat</h4>
                                        </div>
                                        <div className="column-links">
                                            <div className="column-item">Link 1 Lorem Ipsum</div>
                                            <div className="column-item">Link 2 Lorem Ipsum</div>
                                            <div className="column-item">Link 3 Lorem Ipsum</div>
                                            <div className="column-item">Link 4 Lorem Ipsum</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4"> 
                                    <div className="footer-column3">
                                        <div className="column-title">
                                            <h4 className="title">Support</h4>
                                        </div>
                                        <div className="column-links">
                                            <div className="column-item">Link 1 Lorem Ipsum</div>
                                            <div className="column-item">Link 2 Lorem Ipsum</div>
                                            <div className="column-item">Link 3 Lorem Ipsum</div>
                                            <div className="column-item">Link 4 Lorem Ipsum</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col">
                                <div className="social-media-icons pb-3">
                                    <div className="social-media-icon fs-4 text-light"><FaFacebook/></div>
                                    <div className="social-media-icon fs-4 text-light ps-5"><FaInstagram/></div>
                                    <div className="social-media-icon fs-4 text-light ps-5"><FaTwitter/></div>
                                </div>
                            </div>
                        </div>
                        <div className="copyright">
                            <div className="row">
                                 <h6 className="copyright-texts text-light text-center">&copy; <em id="date"></em>Grab Eat 2021</h6>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
