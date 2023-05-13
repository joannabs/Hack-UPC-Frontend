import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import './Music.css';


const Songs = () => {
  const initialSongs = [
    { id: 1, name: 'Song 1', votes: 0 },
    { id: 2, name: 'Song 2', votes: 0 },
    { id: 3, name: 'Song 3', votes: 0 },
  ];

  const [songs, setSongs] = useState(initialSongs);

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
    <div className="songs">
      <h1>Songs</h1>
      {songs.map((song) => (
        <SongCard
          key={song.id}
          name={song.name}
          votes={song.votes}
          voted={song.voted}
          onVoteClick={() => handleVoteClick(song.id)}
        />
      ))}
    </div>
  </>
  );
};

const SongCard = ({ name, votes, voted, onVoteClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
    
    <div className="song-card">
       <h3>{name}</h3>
      <p>Votes: {votes}</p>
      {!voted && (
        <div className="buttons">
          <button className="vote-button" onClick={onVoteClick}>
            Vote
          </button>
        </div>
      )}
        <button className="play-button" onClick={handlePlayClick}>
          {isPlaying ? 'Delete from playlist' : 'Add to playlist'}
        </button>
      </div>
    </>
  );
};


export default Songs;
