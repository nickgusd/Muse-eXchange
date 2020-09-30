import React from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import guitarImage from './image/theatre-swing.png'

const styles = {
  backgroundImage: `url(${guitarImage})`,
  height: "55vh",
  color: "white"
}

const JumbotronComponent = () => {
  return (
    <div style={{background: "black"}}>
      <Jumbotron style={styles}>
      <h1>Share your creativity!</h1>
        <p>
        TLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue placerat facilisis. Nullam dapibus justo sagittis, feugiat odio sed, feugiat metus.
        </p>
        <hr className="my-4" style={{ background: "white"}}/>
        <p>
        TLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue placerat facilisis. Nullam dapibus justo sagittis, feugiat odio sed, feugiat metus.
        </p>
        <p>
          <Button variant="outline-light">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  )
}

export default JumbotronComponent;