import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from './SectionTitle';
import ServiceItem from './ServiceItem';


const SERVICE_DATA = [
    {
      serviceIcon:"/assets/images/icon/s-icon-1.png",
      serviceTitle:"Cloud Solution",
      serviceDesc:"Our cutting-edge cloud solution provides businesses with scalable and secure infrastructure, enabling seamless data storage, flexible computing power, and efficient resource management. Experience the power of the cloud as we revolutionize the way you store, access, and utilize your data, all while reducing costs and enhancing productivity.Ultimately, it is the on-demand availability of computer system resources.",
      serviceLink:"/services-details"
    },
    {
      serviceIcon:"/assets/images/icon/s-icon-4.png",
      serviceTitle:"App Store Optimization (ASO)",
      serviceDesc:"a critical component of digital marketing for mobile applications. By optimizing your app's visibility and discoverability on popular app stores, we ensure that it reaches the right audience and drives organic downloads. Through keyword research, metadata optimization, compelling descriptions, and strategic user reviews, we boost your app's rankings, increase downloads, and maximize your app's success in the competitive app market.",
      serviceLink:"/services-details"
    },
    {
      serviceIcon:"/assets/images/icon/s-icon-2.png",
      serviceTitle:"Unity Gaming",
      serviceDesc:"Immerse yourself in the world of interactive entertainment with our Unity gaming solutions. From captivating storylines to visually stunning graphics, our team of Unity developers creates immersive gaming experiences that push the boundaries of realism and engagement. With seamless gameplay, multiplayer capabilities, and cross-platform compatibility, we bring your gaming vision to life and offer unforgettable experiences for players worldwide.",
      serviceLink:"/services-details"
    },
    {
      serviceIcon:"/assets/images/icon/s-icon-3.png",
      serviceTitle:"App Development",
      serviceDesc:"With our expert app development services, we transform your innovative ideas into user-friendly and captivating mobile applications. Our experienced team of developers excels in creating seamless, feature-rich, and visually stunning apps that cater to your unique business needs. Embrace the mobile revolution and engage your customers with a customized app that elevates your brand to new heights.",
      serviceLink:"/services-details"
    },
    // {
    //   serviceIcon:"/assets/images/icon/s-icon-5.png",
    //   serviceTitle:"Content Writing",
    //   serviceDesc:"Beautiful and Influential websites & apps that are mobile friendly quick to load and help drive sales giving you a solid presence online.",
    //   serviceLink:"/services-details"
    // },
    // {
    //   serviceIcon:"/assets/images/icon/s-icon-6.png",
    //   serviceTitle:"E-commerce",
    //   serviceDesc:"Beautiful and Influential websites & apps that are mobile friendly quick to load and help drive sales giving you a solid presence online.",
    //   serviceLink:"/services-details"
    // },
  ];

const Services = ({extraClass}) => {
    return (
        <section id="service" className={`services__area p-relative fix ${extraClass} pt-120 pb-90`}>
                <div className="services__shape">
                    <img className="services-s-1" src="/assets/images/shape/services/services-s-1.png" alt=""/>
                    <img className="services-s-2" src="/assets/images/shape/services/services-s-2.png" alt=""/>
                    <img className="services-s-3" src="/assets/images/shape/services/services-s-3.png" alt=""/>
                </div>
                <Container>
                    <Row className="mb-55">
                        <Col xl={6}>
                            <div className="services__title">
                                <SectionTitle subTitle="Services"
                                titleFirst="What we do"/> 
                            </div>
                        </Col>
                    </Row>  
                    <Row>                                         
                          {SERVICE_DATA.map(
                              ({serviceIcon, serviceTitle, serviceDesc, serviceLink}, index) => (
                                  <ServiceItem
                                  key={index}
                                  serviceIcon={serviceIcon}
                                  serviceTitle={serviceTitle}
                                  serviceDesc={serviceDesc}
                                  serviceLink={serviceLink}
                                  />
                              )
                          )}                                
                    </Row>
                </Container>
            </section>
    );
};

export default Services;