import React from 'react';
import { BrandLogo } from '../../images';
import "./Footer.scss"
import { TiSocialFacebookCircular, TiSocialTwitterCircular, TiSocialLinkedinCircular, TiSocialDribbble } from "react-icons/ti";

const Footer = () => {
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-4  text-center text-md-left mb-4 mb-md-0">
                        <img src={BrandLogo} alt="" className="brand-logo" />
                        <div className="footer-icons" >
                            <TiSocialFacebookCircular /> <TiSocialTwitterCircular /> <TiSocialLinkedinCircular /> <TiSocialDribbble />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row text-center text-md-left">
                            <div className="col-md-4 mb-4 mb-md-0">
                                <a href="#" className="footer-link">Features</a>
                                <a href="#" className="footer-link">Enterprise</a>
                                <a href="#" className="footer-link">Pricing</a>
                            </div>
                            <div className="col-md-4 mb-4 mb-md-0">
                                <a href="#" className="footer-link">Blog</a>
                                <a href="#" className="footer-link">Help Center</a>
                                <a href="#" className="footer-link">Contact Us</a>
                                <a href="#" className="footer-link">Status</a>
                            </div>
                            <div className="col-md-4 mb-4 mb-md-0">
                                <a href="#" className="footer-link">About Us</a>
                                <a href="#" className="footer-link">Terms & Conditions</a>
                                <a href="#" className="footer-link">Security</a>
                                <a href="#" className="footer-link">Login</a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Footer;