import React from 'react';
import { Row } from 'react-bootstrap';
import { HeroImg } from '../../images';
import Header from '../Header/Header';
import "./SectionHero.css"
const SectionHero = () => {
    return (
        <div className="hero-container">
            <Header />
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-md-6 mb-5 mb-md-0">
                        <h1 className="h1 mb-5 d-none d-md-block">Florence agency</h1>
                        <h1 className="mb-5 d-block d-md-none">Florence agency</h1>
                        <p className="text-secondary mb-4">
                            Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book
                    </p>
                        <a href="#pricing" className="btn btn-custom btn-info">See Pricing</a>
                    </div>
                    <div className="col-md-6">
                        <img src={HeroImg} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionHero;