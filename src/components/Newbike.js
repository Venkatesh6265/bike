import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';


const Newbike = () => {
    
        const [newbike] =useState([1,2,3,4,5,6])
        const [modalShow, setModalShow] = React.useState(false);

  return(
   

    <section id='#newbike' className='bg-light'>
        <Container>
            <div className='text-center'>
            <h3 className='text-warning mt-2 px-5'>Buy a New Electric Super Bike</h3> 
             </div>
           <Row>
            {
            newbike.map((item) =>{
               

                
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  

                 return(         
                     <Col md={4} lag={4}>
                        <>

                    <Card className='m-3'>
              <Card.Img variant="top" src={require('../Assets/img1.webp')} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className='text-center'>
                <Button variant="primary" onClick={() => setModalShow(true)}>Go somewhere</Button>

                </div>
                
              </Card.Body>
            </Card>
            <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
            </>
                    </Col>
                    
                )
            }
            )
            }
        
  
  
  
  
  
  
  
  
  
  
  
  

  
           </Row>
        </Container>
      
    </section>
  )
}

export default Newbike
