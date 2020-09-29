import React from 'react';
import "./style.css";

const ProfilePic = ({profilePic}) => {
  return (<div>
    <img 
    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16" 
    src={profilePic || "https://via.placeholder.com/350"} 
    style={{ maxWidth: "150px" }} />
  </div>)
}

export default ProfilePic;
