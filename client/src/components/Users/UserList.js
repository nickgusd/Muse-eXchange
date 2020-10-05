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
const viewButton = {
  backgroundColor :"#ff416c",
  color:"white",
 
}
const cardText = {
fontSize:"20px",
fontFamily:"Geneva",

}
const UserList = ({ users }) => {
  return ( 
    <Carousel 
      responsive={responsive}
      swipeable={true}
      infinite={true}
    >{console.log(users, "helloworldbitch")}
      {users.map(user => 
        <Card style={{ width: '12rem',height:"18rem"}} key={user._id}>
          {user.profile.profilePic
          ? (<Card.Img variant="top" style={{ width: '100%',height:"9rem"}} src={user.profile.profilePic} />)
          : (<Card.Img variant="top" src='https://via.placeholder.com/200' />)}
          <Card.Body>
            <Card.Title style={cardText}>{user.profile.firstName} {user.profile.lastName}</Card.Title>
            <Card.Text >{user.profile.profession}</Card.Text>
            <Link to={`/profile/${user.username}`}>
              <Button variant="none"  style={viewButton}>View Profile</Button>
            </Link>
          </Card.Body>
        </Card>
      )}
    </Carousel>)
}
export default UserList;

