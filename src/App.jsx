import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoJS from './components/VideoJS'

function App() {
  const playerRef = useRef(null);
  const videoLink = "https://res.cloudinary.com/dwjnxcjwp/video/upload/sp_auto/v1724757623/project/videos/sample_1280x720_surfing_with_audio_ldg4xi.m3u8";

  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL"
      }
    ]
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });

  };

  return (
    <>
      <h1>Video player</h1>
      <VideoJS
        options={videoPlayerOptions}
      />
    </>
  )
}

export default App
