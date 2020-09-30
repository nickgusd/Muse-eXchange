import React from 'react';
import "./style.css";

const ProfilePic = ({profilePic}) => {
  return (<div>
    <img 
    className="image-container" 
    src={profilePic || "https://via.placeholder.com/350"} 
    />
  </div>)
}

export default ProfilePic;
