
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className="footer bg-dark text-white py-3">
      <Row className="d-flex justify-content-between">
        <Col md="6" className="text-center text-md-left">
          <h3 style={{fontSize:'18px'}}>Copyright © 2024 Fita academy</h3>
        </Col>
        <Col md="6" className="text-center text-md-right">
          <h3 style={{fontSize:'18px'}}>Designed and Developed by Team</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
