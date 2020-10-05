import React from 'react';
// import Container from '../Container';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import "./style.css";

const styles ={
  textDecoration: "none",
  color: "white",
  fontSize: "20px"
}


// Footer
const Footer = () => {
  return (
    <footer className="footer bg-black text-light mt-4" style={{height: "50px"}}>
      <Container fluid>
        <div className="d-flex justify-content-between" style={{borderStyle: "none"}}>
          <div style={styles} className="rights">© 2020 Music eXchange All Rights Reserved</div>
          <Link to="/team" style={styles} className="rights">Meet the team</Link>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;