import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Appbar.css';

const Appbar = () => {
  return (
    <Navbar bg="light" expand="lg" >
     <Container>
    
      <Navbar.Brand href="#home"><h2 className='text-danger'> <span> Bike Dealers</span></h2></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center '>
        <Nav >
          <Nav.Link  href="#home">Home</Nav.Link>
          <Nav.Link href="#newBike">New Bike</Nav.Link> 
          <Nav.Link href="#usedBike"> Used Bike </Nav.Link> 
          <Nav.Link href="#bike Spares">Bike Spares</Nav.Link> 
          <Nav.Link href="#bike Accessories">Bike Accessories</Nav.Link> 
          </Nav>
          </Navbar.Collapse>
          <div className='justify-content-end'>
           < NavDropdown  title="Sign"  id="basic-nav-dropdown">
            <NavDropdown.Item href="#ash"><button>Sign in</button></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2"> <button>Sign up</button></NavDropdown.Item>
           </NavDropdown>
          </div>
          
    
          </Container> 
  </Navbar>
    
      
    
  )
}

export default Appbar
