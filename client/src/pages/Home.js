import React, { Component } from 'react';
import UserList from '../components/Users/UserList';
import Container from '../components/Container';
import Jumbotron from '../components/Jumbotron';
import Button from 'react-bootstrap/Button';
import API from '../utils/API';
import {Redirect, Link} from "react-router-dom";

const styles ={
  home: {
    height: "100%"
  }
}
const professions = ["Musician", "Guitar", "Hip-Hop", "Beatmaking", "Piano"];

class Home extends Component {
  state = {
    users: [],
    musicians: [],
    guitars: [],
    hipHop: [],
    beatmakers: [],
    piano: [],
    dancers: [],
    currentUser: {},
  }

  componentDidMount() {
    document.title = `Music eXchange | Home`;
    this.getUsers();
    this.getMusicians();
    this.getDancers();
  }

  /** Get all Users */
  getUsers = () => {
    API.getSavedUsers()
      .then(res => this.setState({users: res.data}))
      .catch(err => console.log(err));
  }

  /** Get all Musicians */
  getMusicians = () => {
    API.getUsersByProfession(professions[0])
      .then(res => this.setState({musicians: res.data}))
      .catch(err => console.log(err));
  }

    /** Get all Musicians */
    getGuitarist = () => {
      API.getUsersByProfession(professions[1])
        .then(res => this.setState({musicians: res.data}))
        .catch(err => console.log(err));
    }

    /** Get all Musicians */
  getBeatMaking = () => {
    API.getUsersByProfession(professions[3])
      .then(res => this.setState({musicians: res.data}))
      .catch(err => console.log(err));
  }

  getPiano = () => {
    API.getUsersByProfession(professions[4])
      .then(res => this.setState({musicians: res.data}))
      .catch(err => console.log(err));
  }


  render() {
    return (
      !this.props.user && !this.props.pending ? <Redirect to="/signin"/> :
      <div style={styles.home}>
        
        <Jumbotron />
        <Container fluid>
          <Button>
            <Link to="/addsong">Add song</Link>
          </Button>

          {/* users: [],
    musicians: [],
    guitars: [],
    hipHop: [],
    beatmakers: [],
    piano: [],
    dancers: [],
    currentUser: {}, */}

          {this.state.users && (<>
            <div className="mt-4">
              <h2>Explore</h2>
              <hr className="my-4" />
            </div>
            {/** Show All User */}
            <UserList users={this.state.users} />
          </>)}

          {this.state.guitars && (<>
            <div className="mt-4">
              <h2>Guitar</h2>
              <hr className="my-4" />
            </div>
            {/** Show All User */}
            <UserList guitar={this.state.guitars} />
          </>)}

          {this.state.hipHop && (<>
            <div className="mt-4">
              <h2>Hip Hop</h2>
              <hr className="my-4" />
            </div>
            {/** Show All User */}
            <UserList users={this.state.hipHop} />
          </>)}

          {this.state.beatmakers && (<>
            <div className="mt-4">
              <h2>Beat Makers</h2>
              <hr className="my-4" />
            </div>
            {/** Show All User */}
            <UserList users={this.state.beatmakers} />
          </>)}

          {this.state.piano && (<>
            <div className="mt-4">
              <h2>Piano</h2>
              <hr className="my-4" />
            </div>
            {/** Show All User */}
            <UserList users={this.state.piano} />
          </>)}

          
          

          {/* <div className="mt-4">
            <h2>Beat Makers</h2>
            <hr className="my-4" />
          </div>
          <UserList users={this.state.musicians} />

          <div className="mt-4">
            <h2>Dancers</h2>
            <hr className="my-4" />
          </div>
          <UserList users={this.state.dancers} /> */}
        </Container>
      </div>
    )
  }

}

export default Home;