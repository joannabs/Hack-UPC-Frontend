import React from 'react';
import './Destination.css';
import paris from './destination/paris.jpg';

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
    <div className="destination">
      <h1>{destination.name}</h1>
      <img src={destination.image} alt={destination.name} />
      <p>{destination.description}</p>
      <h2>Attractions:</h2>
      <ul>
        {destination.attractions.map((attraction, index) => (
          <li key={index}>{attraction}</li>
        ))}
      </ul>
      <h2>Rating: {destination.rating}</h2>
    </div>
  );
};

export default Destination;
