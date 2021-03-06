import React from 'react';
import "./style.css";
const picture = {
  paddingTop:"7%"
}
const ProfilePic = ({profilePic}) => {
  return (<div>
    <img style={picture}
    className="image-container" 
    src={profilePic || "https://via.placeholder.com/350"} 
    style={{marginTop: "80px", transform: "scale(1.6)", marginBottom: "50px"}}
    />
  </div>)
}

export default ProfilePic;
