import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './style.css';


 const styles = {
  backgroundColor: "blue !important"
}

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