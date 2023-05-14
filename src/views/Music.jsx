import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import './Music.css';
import axios from 'axios';
import logo from './Enterflightment.png';


const uri = 'http://10.5.237.7:8080';
const Songs = () => {
  // const [value, setValue] = useState('');
  const [songs, setSongs] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    getSongs();
  }, [])

  useEffect(() => {
    getPlaylist();
  }, [])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Perform the petition here
  //     getPlaylist();
  //     console.log('Making the petition...');
  //   }, 5000); // Repeat every 2000 milliseconds (2 seconds)

  //   // Clean up the interval on component unmount
  //   return () => clearInterval(interval);
  // }, []);
  
  const getSongs = () => {
    axios.get(uri+'/songs').then((response) => {
      setSongs(response.data);
    });
  }

  const getPlaylist = () => {
    axios.get(uri+'/songs/playlist').then((response) => {
      setPlaylist(response.data);
    });
  }

  // const handleVoteClick = (id) => {
  //   const updatedSongs = songs.map((song) => {
  //     if (song.id === id) {
  //       return { ...song, votes: song.votes + 1, voted: true };
  //     }
  //     return song;
  //   });
  //   setSongs(updatedSongs);
  // };

  return (
    <>
    <div>
      <img className="logo" src={logo} />
    </div>
    <Navbar/>
    <div>
    {/* <button onClick={getSongs}>Get Songs</button> */}
    </div>

    <div className="songs">
      <div className="column1">
      <h1>Songs</h1>
      {songs.map((song) => (
        <SongCard
          key={song.id}
          name={song.title}
          id = {song.id}
          onButtonClick={getPlaylist}
          // votes={song.votes}
          // voted={song.voted}
          // onVoteClick={() => handleVoteClick(song.id)}
        />
      ))}
    </div>
    <div className="column2">
      
      <h2>Playlist</h2>
    {playlist.map((song) => (
        <PlaylistCard
          key={song.id}
          name={song.title}
          id = {song.id}
          // votes={song.votes}
          // voted={song.voted}
          // onVoteClick={() => handleVoteClick(song.id)}
        />
      ))}
    </div>
    </div>
  </>
  );
};
// votes, voted, onVoteClick 
const SongCard = ({name, id, onButtonClick}) => {
  const [isPlaying, setIsPlaying] = useState(false);


  const handlePlayClick = () => {
    setIsPlaying(true);
    axios.put(uri+'/songs/'+id).then(onButtonClick);
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
          {isPlaying ? '' : 'Add to playlist'}
        </button>
      </div>
    </>
  );
};


const PlaylistCard = ({name, id}) => {
  const [isVoted, setIsVoted] = useState(false);
  const [upvotes, setUpvotes] = useState([]);

  useEffect(() => {
    getUpvotes();
  }, [])

  const getUpvotes = () => {
    console.log('Getting upvotes...');
    axios.get(uri+'/songs/upvotes').then((response) => {
      const songId = id; // The songId you want to target
    const songData = response.data.find((data) => data.songID === songId);
    const upvotes = songData ? songData.upvotes : 0;
    setUpvotes(upvotes);
    });
  }

  const handlePlayClick = () => {
    setIsVoted(!isVoted);
  };

  return (
    <>
    
    <div className="playlist-card">
      <h3>{name}</h3>
        <button className="vote-button" onClick={handlePlayClick}>
          {isVoted ? '' : 'Vote'}
        </button>
        <p>Votes: {upvotes}</p>
      </div>
    </>
  );
};


export default Songs;
