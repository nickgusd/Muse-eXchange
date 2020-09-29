import React from 'react';
import Container from '../Container';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <Container fluid>
        <div>
            <a className="navbar-brand" href="/">Request Line</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Musicians<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Dancers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Tutorials</a>
              </li>
            </ul>
          </div>

          <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/login">Login<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">Sign up</a>
              </li>
            </ul>
          </div>
      </Container>
    </nav>
  )
}

export default Navbar;