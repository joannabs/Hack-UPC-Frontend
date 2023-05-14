import { useEffect, useState } from 'react';
import './Home.css';
import music3 from "./music3.jpg";
import destination from "./destination.jpg";
import movie from "./movie.jpg";
import games from "./games.jpg";
import {useLocation, Link} from 'react-router-dom';
import logo from './Enterflightment.png';

const Home = () => {

  const [value, setValue] = useState('');

  // const location = useLocation()
  // const { name } = location.state

  useEffect(() => {
    const storedValue = localStorage.getItem('myVariable');
    if (storedValue) {
      setValue(storedValue);
    }
  }, []);

  return(
    <>
     <div>
        <img className="logo" src={logo} />
      </div>
      <div>
        <p className='welcome'>Welcome, {value}</p> 
      </div>   
      <div className='card-container' >
        {/* Card 1 */}
        <Link to="/music" className="card" style={{ backgroundImage: `url(${music3})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="card-content" >
            <p>Music</p>
          </div>
        </Link>
        
        {/* Card 2 */}
        <Link to="/films" className="card" style={{ backgroundImage: `url(${movie})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="card-content" >
            <p>Films</p>
          </div>
        </Link>
        
        {/* Card 3 */}
        <Link to="/rooms" className="card" style={{ backgroundImage: `url(${games})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="card-content" >
            <p>Game Rooms</p>
          </div>
        </Link>
        {/* Card 4 */}
        <Link to="/destination" className="card" style={{ backgroundImage: `url(${destination})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="card-content" >
            <p>Destination</p>
          </div>
        </Link>

      </div>
      </>
  );
}

export default Home;


