import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import './Music.css';
import axios from 'axios';

const Songs = () => {
  const [value, setValue] = useState('');
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongs();
  }, [])
  //const onChange = ({ target }) => setValue(target.value);
  
  const getSongs = () => {
    axios.get('http://10.5.237.7:8080/songs').then((response) => {
      setSongs(response.data);
    });
  }

  const handleVoteClick = (id) => {
    const updatedSongs = songs.map((song) => {
      if (song.id === id) {
        return { ...song, votes: song.votes + 1, voted: true };
      }
      return song;
    });
    setSongs(updatedSongs);
  };

  return (
    <>
    <Navbar/>
    <div>
    {/* <button onClick={getSongs}>Get Songs</button> */}
    </div>
    <div className="songs">
      <h1>Songs</h1>
      {songs.map((song) => (
        <SongCard
          key={song.id}
          name={song.title}
          // votes={song.votes}
          // voted={song.voted}
          // onVoteClick={() => handleVoteClick(song.id)}
        />
      ))}
    </div>
  </>
  );
};
// votes, voted, onVoteClick 
const SongCard = ({ name}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
    
    <div className="song-card">
       <h3>{name}</h3>
      {/* <p>Votes: {votes}</p>
      {!voted && (
        <div className="buttons">
          <button className="vote-button" onClick={onVoteClick}>
            Vote
          </button>
        </div>
      )} */}
        <button className="play-button" onClick={handlePlayClick}>
          {isPlaying ? 'Delete from playlist' : 'Add to playlist'}
        </button>
      </div>
    </>
  );
};


export default Songs;
