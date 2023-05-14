import React from 'react';
import './Destination.css';
import paris from './destination/paris.jpg';
import Navbar from '../components/Navbar/Navbar';
import logo from './Enterflightment.png';
import {Col} from 'react-bootstrap'


const Destination = () => {
  
  const destination = {
    name: 'Paris',
    description: 'The city of love and lights',
    image: paris,
    rating: 4.8,
    attractions: [
      'Eiffel Tower',
      'Louvre Museum',
      'Notre-Dame Cathedral',
      'Champs-Élysées',
    ],
  };

  return (
    <>
     <div>
        <img className="logo" src={logo} />
      </div>
    <Navbar/>
    <div className="destination">
      <h1>{destination.name}</h1>
      <p>{destination.description}</p>
      <img src={destination.image} alt={destination.name} />
      <Col>
      <h2>Attractions</h2>
      <ul>
        {destination.attractions.map((attraction, index) => (
          <li key={index}>{attraction}</li>
        ))}
      </ul>
      </Col>
    </div>
    </>
  );
};

export default Destination;
