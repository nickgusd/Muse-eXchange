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

  console.log(song);
  let songFile = '';
  try {
    songFile = song.file
  } catch(err) {
    console.log('No file')
  }
  return (
    <AudioPlayer style={{width: '100%'}}
      src={song.file}
      onPlay={() => callFunc()}
      layout="stacked-reverse" 
    />
  )
}

export default SmallPlayer;