import React,{useState} from 'react';
import ProductModal from '../ProductModal'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const styles = {
  link: {
    color: "white",
    textDecoration: 'none'
  },
}

const NavbarComponent = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
          <Nav.Link onClick={handleShow} style={styles.link}>
            Sell
          </Nav.Link>
          <Nav.Link href="/" style={styles.link}>
            <Link to="/" style={styles.link}>Artist</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav className="mr-auto">
        <Nav.Link href="/" style={styles.link}>
          <Link to="/login" style={styles.link}>Login</Link>
        </Nav.Link>
        <Nav.Link href="/" style={styles.link}>
          <Link to="/login" style={styles.link}>Sign up</Link>
        </Nav.Link>
      </Nav>
      <ProductModal state={show} open={handleShow} close={handleClose}/>
    </Navbar>

  )
}

export default NavbarComponent;