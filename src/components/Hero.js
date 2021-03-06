import React from 'react'
import { IoLocationSharp } from "react-icons/io5";

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                            <div className="location-container text-center">
                                <div className="heading-content rounded pb-5 bg-light">
                                    <h3 className="heading-content-text p-3">
                                    Let's explore good food in your area.
                                    </h3>
                                    <div className="search-location">
                                        <i className="text-danger fs-5"><IoLocationSharp/></i>
                                        <input className="form-control-lg" placeholder="Type your location" />
                                    </div>
                                    <div className="button py-2 text-center">
                                        <button className="btn-search-location">Search</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
