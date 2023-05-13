import React from 'react'
import './Home.css';
import music3 from "./music3.jpg";
import destination from "./destination.jpg";
import movie from "./movie.jpg";
import games from "./games.jpg";
import { Link } from 'react-router-dom';
import logo from './Enterflightment.png';

const Home = () => (
  <>
  <div>
    <img className="logo" src={logo} />
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
      <Link to="/games" className="card" style={{ backgroundImage: `url(${games})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="card-content" >
          <p>Games</p>
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

export default Home


  // <Row>
  // <Col md={3}>
  //     <Card>
  //       <Card.Img variant="top" src={cinema} />
  //       <Card.Body>
  //         <Card.Title>Card Title</Card.Title>
  //         <Card.Subtitle>
  //           Some quick example text to build on the card title and make up the
  //           bulk of the card's content.
  //         </Card.Subtitle>
  //         <Button variant="primary">Go somewhere</Button>
  //       </Card.Body>
  //     </Card>
  //   </Col>
  // </Row>