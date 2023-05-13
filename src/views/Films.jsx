import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import './Films.css';
const Films = () => {
  const [films, setFilms] = useState([]);
  const url = 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?source_id=tt3398228&source=imdb&country=us';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
    }
  };
  

  useEffect(() => {
    // Simulating API call to fetch films data
    fetch(url, options)
      .then(response => response.json())
      .then(data => setFilms(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
     <Navbar/>
    <div className="films">
      <h1>Films</h1>
      
      {/* {films.map(film => (
        <div key={film.id} className="film">
          <h2>{film.title}</h2>
          <h3>People:</h3>
          <ul>
            {film.people.map(person => (
              <li key={person.id}>{person.name}</li>
            ))}
          </ul>
        </div>
      ))} */}
    </div>
    </>
  );
};

export default Films;
