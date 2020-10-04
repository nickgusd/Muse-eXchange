import React from 'react'
import { Link } from 'react-router-dom';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Card, CardMedia, Button, CardContent, Typography } from "@material-ui/core"


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
    >{console.log(users, "helloworldbitch")}
      {users.map(user => 
        <Card style={{ width: '12rem',height:"100%", borderRadius: "0", border: "solid 1px", borderColor: "#dcdcdc"}} key={user._id}>
          {user.profile.profilePic
          ? (<CardMedia 
            component="img"
            height="200px"
            width="200px"
            image={user.profile.profilePic}
            variant="top" 
            style={{ borderRadius: "0"}} 
             />)
          : (<CardMedia 
          variant="top" 
          component="img"
          height="200px"
          style={{ borderRadius: "0"}} 
          image='https://via.placeholder.com/200' />)}
          <CardContent>
          <Typography gutterBottom className="h4">{user.profile.firstName} {user.profile.lastName}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">{user.profile.profession}</Typography>
            <Link to={`/profile/${user.username}`}>
              <Button 
              color="primary"
              variant="contained"
              style={{ borderRadius: "0px", backgroundColor: "#ed64a6"}}
              fullWidth
              >
                See Profile
                </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </Carousel>)
}
export default UserList;

