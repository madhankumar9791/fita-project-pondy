import React, { useState } from 'react';
import { Container, Row, Col, Button, Carousel, Nav } from "react-bootstrap";
import { IoHome, IoInformationCircle, IoBriefcase, IoPeople, IoChatbubbles, IoMail } from 'react-icons/io5';
import './applier.css';

import logo from '../images/logo.png';
import { Link } from "react-router-dom";

export default function Applier()
{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Please fill in both fields');
      return;
    }
    console.log('Username:', username);
    console.log('Password:', password);
    setUsername('');
    setPassword('');
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

             
    <div className='recruiter p-5' style={{marginTop:"140px"}}>
    <h1 className='text-danger'> Recruiter Form </h1>
    <form  onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input 
          type="email" 
          placeholder='User Name'          
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          placeholder='User Password'          
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <button type="submit" className='mt-2' style={{marginLeft:"13px",borderRadius:"25px"}}>Login</button>
      <div>
          <a href="#" className='forgot-password'>Forget Password?</a>
        </div>
        <div className='sign-up-link'>
            <p>Don't have an account? <a href="#">Sign up</a></p>
          </div>
    </form>
    </div>
    </>
  );
};









