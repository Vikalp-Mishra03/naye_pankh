import React from 'react'
// import '../style/testimonial.scss'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Testimonial() {
    return (
        <div className='test'>
            <Carousel autoPlay
                infiniteLoop
                interval={5000}
                showStatus={false}
                showThumbs={false}
                showArrows={false}>

                <div className="testimonial">
                    <div className="testimonial-box">
                        <div className="testimonial">
                            <i className="fas fa-quote-right"></i>
                            <span className="testimonial-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dignissimos blanditiis similique quod quaerat et recusandae tempora. Animi error quaerat labore cum! Ratione veritatis culpa illo quo molestiae minima repudiandae.</span>
                            <div className="testimonial-user">
                                <img src="https://randomuser.me/api/portraits/women/17.jpg" alt="user-img" className="user-img" />
                                <div className="user-info">
                                    <span className="user-name">Username</span>
                                    <div className="user-job-details">
                                        <span className="user-job">Job</span>
                                        <div className="line"></div>
                                        <span className="user-post">Post</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <div className="testimonial-box">
                        <div className="testimonial">
                            <i className="fas fa-quote-right"></i>
                            <span className="testimonial-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dignissimos blanditiis similique quod quaerat et recusandae tempora. Animi error quaerat labore cum! Ratione veritatis culpa illo quo molestiae minima repudiandae.</span>
                            <div className="testimonial-user">
                                <img src="https://randomuser.me/api/portraits/women/17.jpg" alt="user-img" className="user-img" />
                                <div className="user-info">
                                    <span className="user-name">Username</span>
                                    <div className="user-job-details">
                                        <span className="user-job">Job</span>
                                        <div className="line"></div>
                                        <span className="user-post">Post</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <div className="testimonial-box">
                        <div className="testimonial">
                            <i className="fas fa-quote-right"></i>
                            <span className="testimonial-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dignissimos blanditiis similique quod quaerat et recusandae tempora. Animi error quaerat labore cum! Ratione veritatis culpa illo quo molestiae minima repudiandae.</span>
                            <div className="testimonial-user">
                                <img src="https://randomuser.me/api/portraits/women/17.jpg" alt="user-img" className="user-img" />
                                <div className="user-info">
                                    <span className="user-name">Username</span>
                                    <div className="user-job-details">
                                        <span className="user-job">Job</span>
                                        <div className="line"></div>
                                        <span className="user-post">Post</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}


