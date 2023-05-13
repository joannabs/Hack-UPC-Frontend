import React from 'react'
import Button from 'react-bootstrap/Button';
import cinema from "./cinema.jpg";
import { Row, Col, Container, Card, CardImg } from 'react-bootstrap';

const Home = () => (
  <Container className='p-4'> 
  <Row> 
    <Col md="4">  
      <Card>  
        <Card.Img variant="top" src={cinema} />  
        <Card.Body>  
          <Card.Title>Card Title</Card.Title>  
          <Card.Text>  
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est  
          </Card.Text>  
          <Button variant="primary">Read More</Button>  
        </Card.Body>  
      </Card>  
    </Col> 
  </Row> 
  </Container>  
);

export default Home
