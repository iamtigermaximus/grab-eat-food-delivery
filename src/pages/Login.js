import React from 'react'
import {FaApple,FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {
    return (
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 mx-auto">
                        <div className="login-container">
                            <div className="login-wrapper">
                                <div className="login-greeting px-5">
                                <h1 className="pt-3">Welcome!</h1>
                                <h6>Sign up or log in to continue</h6>
                            </div>
                            <div className="login-links p-5">
                                    <button className="button-login-link my-2 bg-dark text-light fw-bolder"><span className="fs-5 mx-2"><FaApple/></span>CONTINUE WITH APPLE</button>
                                    <button className="button-login-link my-2 bg-white text-danger border border-danger fw-bold"><span className="fs-5 mx-2"><FaGoogle/></span>CONTINUE WITH GOOGLE</button>
                                <button className="button-login-link my-2 bg-primary text-light fw-bold"><span className="fs-5 mx-2"><FaFacebook/></span>CONTINUE WITH FACEBOOK</button>
                                <h5 className="text-center"> or </h5>
                                <button className="button-login-link my-2 fw-bold border border-success text-success">CONTINUE WITH EMAIL</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
