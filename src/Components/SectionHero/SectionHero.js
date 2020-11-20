import React from 'react';
import { Row } from 'react-bootstrap';
import { HeroImg } from '../../images';
import "./SectionHero.scss"
const SectionHero = () => {
    return (
        <div className="container py-5">
            <div className="row py-5">
                <div className="col-md-6">
                    <h1 className="h1 mb-5">Florence agency</h1>
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
    );
};

export default SectionHero;