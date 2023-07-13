import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from 'next/link';
import SectionTitle from './SectionTitle';
import Modal from "./Modal";

const Experience = ({extraClass}) => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () =>{
        setShowModal(prev=>!prev)
    }
    return (        
        <section className={`experience__area fix p-relative pt-120 pb-120 ${extraClass}`}>  
            <>
                <Modal showModal={showModal} setShowModal={setShowModal}/>
                <div className="experience__shape">
                    <img className="experience-s-1" src="/assets/images/shape/experience/experience-s-1.png" alt=""/>
                    <img className="experience-s-2" src="/assets/images/shape/experience/experience-s-2.png" alt=""/>
                    <img className="experience-s-3 d-none d-lg-block" src="/assets/images/shape/experience/experience-s-3.png" alt=""/>
                    <img className="experience-s-4" src="/assets/images/shape/experience/experience-s-4.png" alt=""/>
                </div>
                <Container>
                    <Row className="align-items-center">
                        <Col xl={5} lg={6} md={9} sm={10}>
                            <div className="experience__content">
                                <SectionTitle subTitle="FACTS TO KNOW"
                                titleFirst="Providing software solutions" titleSecond=""/>
                                <p>Software organizations can leverage our cloud storage gateway to effortlessly store and deploy their applications, enabling rapid scalability, enhanced performance, and simplified maintenance, all while reducing operational costs and maximizing productivity.</p>
                                <p>Embrace the future of cloud computing with CloudGate Technologies and embark on a transformative journey organisations can thrive in the digital era. Join us as we open the gates to a world of limitless possibilities, where innovation and efficiency converge to redefine the way business is done. Step into the cloud and unlock the true potential of Cloud solutions Technologies.</p>
                                {/* <Link href="/contact">
                                    <a className="m-btn mt-35">Start a Project</a>
                                </Link> */}
                            </div> 
                        </Col>
                        <Col xl={7} lg={6} md={9}>
                            <div className="experience__video-btn">                        
                                <span onClick={openModal}><i className="fas fa-play"></i></span>                            
                            </div>
                            <div className="experience__thumb text-end">
                                <img src="/assets/images/experience/experience-img.png" alt=""/>
                            </div>
                        </Col>                        
                    </Row>
                </Container>
            </>
        </section>
    );
};

export default Experience;