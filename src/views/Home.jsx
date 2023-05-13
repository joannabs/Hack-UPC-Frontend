import React from 'react'
import './Home.css';
import music2 from "./music2.jpg";
import { Link } from 'react-router-dom';

const Home = () => (

  <div className='card-container' >
      {/* Card 1 */}
      <Link to="/music" className="card" style={{ backgroundImage: `url(${music2})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="card-content" >
          <p>Music</p>
        </div>
      </Link>
      
      {/* Card 2 */}
      <Link to="/videos" className="card" style={{ backgroundImage: `url(${music2})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="card-content" >
          <p>Videos</p>
        </div>
      </Link>
      
      {/* Card 3 */}
      <Link to="/games" className="card" style={{ backgroundImage: `url(${music2})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="card-content" >
          <p>Games</p>
        </div>
      </Link>
      {/* Card 4 */}
      <Link to="/destination" className="card" style={{ backgroundImage: `url(${music2})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="card-content" >
          <p>Destination</p>
        </div>
      </Link>

    </div>

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