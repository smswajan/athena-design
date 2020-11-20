import React from 'react';
import { StayRunningImg } from '../../images';
import "./styles.scss"

const RunningProject = () => {
    return (
        <div className="container py-5">
            <div className="row d-flex align-items-center d-flex">
                <div className="col-md-6 order-0 order-md-1">
                    <h2 className="h2 mb-4">Stay Running & Project</h2>
                    <p className="text-secondary mb-4 ">It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal distribution
of letter.</p>
                    <a href="#" className="btn btn-info btn-custom">Contact Us</a>
                </div>
                <div className="col-md-6 order-1 order-md-0">
                    <img src={StayRunningImg} alt="" className="img-fluid" />
                </div>

            </div>
        </div>
    );
};

export default RunningProject;