import React, { Fragment, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { State, City } from 'country-state-city';


const Header = () => {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    // Fetch states and cities as shown previously
    useEffect(() => {
        const indianStates = State.getStatesOfCountry('IN');
        setStates(indianStates);
    }, []);

    useEffect(() => {
        if (selectedState) {
            const stateCities = City.getCitiesOfState('IN', selectedState);
            setCities(stateCities);
        } else {
            setCities([]);
        }
    }, [selectedState]);

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        setSelectedCity(''); // Reset city selection when state changes
    };

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    return (
        <Fragment>
            <div className="container-fluid bg-dark py-3 px-lg-5 d-none d-lg-block">
                <div className="row">
                    <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-body pr-3" href="/"><i className="fa fa-phone-alt mr-2"></i>+91 9865659510</a>
                            <span className="text-body">|</span>
                            <a className="text-body px-3" href="/"><i className="fa fa-envelope mr-2"></i>onewaytaxt@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-md-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-body px-3" href="/"><i className="fab fa-facebook-f"></i></a>
                            <a className="text-body px-3" href="/"><i className="fab fa-twitter"></i></a>
                            <a className="text-body px-3" href="/"><i className="fab fa-linkedin-in"></i></a>
                            <a className="text-body px-3" href="/"><i className="fab fa-instagram"></i></a>
                            <a className="text-body pl-3" href="/"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid position-relative nav-bar p-0">
                <div className="position-relative px-lg-5" style={{ zIndex: 9 }}>
                    <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
                        <a href="/" className="navbar-brand">
                            <h1 className="text-uppercase text-primary mb-1">Car Rental App</h1>
                        </a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                            <div className="navbar-nav ml-auto py-0">
                                <a href="/" className="nav-item nav-link active">Home</a>
                                <a href="/about" className="nav-item nav-link">About</a>
                                <a href="/services" className="nav-item nav-link">Service</a>
                                <div className="nav-item dropdown">
                                    <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">Cars</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a href="/" className="dropdown-item">Car Listing</a>
                                        <a href="/" className="dropdown-item">Car Detail</a>
                                        <a href="/" className="dropdown-item">Car Booking</a>
                                    </div>
                                </div>
                                <div className="nav-item dropdown">
                                    <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a href="/" className="dropdown-item">The Team</a>
                                        <a href="/" className="dropdown-item">Testimonial</a>
                                    </div>
                                </div>
                                <a href="/contact-us" className="nav-item nav-link">Contact</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="container-fluid bg-white pt-3 px-lg-5">
                <div className="row mx-n2">
                    <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                        {/* <select className="custom-select px-4 mb-3" style={{ height: '50px' }}>
                            <option selected>Pickup Location</option>
                            <option value="1">Location 1</option>
                            <option value="2">Location 2</option>
                            <option value="3">Location 3</option>
                        </select> */}

                        <select className="custom-select px-4 mb-3" style={{ height: '50px' }} onChange={handleStateChange}>
                            <option selected>Pickup State</option>
                            {states.map((state) => (
                                <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                        <select className="custom-select px-4 mb-3" style={{ height: '50px' }} onChange={handleCityChange} value={selectedCity}>
                            <option selected>Pickup City</option>
                            {cities.map((city) => (
                                <option key={city.name} value={city.name}>{city.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                        {/* <select className="custom-select px-4 mb-3" style={{ height: '50px' }}>
                            <option selected>Drop Location</option>
                            <option value="1">Location 1</option>
                            <option value="2">Location 2</option>
                            <option value="3">Location 3</option>
                        </select> */}
                        <select className="custom-select px-4 mb-3" style={{ height: '50px' }} onChange={handleStateChange}>
                            <option selected>Drop State</option>
                            {states.map((state) => (
                                <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                        <select className="custom-select px-4 mb-3" style={{ height: '50px' }} onChange={handleStateChange}>
                            <option selected>Drop City</option>
                            {states.map((state) => (
                                <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-6 px-2" style={{ zIndex: "99" }}>
                        <div className="date mb-3" id="date" data-target-input="nearest">
                            <DatePicker
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                dateFormat="dd:MM:yyyy"
                                placeholderText="Pickup Date"
                                className="form-control p-4"
                            />
                        </div>
                    </div>
                    <div className="col-xl-1 col-lg-3 col-md-6 px-2" style={{ zIndex: "99" }}>
                        <div className="date mb-3" id="date" data-target-input="nearest">
                            <DatePicker
                                selected={endDate}
                                onChange={date => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                dateFormat="dd:MM:yyyy"
                                placeholderText="Drop Date"
                                className="form-control p-4"
                            />
                        </div>
                    </div>
                    {/* <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                        <select className="custom-select px-4 mb-3" style={{ height: '50px' }}>
                            <option selected>Select A Car</option>
                            <option value="1">Car 1</option>
                            <option value="2">Car 1</option>
                            <option value="3">Car 1</option>
                        </select>
                    </div> */}
                    <div className="col-xl-1 col-lg-4 col-md-6 px-2">
                        <button className="btn btn-primary btn-block mb-3" type="submit" style={{ height: '50px' }}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Header;
