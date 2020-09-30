import React from 'react';
import Container from '../Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'
import API from '../../utils/API';


const styles = {
  link: {
    color: "white",
    textDecoration: 'none'
  },
}


class NavbarComponent extends React.Component {

// const styles = {
//   link: {
//     color: "white",
//     textDecoration: 'none'
//   },
// }

state = {
  search: "",
  results: []
}


componentDidMount() {
  this.runSearch("")
}

runSearch = () => {
  API.getSavedUsers()
  .then(res => {
    this.setState({results: res.data})

    console.log(res)
  })
  .catch(err => console.log(err))
}

handleInputChange = event => {

this.setState({search: event.target.value})


}

handleFormSubmit = event => {
  event.preventDefault();
  console.log(this.state.search)

  const filterSearch = this.state.results.filter(user => user.username === this.state.search)
  console.log(filterSearch)
  this.setState({ ...this.state, results: filterSearch.length === 0 ? [] : filterSearch })
}


render() {
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
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleInputChange}/>
          {/* <input type="text" list="data" onChange={this._onChange} />

  <datalist id="data">
    {this.state.data.map((item, key) =>
      <option key={key} value={item.displayValue} />
    )}
  </datalist> */}

          <Button variant="outline-success" onClick={this.handleFormSubmit}>Search</Button>
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
}

export default NavbarComponent;