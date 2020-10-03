import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './style.css';

const Player = ({song}) => {
  // Testing functions in AudioPlayer
  const callFunc = () => {
    console.log('heelo')
  }

  return (
    <AudioPlayer
      src={song}
      onPlay={() => callFunc()}
    />
  )
}

export default Player;