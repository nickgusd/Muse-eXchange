import React, { Component } from 'react';
import {Redirect, Link} from "react-router-dom";

import UserList from '../components/Users/UserList';
// import Container from '../components/Container';
import Jumbotron from '../components/Jumbotron';
// import Button from 'react-bootstrap/Button';
import API from '../utils/API';

import Parallax from "../components/LandingPage/Parallax";
// import GridContainer from "../components/Profile/Grid/GridContainer"
// import GridItem from "../components/Profile/Grid/GridItem"

import GridContainer from "../components/Profile/Grid/GridContainer"
import GridItem from "../components/Profile/Grid/GridItem"

import {
    Button,
    Container,
    Card,
    makeStyles
} from "@material-ui/core";

const styles ={
  home: {
    height: "100%",
    backgroundColor: "black"
  }

}
const h2 = {
  color: "white"
}
const professions = ["Musician", "Guitar", "Hip-Hop",  "Piano"];

class Home extends Component {
  state = {
    users: [],
    musicians: [],
    guitars: [],
    hipHop: [],
    piano: [],
    dancers: [],
    currentUser: {},
  }

  componentDidMount() {
    document.title = `Music eXchange | Home`;
    this.getUsers();
    this.getMusicians();
    this.getGuitarist();
    this.getPiano();
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
        .then(res => this.setState({guitars: res.data}))
        .catch(err => console.log(err));
    }

    /** Get all Musicians */
  getHipHop = () => {
    API.getUsersByProfession(professions[2])
      .then(res => this.setState({hipHop: res.data}))
      .catch(err => console.log(err));
  }

  getPiano = () => {
    API.getUsersByProfession(professions[3])
      .then(res => this.setState({piano: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      !this.props.user && !this.props.pending ? <Redirect to="/signin"/> :
      <div style={styles.home}>
        <Parallax image={require("../assets/svg/BG.jpg")}>
        <Jumbotron />
        
          {/* <Button>
            <Link to="/addsong">Add song</Link>
          </Button> */}

        {/* <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1>Share your creativity!</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
         */}
        </Parallax>
        <div className="main mainRaised">
        <div className="container"  fullWidth style={{paddingBottom: "5%", backgroundColor: "transparent" } }>

        {this.state.users  && (<>
            <div className="mt-4">
              <h2 style={h2}>Explore</h2>
              <hr className="my-4" />
            </div>
            {/** Show All User */}
            <UserList users={this.state.users} />
          </>)}

        
            <div className="mt-4">
              <h2 style={h2}>Guitar</h2>
              <hr className="my-4" />
            </div>
            {/** Show All User */}
            <UserList users={this.state.guitars} />
      

          {this.state.hipHop && (<>
            <div className="mt-4">
              <h2 style={h2}>Hip Hop</h2>
              <hr className="my-4" />
            </div>
            {/** Show All User */}
            <UserList users={this.state.hipHop} />
          </>)}

          {this.state.piano && (<>
            <div className="mt-4">
              <h2 style={h2}>Piano</h2>
              <hr className="my-4" />
            </div>
            {/** Show All User */}
            <UserList users={this.state.piano} />
          </>)}
          {/* <div className="mt-4">
            <h2 style={{color: "white"}}>Explore</h2>
            <hr className="my-4" />
          </div>
     
          <UserList users={this.state.users} />

          <div className="mt-4">
            <h2 style={{color: "white"}}>Musicians</h2>
            <hr className="my-4" />
          </div>
      
          <UserList users={this.state.musicians} />

          <div className="mt-4">
            <h2 style={{color: "white"}}>Dancers</h2>
            <hr className="my-4" />
          </div>
         
          <UserList users={this.state.dancers} /> */}
        </div>
        </div>
      </div>
    )
  }

}

export default Home;