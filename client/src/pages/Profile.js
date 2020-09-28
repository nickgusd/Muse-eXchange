import React, { Component } from 'react'

import API from '../utils/API';

class Profile extends Component  {
  state = {
    id: "",
    username: "",
    email: "",
    songs: []
  }
  componentDidMount() {
    document.title = "Request Line | Songs";
    const username = this.props.match.params.username
    this.setState({username: username});
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
          }  
      ))
      .catch(err => console.log(err));
  }

  render() {
    return (<div>
      <a href="/" className="btn btn-success">Home</a>
      <p>Id: {this.state.id}</p>
      <h1>{this.state.username}'s Song List</h1>
      <h2>Contact: {this.state.email}</h2>
      {this.state.songs 
        ? <div>
            <p>No songs</p>
            <a href="#" className="btn btn-primary">+ Add Song</a>    
          </div> 
        : <div>
            Here's a list
          </div>}
    </div>)
  }
}

export default Profile;