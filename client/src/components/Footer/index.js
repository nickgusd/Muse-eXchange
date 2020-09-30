import React from 'react';
// import Container from '../Container';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import "./style.css";

const styles ={
  textDecoration: "none",
  color: "white",
}

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light mt-4">
      <Container fluid>
        <div className="d-flex justify-content-between">
          <div>© 2020 Request Line All Rights Reserved</div>
          <Link to="/team" style={styles}>Meet the team</Link>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;