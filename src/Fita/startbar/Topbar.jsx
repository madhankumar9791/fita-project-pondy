import React from "react";
import { Container, Row, Col, Button, Carousel, Nav } from "react-bootstrap";
import { IoHome, IoInformationCircle, IoBriefcase, IoPeople, IoChatbubbles, IoMail } from 'react-icons/io5';
import './topbar.css';

import logo from '../images/logo.png';
import fita1 from '../images/fita1.png';
import fita8 from '../images/fita8.png';
import { Link } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";

import About from "../about/About";
import Category from "../category/Category";

export default function Topbar() 
{
    return (
        <>
            <Container fluid className=" bg-dark">
                <Row className="bar align-items-center p-2">
                    <Col xs={2}>
                    <Link to={'/'}>
                        <img src={logo} width={65} height={65} alt="Logo" style={{ borderRadius: '50%',marginLeft:"10px" }} />
                    </Link>                    
                    </Col>

                    <Col xs={7} className="text-white p-2 text-center">
                        <Nav>
                            <Nav.Item >
                                <Nav.Link style={{marginLeft:"10px"}} className="text-white"> <IoHome style={{ marginRight: "5px" }} /> Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style={{marginLeft:"10px"}} className="text-white"><IoInformationCircle style={{ marginRight: "5px" }} /> About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style={{marginLeft:"10px"}} className="text-white"><FaBookReader  style={{ marginRight: "5px" }} /> Catogrey</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style={{marginLeft:"10px"}} className="text-white"><IoBriefcase style={{ marginRight: "5px" }} />Jobs</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style={{marginLeft:"10px"}} className="text-white"> <IoPeople style={{ marginRight: "5px" }} />Recruiter</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style={{marginLeft:"10px"}} className="text-white"> <IoChatbubbles style={{ marginRight: "5px" }} />Testimonial</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style={{marginLeft:"10px"}} className="text-white"> <IoMail style={{ marginRight: "5px" }} />Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>

                    <Col xs={3} className="text-center">
                    <Link to={'/register'}>
                        <Button variant="success" className="custom-button p-2 m-3 ">Register</Button>
                    </Link>  
                    <Link to={'/applier'}>
                        <Button variant="warning" className="custom-button p-2 m-3 ">Apply Jobs</Button>
                    </Link>
                    </Col>
                </Row>

                
                <Carousel className="slider" controls={false} indicators={false} interval={3000} pause={true}>
                <Carousel.Item>
                    <img src={fita1} alt="Slide 2" className="d-block w-100 carousel-image" style={{height:"700px"}} />
                    <Carousel.Caption style={{paddingBottom:"30px"}}>
                        <Row>
                            <Col xs={12}>
                            <h1 className="text-warning p-1" 
                            style={{fontStyle:"italic",marginRight:"50px",fontFamily:"serif", fontWeight:"bold",fontSize:"50px"}}> 
                            FITA ACADEMY 
                            </h1>
                            <h2 className="p-1" style={{color:"white",fontSize:"40px", fontWeight:"bold"}}>
                                Get trained by Industry Experts via
                            Instructor-led Live Online or Classroom Training
                            with 100% Placement Support.
                            </h2>
                            <Link to={'/register'}>
                            <Button variant="dark" className="custom-button m-2 text-white p-3 mt-3 ">Register</Button>
                            </Link>
                            <Link to={'/applier'}>
                            <Button variant="primary" className="custom-button m-2 text-white p-3 mt-3 ">Apply Jobs</Button>
                            </Link>
                            </Col>
                        </Row>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                    <img src={fita8} alt="Slide 2" className="d-block w-100 carousel-image" style={{height:"700px"}} />
                    <Carousel.Caption style={{paddingBottom:"30px"}}>
                        <Row>
                            <Col xs={12}>
                            <h1 className="text-warning p-1" 
                            style={{fontStyle:"italic",marginRight:"50px",fontFamily:"serif", fontWeight:"bold",fontSize:"50px"}}> 
                            FITA ACADEMY 
                            </h1>
                            <h2 className="p-1" style={{color:"white",fontSize:"40px", fontWeight:"bold"}}>
                            LIVE Project. Get the opportunity to work on real-time projects that will provide you with deep experience.
                            </h2>
                            <Link to={'/register'}>
                            <Button variant="dark" className="custom-button m-2 text-white p-3 mt-3 ">Register</Button>
                            </Link>
                            <Link to={'/applier'}>
                            <Button variant="primary" className="custom-button m-2 text-white p-3 mt-3 ">Apply Jobs</Button>
                            </Link>
                            </Col>
                        </Row>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </Container>
           
            <About/>
            <Category/>
        </>
    );
}











