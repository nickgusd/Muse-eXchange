import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
const MusicPlayer = () => {
  return (
    <Container fluid>
      <Row style={{ height: "361px" }}>
        <Col md="auto"className="p-0" style={{ height: "100%" }}>
          <Card className="text-left border-0" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://res.cloudinary.com/dxp5wxx2f/image/upload/v1601671291/MusiceXchange/Screen_Shot_2020-09-27_at_1.51.31_AM_loeh6c.png" />
            <Card.Body>
              <Card.Title>Song Title</Card.Title>
              <Card.Text>Artist:</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="p-0" style={{height: "100%", overflow: "auto" }}>
          <Table striped bordered hover size="sm" variant="light" className="w-100 text-left">
            <thead>
              <tr>
                <th></th>
                <th>Song</th>
                <th>Artist</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Song</td>
                <td>Artist</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Song</td>
                <td>Artist</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Song</td>
                <td>Artist</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Song</td>
                <td>Artist</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Song</td>
                <td>Artist</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Song</td>
                <td>Artist</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Song</td>
                <td>Artist</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Song</td>
                <td>Artist</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Song</td>
                <td>Artist</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Song</td>
                <td>Artist</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Song</td>
                <td>Artist</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Song</td>
                <td>Artist</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Song</td>
                <td>Artist</td>
              </tr>
              <tr>
                <td>14</td>
                <td>Song</td>
                <td>Artist</td>
              </tr>
              <tr>
                <td>15</td>
                <td>Song</td>
                <td>Artist</td>
              </tr>
            </tbody>
          </Table>
          {/* <ListGroup className="w-100 text-left">
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
            <ListGroup.Item>Song: -- by --</ListGroup.Item>
            <ListGroup.Item>Song: -- by --</ListGroup.Item>
          </ListGroup> */}
        </Col>
      </Row>
      <Row className="bg-dark text-light" style={{height: "20vh"}}>
        <div>Media Player here</div>
      </Row>
    </Container>
  )
}
export default MusicPlayer;