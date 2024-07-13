import React, { Fragment } from 'react'
import ContactUs from '../../components/ContactUs'

const ContactPage = () => {
    return (
        <Fragment>

            <div className="container-fluid page-header">
                <h1 className="display-3 text-uppercase text-white mb-3">Contact Us</h1>
                <div className="d-inline-flex text-white">
                    <h6 className="text-uppercase m-0">
                        <a className="text-white" href="/">Home</a>
                    </h6>
                    <h6 className="text-body m-0 px-3">/</h6>
                    <h6 className="text-uppercase text-body m-0">Contact Us</h6>
                </div>
            </div>

            <ContactUs />

        </Fragment>
    )
}

export default ContactPage