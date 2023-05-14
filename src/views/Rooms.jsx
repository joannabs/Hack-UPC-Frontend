import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import './Rooms.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Rooms = () => {

    const [rooms, setRooms] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedValue = localStorage.getItem('myVariable');
        if (storedValue) {
          setValue(storedValue);
        }
        
      }, []);
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };

    useEffect(() => {
      getRooms();
    }, [])
    
    const getRooms = () => {
      axios.get('http://10.5.237.7:8080/games').then((response) => {
        setRooms(response.data.filter(room => room.user2 === ""));
      });
    }

//Navigate("/games", {state: { idGame: joc.id }});

    const createRoom = () => {
        axios.post('http://10.5.237.7:8080/games', {
            name: inputValue,
            user1: value,
            password: "1234"
    }).then((response) => {
        console.log(response);
        const joc = response.data
        console.log(joc.id);
        console.log(joc)
        navigate("/games", {state: { game: joc }});
    }, (error) => {
        console.log(error);
    },);
    }
  
  
    return (
      <>
      <Navbar/>
      <div>
      {/* <button onClick={getSongs}>Get Songs</button> */}
      </div>
      <div className="rooms">
        <h1>Game Rooms</h1>
        </div>
        <div className="buttons">
            <input className='myInput' type="text" placeholder="Room Name" onChange={handleInputChange}></input>
            <button className="button" onClick={createRoom}>Create Room</button>
            {/* <Link to="/games" state={{ idGame: id }}>
                <button className="button">Create Room</button>
            </Link> */}
        </div>
        <br></br>
        <br></br>
        <div className="rooms">
            <h4>Rooms available:</h4>
        </div>
        {rooms.map((room) => (
            
                <RoomCard
                key={room.id}
                game={room}
                //user={room.user1}
                //id={room.id}
                // votes={song.votes}
                // voted={song.voted}
                // onVoteClick={() => handleVoteClick(song.id)}
                /> 
            
        ))}
      
    </>
    );
  };


  const RoomCard = ({ game }) => {
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
      const data = {user2: value, name: game.name, password: "1234"};
      axios.post("http://10.5.237.7:8080/games/"+game.id, data).then((response) => {
        console.log(response);  
      }, (error) => {
        console.log(error);
      },);

    };
  
    return (
      <>
      
      <div className="song-card">
         <h3>{game.name}</h3>
         <div className="user"> Player connected: {game.user1}</div>
        {/* <p>Votes: {votes}</p>
        {!voted && (
          <div className="buttons">
            <button className="vote-button" onClick={onVoteClick}>
              Vote
            </button>
          </div>
        )} */}
            <Link to="/games" state={{ game: game }} className="nav-link">
                <button className="play-button" onClick={handlePlayClick}>
                    {isPlaying ? 'Disconnect' : 'Connect'}
                </button>
            </Link>
        </div>
      </>
    );
  };
  
  export default Rooms;