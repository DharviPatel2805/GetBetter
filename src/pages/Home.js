import React from "react";
import Header from '../components/Header';
import Slider from '../components/Home/Slider';
import Footer from "../components/Footer";
import GetBetter from "../components/Home/GetBetter";
import FeaturesSection from "../components/Home/Features";
import TestimonialSection from "../components/Home/Testimonial";
import News from "../components/Home/News";

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
