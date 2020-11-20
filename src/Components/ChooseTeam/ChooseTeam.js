import React from 'react';
import "./styles.scss"

const ChooseTeam = () => {
    return (
        <>
            <section className="py-5">
                <h2 className="h2 my-5 text-center">Choose Your Dedicated Team</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="team-card text-center m-4 p-5">
                                <span className="price-num">$199</span>
                                <span className="desc text-secondary">For Basic</span>
                                <hr />
                                <p>Home page</p>
                                <p>4 Inner page</p>
                                <p>Asset file</p>
                                <p>Source file</p>
                                <p>Free stock photos</p>
                                <p>20 days free support</p>
                                <p>24/7 support</p>
                                <a href="#" className="btn btn-info btn-custom">Order Now</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-card text-center m-4 p-5">
                                <span className="price-num">$399</span>
                                <span className="desc text-secondary">For Preferred</span>
                                <hr />
                                <p>Home page</p>
                                <p>8 Inner page</p>
                                <p>Asset file</p>
                                <p>Source file</p>
                                <p>Free stock photos</p>
                                <p>30 days free support</p>
                                <p>24/7 support</p>
                                <a href="#" className="btn btn-info btn-custom">Order Now</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-card text-center m-4 p-5">
                                <span className="price-num">$599</span>
                                <span className="desc text-secondary">For Elite</span>
                                <hr />
                                <p>Home page</p>
                                <p>No Inner page</p>
                                <p>Asset file</p>
                                <p>Source file</p>
                                <p>Free stock photos</p>
                                <p>10 days free support</p>
                                <p>24/7 support</p>
                                <a href="#" className="btn btn-info btn-custom">Order Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ChooseTeam;

