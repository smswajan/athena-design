import React from 'react';
import { Container } from 'react-bootstrap';
import { ExpDesign, Illustration, InterfaceDesign, Prototyping } from '../../images';
import "./styles.scss"

const WhatWeDo = () => {
    return (
        <section className="what-do-container">
            <Container className="py-5 ">
                <h2 className="h2 text-center">What We Do</h2>
                <p className="text-center text-secondary">
                    Our main focus is to make the User Experience very <br />
                simple and easy. Simplicity is our Strength.
            </p>
                <div className="row mt-5">
                    <div className="col-md-3">
                        <div className="what-we-do-card p-4 text-center">
                            <img src={ExpDesign} alt="" className="mb-4" />
                            <h3 className="h3 mb-3">Experience Design</h3>
                            <p className="text-secondary">The point of using Lorem
                            Ipsum is that it has a more-orless normal.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="what-we-do-card p-4 text-center">
                            <img src={InterfaceDesign} alt="" className="mb-4" />
                            <h3 className="h3 mb-3">Interface Design</h3>
                            <p className="text-secondary">The point of using Lorem
                            Ipsum is that it has a more-orless normal.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="what-we-do-card p-4 text-center">
                            <img src={Prototyping} alt="" className="mb-4" />
                            <h3 className="h3 mb-3">Prototyping</h3>
                            <p className="text-secondary">The point of using Lorem
                            Ipsum is that it has a more-orless normal.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="what-we-do-card p-4 text-center">
                            <img src={Illustration} alt="" className="mb-4" />
                            <h3 className="h3 mb-3">Illustration</h3>
                            <p className="text-secondary">The point of using Lorem
                            Ipsum is that it has a more-orless normal.</p>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default WhatWeDo;