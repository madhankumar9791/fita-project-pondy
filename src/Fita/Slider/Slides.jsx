import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import './sildes.css';

import fita1 from '../images/fita1.png';
import fita8 from '../images/fita8.png';
import { Link } from "react-router-dom";
import Topbar from "../startbar/Topbar";

export default function Slides() {
    return (
        <>
            <Topbar />
            
            <Container fluid className="p-0">
                <Carousel className="slider" controls={false} indicators={false} interval={3000} pause={true}>
                    <Carousel.Item>
                        <img src={fita1} alt="Slide 1" className="d-block w-100 carousel-image" />
                        <Carousel.Caption className="text-center">
                            <Row>
                                <Col xs={12}>
                                    <h1 className="text-warning p-2 mb-1">
                                        FITA ACADEMY
                                    </h1>
                                    <h2 style={{color:"white",fontSize:"40px", fontWeight:"bold"}}>
                                        Get trained by Industry Experts via Instructor-led Live Online or Classroom Training
                                        with 100% Placement Support.
                                    </h2>
                                    <Link to='/register'>
                                        <Button variant="dark" className="custom-button m-2 p-3">Submit Your CV</Button>
                                    </Link>
                                    <Link to='/applier'>
                                        <Button variant="info" className="custom-button m-2 p-3 ">Recruiter Login</Button>
                                    </Link>
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={fita8} alt="Slide 2" className="d-block w-100 carousel-image" />
                        <Carousel.Caption className="text-center">
                            <Row>
                                <Col xs={12}>
                                    <h1 className="text-warning p-2 mb-1">
                                        FITA ACADEMY
                                    </h1>
                                    <h2 style={{color:"white",fontSize:"40px", fontWeight:"bold"}}>
                                        LIVE Project. Get the opportunity to work on real-time projects that will provide you with deep experience.
                                    </h2>
                                    <Link to='/register'>
                                        <Button variant="dark" className="custom-button m-2 p-3">Submit Your CV</Button>
                                    </Link>
                                    <Link to='/applier'>
                                        <Button variant="info" className="custom-button m-2 p-3">Recruiter Login</Button>
                                    </Link>
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    );
}












