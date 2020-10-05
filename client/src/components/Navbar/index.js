
import React, { useState, useEffect, useRef } from 'react';
import Container from '../Container';


import ProductModal from '../ProductModal'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'
import API from '../../utils/API';
import { useHistory } from "react-router-dom";



const styles = {
  link: {
    color: "white",
    textDecoration: 'none'
  },
  X: {
    color: "#ff416c"
  }
}

const NavbarComponent = ({handleLogout}) => {
  const [search, setSearch] = useState();
  const [result, setResult] = useState([]);
  const history = useHistory();
  const inputRef = useRef();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  useEffect(() => {
    runSearch()
    console.log("what component am i in??" + result)
  }, []);



  const runSearch = () => {
    API.getSavedUsers()
    .then(res => {
      setResult(res.data)
  
      console.log(res)
    })
    .catch(err => console.log(err))
  };

  const handleInputChange = event => {
    const { value } = event.target
    setSearch(value);
    }
  const handleFormSubmit = event => {
      event.preventDefault();
      const filterSearch = result.filter(user => user.username === search)
      
     if (filterSearch.length === 0) {
       console.log("No entries Found")
     } else {

      history.push(`/profile/${filterSearch[0].username}`)
      inputRef.current.value = "";

    }

    //  window.location.reload()
      // this.renderRedirect()
      // this.setRedirect(this.state.results.username)
    
      // this.setRedirect()

    } 

    

    return (
      <Navbar bg="black" variant="dark" expand="lg">
        <Link to="/">
          <Navbar.Brand>Music e<span style={styles.X} >X</span>change</Navbar.Brand>
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
          </Nav>
          <Form inline>
            <input type="text" placeholder="Search"  className="mr-sm-2" list="data" onChange={handleInputChange} ref={inputRef} style={{borderRadius: "3%"}}/>
  
            <datalist id="data">
            {result.map(item =>
            <option key={item._id} value={item.username} />
           )}
            </datalist>
  
            <Button variant="none" style={{background: "#ff416c", color: "white"}} onClick={handleFormSubmit} >Search</Button>
           {/* <Link to={`/profile/${this.state.results.username}`}>
            <Button variant="outline-success" onClick={this.handleFormSubmit}>Search</Button>
              </Link> */}
  
              {/* <div>
          {this.renderRedirect()}
          <button onClick={this.setRedirect}>Redirect</button>
         </div> */}
          </Form>
        </Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link href="/" style={styles.link}>
              <Link to="/account" style={styles.link}>Account</Link>
          </Nav.Link>
          <Nav.Link href="/" style={styles.link}>
            <Link to="/" onClick={handleLogout} style={styles.link}>Log Out</Link>
          </Nav.Link>
        </Nav>
        <ProductModal state={show} open={handleShow} close={handleClose}/>
      </Navbar>
    )
  
}

// class NavbarComponent extends React.Component {
  
// // const styles = {
// //   link: {
// //     color: "white",
// //     textDecoration: 'none'
// //   },
// // }

// state = {
//   search: "",
//   results: [],
//   redirect: false,
//   value: ""
// }

// // setRedirect = (username) => {
// //   this.setState({
// //     redirect: true
// //   })
// //   console.log(this.state.redirect)
// //   this.renderRedirect(username)
// // }
// // renderRedirect = (username) => {
// //   if (this.state.redirect) {
// //     console.log(username)
// //     return <Redirect to={'/profile/' + this.state.results.username }/>
// //   }
// // }
// // `/profile/${this.state.results.username}`

// componentDidMount() {
//   this.runSearch()
// };

// componentDidUpdate(_, prevState) {
//   console.log(prevState)
//   if(prevState.redirect !== this.state.redirect) {
//     console.log(this.state);
//     return history.location.push(`/profile/${this.state.results[0].username}`)
//   }
// }







// render() {
 
//   if(!this.state) return <h1>Loading....</h1>
  
// }
// }

export default NavbarComponent;