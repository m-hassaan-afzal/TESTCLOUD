
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import SectionTitle from './SectionTitle';

const About = ({subTitle, titleFirst, titleSecond}) => {
    return (
        <section id="about" className="about__area fix p-relative pt-120 pb-120 about__pb">
            <Container>
                <Row>                        
                    <Col xxl={7} xl={8} lg={10} md={10}>                            
                        <div className="about__title mb-80">
                            <SectionTitle subTitle={subTitle}
                            titleFirst={titleFirst} 
                            titleSecond={titleSecond}/>  
                        </div>
                    </Col>
                </Row>
                <Row>                        
                    <Col xl={6} lg={6}>                            
                        <div className="about__thumb">
                            <div className="about__thumb-shape">
                                <img className="about-s-1 d-none d-lg-block" src="/assets/images/shape/about/about-s-1.png" alt=""/>
                                <img className="about-s-2 d-none d-md-block" src="/assets/images/shape/about/about-s-2.png" alt=""/>
                            </div>
                            <div className="about__thumb-image">
                                <img src="/assets/images/about/about-img.jpg" alt=""/>
                            </div>
                        </div>
                    </Col>
                    <Col xl={{ span: 5, offset: 1 }} lg={6}>                            
                        <div className="about__content">
                            <p>In the realm of cloud computing, where innovation and reliability intertwine, we are honored to share that Amazon Web Services has bestowed upon us an extraordinary bounty of generous credits. With this remarkable support, we have built an awe-inspiring digital kingdom that has become home to a staggering 450 million users.</p>
                            {/* <ul> */}
                                <p>Within the majestic walls of our cloud infrastructure, we have mastered the art of unrivaled speed and responsiveness. Our commitment to latency reduction has allowed us to create an immersive user experience where information is at your fingertips, instantaneously.</p>
                                {/* <li>The only home we`ve ever known dream of the mind`s eye.</li> */}
                            {/* </ul> */}
                        </div>
                        <div className="about__counter-bg d-none d-sm-block">
                        <div className="about__counter-content d-flex">
                                <div className="about__counter-text text-center">
                                    <h2>                                        
                                        <CountUp end={280} duration={5} />+                                        
                                    </h2>
                                    <p>Project Delivered</p>
                                </div>
                                <div className="about__counter-text text-center">
                                    <h2>                                        
                                        <CountUp end={500} duration={5} />+                                        
                                    </h2>
                                    <p>Happy Clients</p>
                                </div>
                                <div className="about__counter-text text-center">
                                    <h2>                                        
                                    <CountUp end={3500} duration={5} />+                                        
                                    </h2>
                                    <p>Total Coffees</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;