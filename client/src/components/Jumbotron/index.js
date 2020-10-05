import React from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';


const styles = {
  backgroundColor: "transparent",
  height: "55vh",
  color: "white"
}

const JumbotronComponent = () => {
  return (
    <div>
      <Jumbotron style={styles}>
      <h1>Share your creativity!</h1>
        <p>
        Welcome to Music eXchange! Please explore the different user profiles to see what content each user has created!
        </p>
        <hr className="my-4" style={{ background: "white"}}/>
        <p>
        In each profile you can make a request to purchase a song, or to purchase a tutorial from the user!
        </p>
        <p>
          <Button variant="outline-light">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  )
}

export default JumbotronComponent;