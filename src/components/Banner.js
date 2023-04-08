import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'

const Banner = () => {
  return (
    <Container >
        <Row className='justify-content-center'>
            <Col lg={8}>
              <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 "
                  src={require('../Assets/imge3.jpg')}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Kinetic's SuperBike</h3>
            <p>
                    </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 "
                  src={require('../Assets/imge.jpg')}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3> hello </h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 "
                  src={require('../Assets/img5.webp')}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3> Electric Superbike </h3>
                  <p>
                    
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </Col>
        </Row>
        <div className='text-center fw-bold'>
            <h2 className='display-6 mt-2 text-danger'> Electric Bikes All Pollusion Less Bike</h2>
            <p className='lead text-muted'>An electric bike is a motorized motorbike with an integrated electric motor used to assist propulsion. Many kinds of e-bikes are available worldwide, but they generally fall into two broad categories: bikes that assist the rider's pedal-power and bikes that add a throttle, integrating moped-style functionality. </p>
        </div>
    </Container>
    // <img src={require('../Assets/img2.jpg')} alt=''></img>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
 )
}

export default Banner
