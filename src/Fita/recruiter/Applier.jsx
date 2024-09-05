import React, { useState } from 'react';
import './applier.css';
import Topbar from '../startbar/Topbar';
import { Container } from 'react-bootstrap';

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









