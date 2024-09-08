import React from "react";
import Header from "../components/Header";
import ProductSection1 from "../components/Products/ProductSection1";
import Footer from "../components/Footer";
import RecoverySection from "../components/Products/RecoverySection";
import CoreFeatures from "../components/Products/CoreFeatures";
import WhyChooseSection from "../components/Products/WhyChooseSection ";
import TestimonialSection from "../components/Home/Testimonial";

function Product() {
    return (
        <div >
            <Header/>
            <ProductSection1/>
            <RecoverySection/>
            <CoreFeatures/>
            <WhyChooseSection/>
            <TestimonialSection/>
            <Footer/>
        </div>
    );
}

export default Product;
