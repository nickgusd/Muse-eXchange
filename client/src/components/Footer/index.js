import React from 'react';
import Container from '../Container';
import "./style.css";
const Footer = () => {
  return (
    <footer className="footer bg-dark text-light mt-4">
      <Container fluid>
        <div>
          <div>© 2020 Request Line All Rights Reserved</div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;