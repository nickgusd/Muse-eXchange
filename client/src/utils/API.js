import axios from "axios";

export default {
  // Get all saved users
  getSavedUsers: function() {
    return axios.get("/api/users");
  },
  getUserInfo: function(username) {
    console.log(username);
    return axios.get("/api/users/" + username);
  },
  
    AddSongs: function(userID) {
    console.log(userID)
    return axios.get("api/users/" + userID)
  }
}