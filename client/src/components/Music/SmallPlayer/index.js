import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './style.css';


const styles = {
  backgroundColor: "blue !important"
}

const SmallPlayer = ({ song }) => {
  // Testing functions in AudioPlayer
  const callFunc = () => {
    console.log('heelo')
  }

  return (
    <AudioPlayer style={{width: '300px'}}
      src={song}
      onPlay={() => callFunc()}
      layout="horizontal-reverse"
      
    />
  )
}

export default SmallPlayer;