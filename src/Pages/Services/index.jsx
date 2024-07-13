import React, { Fragment } from 'react'
import Banner from '../../components/Banner'
import Vendor from '../../components/Vendor'
import Services from '../../components/Services'

const ServicePage = () => {
    return (
        <Fragment>
            <div className="container-fluid page-header">
                <h1 className="display-3 text-uppercase text-white mb-3">Services</h1>
                <div className="d-inline-flex text-white">
                    <h6 className="text-uppercase m-0">
                        <a className="text-white" href="/">Home</a>
                    </h6>
                    <h6 className="text-body m-0 px-3">/</h6>
                    <h6 className="text-uppercase text-body m-0">Services</h6>
                </div>
            </div>

            <Services />
            <Banner />
            <Vendor />

        </Fragment>
    )
}

export default ServicePage