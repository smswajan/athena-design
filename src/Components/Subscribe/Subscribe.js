import React from 'react';
import "./style.scss"

const Subscribe = () => {
    return (
        <div className="container py-5 bg-light">
            <h2 className="h2 text-center">Get your design right, right now</h2>
            <p className="text-center text-secondary">
                Be the first know our latest offers and updates!
            </p>
            <div className="row mb-5 my-5">
                <div className="col-md-6 offset-md-3 sub-wrapper">

                    <input placeholder="Enter your email address " type="text" className="py-4 form-control custom-input" />
                    <button className="btn btn-info btn-subscribe">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;