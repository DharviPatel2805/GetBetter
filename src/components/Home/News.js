import React from "react";
import image from "./../../assets/imgs/blog.png";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "./../../assets/css/Home/News.css";

// const News = () => {
//     return (
//         <React.Fragment>
//             <section className="ftco-section bg-light">
//                 <div className="container">
//                     <div className="row justify-content-center mb-5 pb-2">
//                         <div className="col-md-8 text-center heading-section ftco-animate">
//                             <span className="subheading">Blog</span>
//                             <h2 className="mb-4">Recent Blog</h2>
//                             <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-md-4 ftco-animate">
//                             <div className="blog-entry">
//                                 <a href="#" className="block-20 d-flex align-items-end justify-content-end">
//                                     <img src={image} alt="Blog Post" className="img-fluid" />
//                                     <div className="meta-date text-center p-2">
//                                         <span className="day">18</span>
//                                         <span className="mos">September</span>
//                                         <span className="yr">2019</span>
//                                     </div>
//                                 </a>
//                                 <div className="text bg-white p-4">
//                                     <h3 className="heading"><a href="#">Scary Thing That You Don’t Get Enough Sleep</a></h3>
//                                     <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
//                                     <div className="d-flex align-items-center mt-4">
//                                         <p className="mb-0"><a href="#" className="btn btn-primary">Read More <span className="ion-ios-arrow-round-forward"></span></a></p>
//                                         <p className="ml-auto mb-0">
//                                             <a href="#" className="mr-2">Admin</a>
//                                             <a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a>
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-4 ftco-animate">
//                             <div className="blog-entry">
//                                 <a href="#" className="block-20 d-flex align-items-end justify-content-end">
//                                     <img src={image} alt="Blog Post" className="img-fluid" />
//                                     <div className="meta-date text-center p-2">
//                                         <span className="day">18</span>
//                                         <span className="mos">September</span>
//                                         <span className="yr">2019</span>
//                                     </div>
//                                 </a>
//                                 <div className="text bg-white p-4">
//                                     <h3 className="heading"><a href="#">Scary Thing That You Don’t Get Enough Sleep</a></h3>
//                                     <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
//                                     <div className="d-flex align-items-center mt-4">
//                                         <p className="mb-0"><a href="#" className="btn btn-primary">Read More <span className="ion-ios-arrow-round-forward"></span></a></p>
//                                         <p className="ml-auto mb-0">
//                                             <a href="#" className="mr-2">Admin</a>
//                                             <a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a>
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-4 ftco-animate">
//                             <div className="blog-entry">
//                                 <a href="#" className="block-20 d-flex align-items-end justify-content-end">
//                                     <img src={image} alt="Blog Post" className="img-fluid" />
//                                     <div className="meta-date text-center p-2">
//                                         <span className="day">18</span>
//                                         <span className="mos">September</span>
//                                         <span className="yr">2019</span>
//                                     </div>
//                                 </a>
//                                 <div className="text bg-white p-4">
//                                     <h3 className="heading"><a href="#">Scary Thing That You Don’t Get Enough Sleep</a></h3>
//                                     <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
//                                     <div className="d-flex align-items-center mt-4">
//                                         <p className="mb-0"><a href="#" className="btn btn-primary">Read More <span className="ion-ios-arrow-round-forward"></span></a></p>
//                                         <p className="ml-auto mb-0">
//                                             <a href="#" className="mr-2">Admin</a>
//                                             <a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a>
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </React.Fragment>
//     );
// }


////////////////////////////////////////////////////////////////////////

// const News = () => {
//     const newsData = [
//         {
//             date: "10th Feb, 2024",
//             title: "Title",
//             description: "Lorem ipsum dolor sit amet consectetur. In eu in lorem quis...",
//             imgSrc: "/path/to/image1.png",
//         },
//         {
//             date: "10th Feb, 2024",
//             title: "Title",
//             description: "Lorem ipsum dolor sit amet consectetur. In eu in lorem quis...",
//             imgSrc: "/path/to/image2.png",
//         },
//         {
//             date: "10th Feb, 2024",
//             title: "Title",
//             description: "Lorem ipsum dolor sit amet consectetur. In eu in lorem quis...",
//             imgSrc: "/path/to/image3.png",
//         }
//     ];

//     return (
//         <div style={{ padding: "60px 0" }}>
//             <Container>
//                 {/* Section Header */}
//                 <Row className="text-center mb-5">
//                     <Col>
//                         <h2 style={{ fontWeight: "500", color: "#222" }}>News & Insight</h2>
//                         <p style={{ color: "#6c757d", maxWidth: "600px", margin: "0 auto" }}>
//                             Stay informed with the latest tips, news, and expert advice on physical therapy and overall wellness.
//                         </p>
//                     </Col>
//                 </Row>

//                 {/* News Cards */}
//                 <Row>
//                     {newsData.map((news, index) => (
//                         <Col md={4} key={index}>
//                             <Card className="mb-4 text-left">
//                                 <Card.Img variant="top" src={image} alt="News Image" />
//                                 <Card.Body>
//                                     <Card.Text style={{ color: "#6c757d", fontSize: "14px" }}>{news.date}</Card.Text>
//                                     <Card.Title >{news.title}</Card.Title>
//                                     <Card.Text>{news.description}</Card.Text>
//                                     {/* <Button variant="outline-success">Read More</Button> */}
//                                     <Button
//                                 variant="outline-success"
//                                 className="m-1"
//                                 style={{ borderColor: '#23A377', color: '#23A377', backgroundColor: 'white', borderRadius: "10px", padding: "10px" }}
//                             >
//                                 Read More
//                             </Button>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//         </div>
//     );
// };

// export default News;


const News = () => {
    const newsData = [
        {
            date: "10th Feb, 2024",
            title: "Title",
            description: "Lorem ipsum dolor sit amet consectetur. In eu in lorem quis...",
            imgSrc: image,
        },
        {
            date: "10th Feb, 2024",
            title: "Title",
            description: "Lorem ipsum dolor sit amet consectetur. In eu in lorem quis...",
            imgSrc: image,
        },
        {
            date: "10th Feb, 2024",
            title: "Title",
            description: "Lorem ipsum dolor sit amet consectetur. In eu in lorem quis...",
            imgSrc: image,
        }
    ];

    return (
        <div className="news-section">
            <Container>
                {/* Section Header */}
                <Row className="text-center mb-5">
                    <Col>
                        <h2 className="news-heading">News & Insight</h2>
                        <p className="news-subheading">
                            Stay informed with the latest tips, news, and expert advice on physical therapy and overall wellness.
                        </p>
                    </Col>
                </Row>

                {/* News Cards */}
                <Row>
                    {newsData.map((news, index) => (
                        <Col md={4} key={index}>
                            <Card className="news-card">
                                <Card.Img variant="top" src={news.imgSrc} alt="News Image" />
                                <Card.Body>
                                    <Card.Text className="news-date">{news.date}</Card.Text>
                                    <Card.Title>{news.title}</Card.Title>
                                    <Card.Text>{news.description}</Card.Text>
                                    <Button
                                        variant="outline-success"
                                        className="news-read-more-btn"
                                    >
                                        Read More
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default News;

