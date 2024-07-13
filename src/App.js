import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./style.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import RentCar from "./components/RentCar";
import Vendor from "./components/Vendor";
import OurServices from "./components/OurServices";
import Home from "./Pages/Home";
import AboutPage from "./Pages/About";
import ServicePage from "./Pages/Services";
import ContactPage from "./Pages/Contact";

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/rent-car" element={<RentCar />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/vendor" element={<Vendor />} />
        </Routes>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
