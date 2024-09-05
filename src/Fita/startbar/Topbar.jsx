import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { IoHome, IoInformationCircle, IoBriefcase, IoPeople, IoChatbubbles, IoMail } from 'react-icons/io5';
import './topbar.css';

import logo from '../images/logo.png';
import fita1 from '../images/fita1.png';
import fita8 from '../images/fita8.png';
import { Link } from "react-router-dom";

import { FaBookReader } from "react-icons/fa";
import { Link } from "react-router-dom";
import './topbar.css';
import logo1 from '../images/logo1.png';
 
export default function Topbar() {
 
import About from "../about/About";
import Category from "../category/Category";
import Menu from "../placement/Menu";
import Clients from '../testmonial/Clients'
import Footer from "../footer/Footer";
export default function Topbar() 
 
    return (
        <Navbar className="bg-dark navbar-custom" expand="md" fixed="top">
            <Container className="mb-4">
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img src={logo1} width={100} height={65} alt="Logo" className="logo " style={{marginRight:"70px"}} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto nav-links text-end">
                        <Nav.Link as={Link} to="/" className="text-white">
                            <IoHome style={{ marginRight: "5px" }} /> Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" className="text-white">
                            <IoInformationCircle style={{ marginRight: "5px" }} /> About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/category" className="text-white">
                            <FaBookReader style={{ marginRight: "5px" }} /> Category
                        </Nav.Link>
                        <Nav.Link as={Link} to="/register" className="text-white">
                            <IoBriefcase style={{ marginRight: "5px" }} /> Jobs
                        </Nav.Link>
                        <Nav.Link as={Link} to="/applier" className="text-white">
                            <IoPeople style={{ marginRight: "5px" }} /> Recruiter
                        </Nav.Link>
                        <Nav.Link as={Link} to="/testimonial" className="text-white">
                            <IoChatbubbles style={{ marginRight: "5px" }} /> Testimonial
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="text-white">
                            <IoMail style={{ marginRight: "5px" }} /> Contact
                        </Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Link to="/register">
                            <Button variant="success" className="custom-button p-2 m-1">Submit Your CV</Button>
                        </Link>
                        <Link to="/applier">
                            <Button variant="warning" className="custom-button p-2 m-1">Recruiter Login</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

           
            <About/>
            <Category/>
            <Menu/>
            <Clients/>
            <Footer/>
        </>

    );
}
