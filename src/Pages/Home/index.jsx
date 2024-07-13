import React from 'react'
import Slider from '../../components/Slider'
import Services from '../../components/Services'
import Banner from '../../components/Banner'
import RentCar from '../../components/RentCar'
import OurServices from '../../components/OurServices'
import BannerOffer from '../../components/BannerOffer'
import Testimonial from '../../components/Testimonial'
import ContactUs from '../../components/ContactUs'
import Vendor from '../../components/Vendor'
import About from '../../components/About'

const Home = () => {
    return (
        <>
            <Slider />
            <About />
            <Services />
            <Banner />
            <RentCar />
            <OurServices />
            <BannerOffer />
            <Testimonial />
            <ContactUs />
            <Vendor />
        </>

    )
}

export default Home