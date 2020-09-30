import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const UserList = ({ users }) => {
  return ( 
    <Carousel 
      responsive={responsive}
      swipeable={true}
      infinite={true}
    >
      {users.map(user => 
        <Card style={{ width: '18rem'}} key={user._id}>
          <Card.Img variant="top" src={user.profile.profilePic} />
          <Card.Body>
            <Card.Title>{user.profile.firstName} {user.profile.lastName}</Card.Title>
            <Card.Text>{user.profile.profession}</Card.Text>
            <Link to={`/profile/${user.username}`}>
              <Button variant="primary">See Profile</Button>
            </Link>
          </Card.Body>
        </Card>
      )}
    </Carousel>)
}
export default UserList;