import React from "react";
import Header from "../components/Header";
import ProductSection1 from "../components/Products/ProductSection1";
import Footer from "../components/Footer";
import RecoverySection from "../components/Products/RecoverySection";
import CoreFeatures from "../components/Products/CoreFeatures";
import TestimonialSection from "../components/Testimonial";
import WhyChooseSection from "../components/Products/WhyChooseSection ";

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
