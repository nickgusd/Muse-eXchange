import React from 'react'
import Card from '../../components/Card'
const UserList = ({ users }) => {
  const images = [
    "https://i.redd.it/8osvgu0j8qp51.jpg",
    "https://i.redd.it/thsqefzdapp51.jpg", 
    "https://i.redd.it/npi58wwn8hp51.jpg",
  ]
  return ( <div class="row">
    {users.map(user => 
      <Card 
        key={user._id}
        username={user.username}
        email={user.email}
      />
    )}
  </div>)
}

export default UserList;