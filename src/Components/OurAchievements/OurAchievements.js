import React from 'react';
import "./styles.scss"
import { FaTrophy, FaSmile, FaRocket } from "react-icons/fa"
import { SiPostwoman } from "react-icons/si"

const OurAchievements = () => {
    return (
        <div className="container mt-5">
            <div className="row d-flex align-items-center">
                <div className="col-md-5">
                    <h2 className="h2 mb-4">Our Achievement</h2>
                    <p className="text-secondary">
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout. The point
                        of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letter.
                    </p>
                </div>
                <div className="col-md-7">
                    <div className="row text-secondary">
                        <div className="col-md-6 mb-4">
                            <div className="box p-5 m-1">
                                <div className="row d-flex align-items-center">
                                    <div className="col-4">
                                        <div className="icon-container"><FaSmile /></div>
                                    </div>
                                    <div className="col-7 offset-1">
                                        <h2 className="">700+</h2>
                                        <p className="pText">Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="box p-5 m-1">
                                <div className="row d-flex align-items-center">
                                    <div className="col-4">
                                        <div className="icon-container"><FaTrophy /></div>
                                    </div>
                                    <div className="col-7 offset-1">
                                        <h2 className="">140+</h2>
                                        <p className="pText">Projects Completed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="box p-5 m-1">
                                <div className="row d-flex align-items-center">
                                    <div className="col-4">
                                        <div className="icon-container"><SiPostwoman /></div>
                                    </div>
                                    <div className="col-7 offset-1">
                                        <h2 className="">25+</h2>
                                        <p className="pText">Crazy Minds</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="box p-5 m-1">
                                <div className="row d-flex align-items-center">
                                    <div className="col-4">
                                        <div className="icon-container"><FaRocket /></div>
                                    </div>
                                    <div className="col-7 offset-1">
                                        <h2 className="">75+</h2>
                                        <p className="pText">Running Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default OurAchievements;

const AchievementCard = () => {
    return (
        <div className="box p-5 m-1">
            <div className="row d-flex align-items-center">
                <div className="col-4">
                    <div className="icon-container"><FaTrophy /></div>
                </div>
                <div className="col-7 offset-1">
                    <h2 className="">25+</h2>
                    <p className="pText">Crazy Minds</p>
                </div>
            </div>
        </div>
    )
}