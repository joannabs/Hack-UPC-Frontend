import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cinema from "./cinema.jpg";
import { Row, Col } from 'react-bootstrap';

const Home = () => (
  <Row>
  <Col md={3}>
      <Card>
        <Card.Img variant="top" src={cinema} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Subtitle>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default Home
