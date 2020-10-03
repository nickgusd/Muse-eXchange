import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Table } from 'react-bootstrap';
import Player from './Player';

const MusicPlayer = () => {

  const [song, setSong] = useState('https://res.cloudinary.com/dxp5wxx2f/raw/upload/v1601693662/MusiceXchange/Porcelain_Cover_lsu9pb.m4a');

  return (
    <Container fluid>
      <Row style={{ height: "361px" }} className='border border-secondary'>
        <Col md="auto" className="p-0" style={{ height: "100%" }}>
          <Card className="text-left border-0" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://res.cloudinary.com/dxp5wxx2f/image/upload/v1601671291/MusiceXchange/Screen_Shot_2020-09-27_at_1.51.31_AM_loeh6c.png" />
            <Card.Body className='pb-0'>
              <Card.Title>Song Title</Card.Title>
              <Card.Text>Artist:</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="p-0" style={{ height: "100%", overflow: "auto" }}>
          <ListGroup className="w-100 text-left">
            <ListGroup.Item onClick={() => setSong('https://res.cloudinary.com/dxp5wxx2f/raw/upload/v1601693662/MusiceXchange/Porcelain_Cover_lsu9pb.m4a')}>Porcelain Cover by Edward Reyes</ListGroup.Item>
            <ListGroup.Item onClick={() => setSong('https://res.cloudinary.com/dxp5wxx2f/raw/upload/v1601694385/MusiceXchange/Air_l3mhye.m4a')}>Air by Edward Reyes</ListGroup.Item>
            <ListGroup.Item>Song: -- by --</ListGroup.Item>
            <ListGroup.Item>Song: -- by --</ListGroup.Item>
            <ListGroup.Item>Song: -- by --</ListGroup.Item>
            <ListGroup.Item>Song: -- by --</ListGroup.Item>
            <ListGroup.Item>Song: -- by --</ListGroup.Item>
            <ListGroup.Item>Song: -- by --</ListGroup.Item>
            <ListGroup.Item>Song: -- by --</ListGroup.Item>
            <ListGroup.Item>Song: -- by --</ListGroup.Item>
            <ListGroup.Item>Song: -- by --</ListGroup.Item>
            <ListGroup.Item>Song: -- by --</ListGroup.Item>
            <ListGroup.Item>Song: -- by --</ListGroup.Item>
            <ListGroup.Item>Song: -- by --</ListGroup.Item>
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