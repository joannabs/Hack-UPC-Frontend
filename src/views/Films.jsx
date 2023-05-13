import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import './Films.css';
import ReactPlayer from 'react-player';
import logo from './Enterflightment.png';

const Films = () => {
  const [videoUrl, setVideoUrl] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('http://10.5.237.7:8080/video/1')
      .then(response => response.blob())
      .then(data => {
        const videoBlob = new Blob([data], { type: 'video/mp4' });
        const videoUrl = URL.createObjectURL(videoBlob);
        setVideoUrl(videoUrl);
      })
      .catch(error => {
        console.error('Error fetching video data:', error);
      })
      .finally(() => {
        setLoading(false); // Set loading state to false after the API call is complete
      });
  }, []);

  return (
    <>
      <div>
        <img className="logo" src={logo} />
      </div>
      <Navbar />
      <h1 className='film'>Films</h1>
      <h1 className='film1'>Trip's film: Shrek</h1>
      <div className="player-container">
        {loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        ) : (
          videoUrl && (
            <ReactPlayer url={videoUrl} controls width="40%" height="auto" />
          )
        )}
      </div>
    </>
  );
};

export default Films;
