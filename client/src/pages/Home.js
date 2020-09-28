import React, { Component } from 'react';
import UserList from '../pages/Users/UserList';

import API from '../utils/API';

class Home extends Component {
  state = {
    users: [],
    currentUser: {},
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    API.getSavedUsers()
      .then(res => this.setState({users: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <UserList users={this.state.users} />
      </>
    )
  }

}

export default Home;