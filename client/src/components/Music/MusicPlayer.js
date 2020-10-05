import { List } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ListGroup, Table } from 'react-bootstrap';
import Player from './Player';
import musicIcon from '../../assets/svg/music.png';
import songPNG from '../../assets/svg/song.png';
import songSVG from '../../assets/svg/song.svg';

const MusicPlayer = ({songs}) => {

  const [song, setSong] = useState('');
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  return (
    <Container fluid>
      <Row style={{ height: "361px" }} className='border border-secondary'>
        <Col md="auto" className="p-0" style={{ height: "100%" }}>
          <Card className="text-left border-0" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={songSVG} fluid/>
            <Card.Body className='pb-0 pt-0'>
              <Card.Title>Song: {title}</Card.Title>
              <Card.Text>Artist: {author}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="p-0" style={{ height: "100%", overflow: "auto" }}>
          <ListGroup className="w-100 text-left" variant="flush">
            {songs.map(song => 
              <ListGroup.Item action onClick={() => {
                setSong(song.file);
                setAuthor(song.author);
                setTitle(song.title);
              }}>
                {song.title} by {song.author}
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
      <Row className="bg-dark text-light border border-secondary border-top-0">
        <div style={{height: '10vh', background: "grey"}}></div>
        <Player song={song} />
      </Row>
    </Container>
  )
}
export default MusicPlayer;