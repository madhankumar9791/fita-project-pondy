import React, { useState } from 'react';
import './applier.css';

import logo from '../images/logo.png';
import { Link, useNavigate } from "react-router-dom";
import Topbar from '../startbar/Topbar';
import { Container } from 'react-bootstrap';

export default function Applier()
{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const navi = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  
  const defaultUsername = "user";
  const defaultPassword = "user01";

  if (username === defaultUsername && password === defaultPassword) {
    navi('/admin');
  } else {
    alert("Invalid credentials");
  }

  console.log('Username:', username);
  console.log('Password:', password);
  setUsername('');
  setPassword('');
};

  return (
    <>

    <Topbar />
    
    <Container fluid>
    <div className='recruiter p-5' style={{marginTop:"140px"}}>
    <h1 className='text-danger'> Recruiter Login </h1>
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
    </Container>
    </>
  );
};









