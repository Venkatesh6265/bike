import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Usedbike = () => {
  return (
    <section id="usedbike">
        <Container>
        <div className='text-center'>
            <h2>Sign In <i class="bi bi-box-arrow-in-right"></i> </h2>
        </div>
        
         <Row className='justify-content-center'>
            <Col md={6} >  
             <Form>
             <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
     
      <Form.Control type="email" placeholder="Enter email" />
      </InputGroup>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
       
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control  type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Col>
    </Row>


    
    </Container>
      
    </section>
  )
}

export default Usedbike
