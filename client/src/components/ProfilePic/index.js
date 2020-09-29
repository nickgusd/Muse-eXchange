import React from 'react';
import "./style.css";

const ProfilePic = ({profilePic}) => {
  return (<div className="image-container">
    <img className="img-fluid profilePic" src={profilePic || "https://via.placeholder.com/350"} />
  </div>)
}

export default ProfilePic;