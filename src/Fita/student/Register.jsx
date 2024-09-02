import React, { useState } from "react";
import { Container, Row, Col, Button,Nav } from "react-bootstrap";
import { IoHome, IoInformationCircle, IoBriefcase, IoPeople, IoChatbubbles, IoMail } from 'react-icons/io5';
import './register.css'; 

import logo from '../images/logo.png';
import { Link } from "react-router-dom";

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        qualification: '',
        passingOutYear: '',
        resume: null,
        course: '',
        experience: '',
        photo: null,
        position: '',
        portfolioLink: ''
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };

    return (
    <>
        <Container fluid className=" bg-dark">
        <Row className="bar align-items-center p-2">
            <Col xs={3}>
            <Link to={'/'}>
                <img src={logo} width={65} height={65} alt="Logo" style={{ borderRadius: '50%',marginLeft:"10px" }} />
            </Link>
            </Col>

            <Col xs={6} className="text-white p-2 text-center">
                <Nav>
                    <Nav.Item >
                        <Nav.Link style={{marginLeft:"10px"}} className="text-white"> <IoHome style={{ marginRight: "5px" }} /> Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={{marginLeft:"10px"}} className="text-white"><IoInformationCircle style={{ marginRight: "5px" }} /> About</Nav.Link>
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

        </Container>

        <Container style={{marginTop:"120px"}}>
            <Row className="justify-content-center">
                <Col md={8}>
                    <h1 className="m-2 ">Fita Students Form</h1>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <div className="form-group">
                                    <label className="form-label required">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        style={{ padding: "15px",width:"97%" }}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label required">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        style={{ padding: "15px",width:"97%" }}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label required">Phone Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your phone number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        style={{ padding: "15px",width:"97%" }}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label required">Qualification</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your qualification"
                                        name="qualification"
                                        value={formData.qualification}
                                        onChange={handleChange}
                                        required
                                        style={{ padding: "15px",width:"97%" }}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label required">Passing Out Year</label>
                                    <select
                                        className="form-control"
                                        name="passingOutYear"
                                        value={formData.passingOutYear}
                                        onChange={handleChange}
                                        required
                                        style={{ padding: "15px",width:"97%" }}
                                    >
                                        <option value="">Select Year</option>
                                        {[...Array(30).keys()].map(year => {
                                            const yearValue = new Date().getFullYear() - year;
                                            return (
                                                <option key={yearValue} value={yearValue}>
                                                    {yearValue}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label required">Resume (PDF)</label>
                                    <input 
                                        type="file"
                                        className="form-control"
                                        accept=".pdf"
                                        name="resume"
                                        onChange={handleChange}
                                        required
                                        style={{ padding: "15px",width:"97%" }}
                                    />
                                </div>
                            </Col>

                            <Col md={6}>
                                <div className="form-group">
                                    <label className="form-label required">Course</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter the course you're applying for"
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        required
                                        style={{ padding: "15px",width:"98%" }}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label required">Experience</label>
                                    <select
                                        className="form-control"
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        required
                                        style={{ padding: "15px",width:"98%" }}
                                    >
                                        <option value="">Select Experience Level</option>
                                        <option value="0-1">0-1 years</option>
                                        <option value="1-3">1-3 years</option>
                                        <option value="3-5">3-5 years</option>
                                        <option value="5+">5+ years</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label required">Photo</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        accept="image/*"
                                        name="photo"
                                        onChange={handleChange}
                                        required
                                        style={{ padding: "15px",width:"98%" }}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label required">Position</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter the position you're applying for"
                                        name="position"
                                        value={formData.position}
                                        onChange={handleChange}
                                        required
                                        style={{ padding: "15px",width:"98%" }}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Portfolio Link (Optional)</label>
                                    <input
                                        type="url"
                                        className="form-control"
                                        placeholder="Enter your portfolio link"
                                        name="portfolioLink"
                                        value={formData.portfolioLink}
                                        onChange={handleChange}
                                        style={{ padding: "15px",width:"98%" }}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Button variant="warning" className="mt-2 p-3" style={{marginLeft:"25%", width:"50%",borderRadius:"25px"}} type="submit">
                            Apply
                        </Button>
                    </form>
                </Col>
            </Row>
        </Container>
        </>
    );
}
