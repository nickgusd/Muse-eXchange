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

    AddSongs: function(UserId) {
    console.log(UserId)
    return axios.post("/api/users/" + UserId)
  }
}

