import React from 'react';
import Container from '../Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'


const styles = {
  link: {
    color: "white",
    textDecoration: 'none'
  },
}

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Link to="/">
        <Navbar.Brand>Request Line</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" style={styles.link}>
            <Link to="/" style={styles.link}>Home</Link>
          </Nav.Link>
          <Nav.Link href="/" style={styles.link}>
            <Link to="/" style={styles.link}>Musicians</Link>
          </Nav.Link>
          <Nav.Link href="/" style={styles.link}>
            <Link to="/" style={styles.link}>Dancers</Link>
          </Nav.Link>
          <Nav.Link href="/" style={styles.link}>
            <Link to="/" style={styles.link}>Artist</Link>
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
      <Nav className="mr-auto">
        <Nav.Link href="/" style={styles.link}>
          <Link to="/login" style={styles.link}>Login</Link>
        </Nav.Link>
        <Nav.Link href="/" style={styles.link}>
          <Link to="/login" style={styles.link}>Sign up</Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavbarComponent;