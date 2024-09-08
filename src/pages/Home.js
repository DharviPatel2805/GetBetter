import React from "react";
import Header from '../components/Header';
import Slider from '../components/Slider';
import News from '../components/News';
import GetBetter from '../components/GetBetter';
import FeaturesSection from '../components/Features';
import TestimonialSection from '../components/Testimonial';
import Footer from "../components/Footer";

function Home() {
    return (
        <div >
            <Header />
            <Slider />
            <GetBetter />
            <FeaturesSection />
            <TestimonialSection />
            <News/>
            <Footer/>
        </div>
    );
}

export default Home;
