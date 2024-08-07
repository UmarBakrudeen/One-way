import React, { Fragment } from 'react'

const Banner = () => {
    return (
        <Fragment>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="bg-banner py-5 px-4 text-center">
                        <div className="py-5">
                            <h1 className="display-1 text-uppercase text-primary mb-4">50% OFF</h1>
                            <h1 className="text-uppercase text-light mb-4">
                                Special Offer For New Members
                            </h1>
                            <p className="mb-4">Only for Sunday from 1st Jan to 30th Jan 2045</p>
                            <a className="btn btn-primary mt-2 py-3 px-5" href="/">Register Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Banner