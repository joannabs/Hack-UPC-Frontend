import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar/Navbar';
import './Music.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faFastForward } from '@fortawesome/free-solid-svg-icons';

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

  const nextSong = () => {
    console.log('Next song');
    axios.get(uri+'/songs/next')
    // .then(() => {
    //   getPlaylist();
    // });
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
    <Navbar/>
    <div>
    {<div style={{ display: 'flex', alignItems: 'center' }}>
      <button style={{ marginLeft: '10px', backgroundColor: '#4D4D4D' }} onClick={nextSong()}>
        {/* <FontAwesomeIcon icon={faFastForward} style={{color: "white"}} /> */}
        next
      </button>
    </div>}
    </div>

    <div className="songs">
      <div className="column1">
      <h1>Songs</h1>
      {songs.length > 0 ?(songs.map((song) => (
        <SongCard
          key={song.id}
          name={song.title}
          id = {song.id}
          onButtonClick={getPlaylist}
          // votes={song.votes}
          // voted={song.voted}
          // onVoteClick={() => handleVoteClick(song.id)}
        />
      ))):(<p>Songs not found</p>)}
    </div>
    <div className="column2">
      
    <h2>Playlist</h2>

      {playlist != null && playlist[0] != null ? (<AudioPlayer songId={playlist[0].id} name={playlist[0].title} artist={playlist[0].artist} />):(<p>-----</p>)}
    {playlist != null ? (playlist.map((song) => (
        <PlaylistCard
          key={song.id}
          name={song.title}
          id = {song.id}
          // votes={song.votes}
          // voted={song.voted}
          // onVoteClick={() => handleVoteClick(song.id)}
        />
      ))):(<p>Playlist is empty</p>)}
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
      console.log(response.data);
      const songData = response.data && response.data.find((data) => data.songid == id);
      const upvotes = songData ? songData.upvotes : 0;
      setUpvotes(upvotes);
    });
  }

  const handlePlayClick = () => {
    if(!isVoted){
      setIsVoted(true);
      setUpvotes(upvotes+1);
      axios.put(uri+'/songs/'+id+'/upvotes');
      const heartButton = document.getElementById('heartButton');
      heartButton.classList.add('heart-button-clicked');
    }
  };

  return (
    <>
      <div className="playlist-card">
        <div className="row">
          <div className="left">
            <h3>{name}</h3>
          </div>
          <div className="right">
          <button className={`heart-button${isVoted ? ' heart-button-clicked' : ''}`}onClick={handlePlayClick}id="heartButton">
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </div>
        {/* <button className="vote-button" onClick={handlePlayClick}>
          {isVoted ? '' : 'Vote'}
        </button> */}
        <p>Votes: {upvotes}</p>
      </div>
  </>
  );
};

function AudioPlayer({ songId, name, artist }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchAudioFile = async () => {
      try {
        const response = await axios.get(uri+`/songs/${songId}/file`, {
          responseType: 'blob',
        });

        const audioBlob = new Blob([response.data], { type: 'audio/mpeg' });
        const audioUrl = URL.createObjectURL(audioBlob);

        if (audioRef.current) {
          audioRef.current.src = audioUrl;
        }
      } catch (error) {
        console.log('Error fetching audio file:', error);
      }
    };

    fetchAudioFile();

    // Clean up the audio URL when component unmounts
    return () => {
      if (audioRef.current) {
        URL.revokeObjectURL(audioRef.current.src);
      }
    };
  }, [songId]);

  return (
    <div>
      <h3>Now playing:</h3>
      <h4>{name} - by {artist}</h4>
      <audio ref={audioRef} controls autoPlay />
    </div>
  );
}


export default Songs;
