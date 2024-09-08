// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import { FaStar } from "react-icons/fa";
// import p1 from "../assets/imgs/person_1.jpg";
// import p2 from "../assets/imgs/person_2.jpg";
// import p3 from "../assets/imgs/person_3.jpg";

// const TestimonialSection = () => {
//     const testimonials = [
//         {
//             name: "Pranoy Kovuri",
//             role: "CEO at GetBetter",
//             review: "Lorem ipsum dolor sit amet consectetur. In eu in lorem quis urna massa amet in.",
//             image: p1,
//             rating: 5
//         },
//         {
//             name: "Shashank",
//             role: "Software Developer at GetBetter",
//             review: "Lorem ipsum dolor sit amet consectetur. In eu in lorem quis urna massa amet in.",
//             image: p2,
//             rating: 5
//         },
//         {
//             name: "Sahul",
//             role: "Software Developer at GetBetter",
//             review: "Lorem ipsum dolor sit amet consectetur. In eu in lorem quis urna massa amet in.",
//             image: p3,
//             rating: 5
//         }
//     ];

//     return (
//         <div style={{ paddingTop: "100px", paddingLeft: "80px", paddingRight: "80px", paddingBottom: "100px" }} >
//             <Container>
//                 <div className="text-center mb-4" style={{
//                         fontWeight: "500",
//                         fontSize: "32px",
//                         lineHeight: "40px",
//                         color: "black"
//                     }} >
//                     <h2>What Our Client Says!</h2>
//                 </div>
//                 <Row className="justify-content-center">
//                     {testimonials.map((testimonial, index) => (
//                         <Col md={4} className="mb-4" key={index}>
//                             <div className="p-4 bg-white shadow-sm rounded text-center">
//                                 <div className="mb-3">
//                                     <img
//                                         src={testimonial.image}
//                                         alt={testimonial.name}
//                                         style={{
//                                             width: "80px",
//                                             height: "80px",
//                                             borderRadius: "50%",
//                                             border: "0.7px solid #414845"
//                                         }}
//                                     />
//                                 </div>
//                                 <p className="text-muted">"{testimonial.review}"</p>
//                                 <h5>{testimonial.name}</h5>
//                                 <p>{testimonial.role}</p>
//                                 <div className="text-warning">
//                                     {[...Array(testimonial.rating)].map((star, i) => (
//                                         <FaStar key={i} />
//                                     ))}
//                                 </div>
//                             </div>
//                         </Col>
//                     ))}
//                 </Row>
//                 <div className="text-center">
//                     <button  className="btn btn-lg" style={{ backgroundColor: "#23A377", color: "white", width: "350px", padding: "2px", borderRadius: "12px" }}  >CTA</button>
//                 </div>
//             </Container></div>
//     );
// };

// export default TestimonialSection;

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import p1 from "./../../assets/imgs/person_1.jpg";
import p2 from "./../../assets/imgs/person_2.jpg";
import p3 from "./../../assets/imgs/person_3.jpg";
import './../../assets/css/Home/Testimonial.css';  // Import the CSS file

const TestimonialSection = () => {
    const testimonials = [
        {
            name: "Pranoy Kovuri",
            role: "CEO at GetBetter",
            review: "Lorem ipsum dolor sit amet consectetur. In eu in lorem quis urna massa amet in.",
            image: p1,
            rating: 5
        },
        {
            name: "Shashank",
            role: "Software Developer at GetBetter",
            review: "Lorem ipsum dolor sit amet consectetur. In eu in lorem quis urna massa amet in.",
            image: p2,
            rating: 5
        },
        {
            name: "Sahul",
            role: "Software Developer at GetBetter",
            review: "Lorem ipsum dolor sit amet consectetur. In eu in lorem quis urna massa amet in.",
            image: p3,
            rating: 5
        }
    ];

    return (
        <div className="testimonial-section">
            <Container>
                <div className="text-center mb-4 testimonial-heading">
                    <h2>What Our Client Says!</h2>
                </div>
                <Row className="justify-content-center">
                    {testimonials.map((testimonial, index) => (
                        <Col md={4} className="mb-4" key={index}>
                            <div className="testimonial-card">
                                <div className="mb-3">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="testimonial-image"
                                    />
                                </div>
                                <p className="testimonial-review">"{testimonial.review}"</p>
                                <h5 className="testimonial-name">{testimonial.name}</h5>
                                <p className="testimonial-role">{testimonial.role}</p>
                                <div className="testimonial-rating">
                                    {[...Array(testimonial.rating)].map((star, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                <div className="text-center">
                    <button className="cta-button">View More</button>
                </div>
            </Container>
        </div>
    );
};

export default TestimonialSection;

