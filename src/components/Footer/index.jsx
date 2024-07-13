/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react'

const Footer = () => {
    return (
        <Fragment>
            <div
                className="container-fluid bg-secondary py-5 px-sm-3 px-md-5"
                style={{ marginTop: "90px" }}
            >
                <div className="row pt-5">
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h4 className="text-uppercase text-light mb-4">Get In Touch</h4>
                        <p className="mb-2">
                            <i className="fa fa-map-marker-alt text-white mr-3"></i>Tiruchirapalli, TamilNadu , India
                        </p>
                        <p className="mb-2">
                            <i className="fa fa-phone-alt text-white mr-3"></i> +91 9865659510
                        </p>
                        <p><i className="fa fa-envelope text-white mr-3"></i>onewaytaxt@gmail.com</p>
                        <h6 className="text-uppercase text-white py-2">Follow Us</h6>
                        <div className="d-flex justify-content-start">
                            <a className="btn btn-lg btn-dark btn-lg-square mr-2" href="/"
                            ><i className="fab fa-twitter"></i
                            ></a>
                            <a className="btn btn-lg btn-dark btn-lg-square mr-2" href="/"
                            ><i className="fab fa-facebook-f"></i
                            ></a>
                            <a className="btn btn-lg btn-dark btn-lg-square mr-2" href="/"
                            ><i className="fab fa-linkedin-in"></i
                            ></a>
                            <a className="btn btn-lg btn-dark btn-lg-square" href="/"
                            ><i className="fab fa-instagram"></i
                            ></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h4 className="text-uppercase text-light mb-4">Usefull Links</h4>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-body mb-2" href="/"
                            ><i className="fa fa-angle-right text-white mr-2"></i>Private
                                Policy</a
                            >
                            <a className="text-body mb-2" href="/"
                            ><i className="fa fa-angle-right text-white mr-2"></i>Term &
                                Conditions</a
                            >
                            <a className="text-body mb-2" href="/"
                            ><i className="fa fa-angle-right text-white mr-2"></i>New Member
                                Registration</a
                            >
                            <a className="text-body mb-2" href="/"
                            ><i className="fa fa-angle-right text-white mr-2"></i>Affiliate
                                Programme</a
                            >
                            <a className="text-body mb-2" href="/"
                            ><i className="fa fa-angle-right text-white mr-2"></i>Return &
                                Refund</a
                            >
                            <a className="text-body" href="/"
                            ><i className="fa fa-angle-right text-white mr-2"></i>Help & FQAs</a
                            >
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h4 className="text-uppercase text-light mb-4">Car Gallery</h4>
                        <div className="row mx-n1">
                            <div className="col-4 px-1 mb-2">
                                <a href=""
                                ><img className="w-100" src="assets/img/gallery-1.jpg" alt=""
                                    /></a>
                            </div>
                            <div className="col-4 px-1 mb-2">
                                <a href=""
                                ><img className="w-100" src="assets/img/gallery-2.jpg" alt=""
                                    /></a>
                            </div>
                            <div className="col-4 px-1 mb-2">
                                <a href=""
                                ><img className="w-100" src="assets/img/gallery-3.jpg" alt=""
                                    /></a>
                            </div>
                            <div className="col-4 px-1 mb-2">
                                <a href=""
                                ><img className="w-100" src="assets/img/gallery-4.jpg" alt=""
                                    /></a>
                            </div>
                            <div className="col-4 px-1 mb-2">
                                <a href=""
                                ><img className="w-100" src="assets/img/gallery-5.jpg" alt=""
                                    /></a>
                            </div>
                            <div className="col-4 px-1 mb-2">
                                <a href=""
                                ><img className="w-100" src="assets/img/gallery-6.jpg" alt=""
                                    /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h4 className="text-uppercase text-light mb-4">Newsletter</h4>
                        <p className="mb-4">
                            We know how important customer experience is for a business and therefore, we strive.
                        </p>
                        <div className="w-100 mb-3">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control bg-dark border-dark"
                                    style={{ padding: "25px" }}
                                    placeholder="Your Email"
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-primary text-uppercase px-3">
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </div>
                        <i>FOR INQUIRIES & QUESTIONS</i>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark py-4 px-sm-3 px-md-5">
                <p className="mb-2 text-center text-body">
                    &copy; <a href="/">2024</a>. All Rights Reserved.
                </p>


                < p className="m-0 text-center text-body">
                    Designed by <a href="/">Black Codes</a>
                </p>
            </div>
            {/* <!-- Footer End --> */}

            {/* <!-- Back to Top --> */}
            <a href="/" className="btn btn-lg btn-primary btn-lg-square back-to-top"
            ><i className="fa fa-angle-double-up"></i
            ></a>
        </Fragment >
    )
}

export default Footer