import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import './Rooms.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Rooms = () => {

    const [rooms, setRooms] = useState([]);
   

    useEffect(() => {
      getRooms();
    }, [])
    
    const getRooms = () => {
      axios.get('http://10.5.237.7:8080/games').then((response) => {
        setRooms(response.data.filter(room => room.user2 === ""));
      });
    }
  
  
    return (
      <>
      <Navbar/>
      <div>
      {/* <button onClick={getSongs}>Get Songs</button> */}
      </div>
      <div className="songs">
        <h1>Game Rooms</h1>
        {rooms.map((room) => (
            
                <RoomCard
                key={room.id}
                name={room.name}
                user={room.user1}
                id={room.id}
                // votes={song.votes}
                // voted={song.voted}
                // onVoteClick={() => handleVoteClick(song.id)}
                /> 
            
        ))}
      </div>
    </>
    );
  };


  const RoomCard = ({ name, user, id}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [value, setValue] = useState('');


    useEffect(() => {
        const storedValue = localStorage.getItem('myVariable');
        if (storedValue) {
          setValue(storedValue);
        }
      }, []);
      
    const handlePlayClick = () => {
      setIsPlaying(!isPlaying);
      const data = {user2: value, name: name, password: "1234"};
      axios.post("http://10.5.237.7:8080/games/"+id, data).then((response) => {
        console.log(response);  
      }, (error) => {
        console.log(error);
      },);

    };
  
    return (
      <>
      
      <div className="song-card">
         <h3>{name}</h3>
         <div className="user"> Player connected: {user}</div>
        {/* <p>Votes: {votes}</p>
        {!voted && (
          <div className="buttons">
            <button className="vote-button" onClick={onVoteClick}>
              Vote
            </button>
          </div>
        )} */}
            <Link to="/games" state={{ idGame: id }} className="nav-link">
                <button className="play-button" onClick={handlePlayClick}>
                    {isPlaying ? 'Disconnect' : 'Connect'}
                </button>
            </Link>
        </div>
      </>
    );
  };
  
  export default Rooms;