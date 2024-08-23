import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-body-secondary   py-3">
      <Container>
        <Row>
          <Col md={12}>
            <p className="mb-0 text-center ">© ITI Lab React</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );

  
}
