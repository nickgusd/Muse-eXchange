import React,{useState} from 'react';
import Container from '../Container';
import ProductModal from '../ProductModal'

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                <a className="nav-link" href="#">Tutorials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " onClick={handleShow}>Sell</a>
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
      <ProductModal state={show} open={handleShow} close={handleClose}/>
    </nav>
  )
}

export default Navbar;