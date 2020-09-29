import React, { Component } from 'react';
import Container from '../components/Container';
import ProfilePic from '../components/ProfilePic';
import API from '../utils/API';

class Profile extends Component {
  state = {
    id: "",
    username: "",
    email: "",
    profilePic: "",
    songs: [],

  }
  componentDidMount() {
    document.title = "Request Line | Songs";
    const username = this.props.match.params.username
    this.setState({ username: username });
    console.log(username);
    this.getUserInfo(username);
  }

  getUserInfo = username => {
    API.getUserInfo(username)
      .then(res =>
        this.setState(
          {
            id: res.data._id,
            songs: res.data.profile.songs,
            email: res.data.email,
            profilePic: res.data.profile.profilePic
          }
        ))
      .catch(err => console.log(err));
  }

 AddSongs = id => {
   API.AddSongs(id)
   .then(res => 
    
    console.log(res.data)
   
    )
    .catch(err => console.log(err))
 }



  render() {
    return (<Container fluid>
      <div className="row mt-4">
        <div className="col-4">
          <ProfilePic 
              profilePic={this.state.profilePic}
            />
          <p>Id: {this.state.id}</p>
          <h1>{this.state.username}'s Song List</h1>
          <h2>Contact: {this.state.email}</h2>
        </div>
        <dic className="col-8">
          {this.state.songs 
            ? <div>
                <p>No songs</p>
                <a href="#" className="btn btn-primary">+ Add Song</a>
              </div>
            : <div>
                Here's a list
              </div>}
              <div className="mt-4">
                <h4>Songs</h4>
                <hr className="my-4" />
              </div>
              <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between">
                  <span className="mr-auto">Song 1</span>
                  <a href="#" className="btn btn-secondary">Buy</a>
                </li> 
                <li class="list-group-item d-flex justify-content-between">
                  <span className="mr-auto">Song 2</span>
                  <a href="#" className="btn btn-secondary">Buy</a>
                </li> 
                <li class="list-group-item d-flex justify-content-between">
                  <span className="mr-auto">Song 3</span>
                  <a href="#" className="btn btn-secondary">Buy</a>
                </li> 
              </ul>
              <div className="mt-4">
                <h4>Tutorials</h4>
                <hr className="my-4" />
              </div>
              <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between">
                  <span className="mr-auto">Tutorial 1</span>
                  <a href="#" className="btn btn-secondary">Buy</a>
                </li> 
                <li class="list-group-item d-flex justify-content-between">
                  <span className="mr-auto">Tutorial 2</span>
                  <a href="#" className="btn btn-secondary">Buy</a>
                </li> 
                <li class="list-group-item d-flex justify-content-between">
                  <span className="mr-auto">Tutorial 3</span>
                  <a href="#" className="btn btn-secondary">Buy</a>
                </li> 
              </ul>
        </dic>
      </div>
      
      
    </Container>)
  }
}

export default Profile;