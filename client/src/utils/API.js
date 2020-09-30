import axios from "axios";

export default {
  /** Get saved users */
  getSavedUsers: function() {
    return axios.get("/api/users");
  },
  /** Get saved musicians */
  getUsersByProfession: function(profession) {
    return axios.get("/api/users/profession/" + profession)
  },
  getUserInfo: function(username) {
    console.log(username);
    return axios.get("/api/users/" + username);
  },

  AddSongs: function(UserId) {
    console.log(UserId)
    return axios.post("/api/users/" + UserId)
  },

  // axios call for genre, price, title, and author
  getSongsByQuery: function(query) {
    console.log(query)
    return axios.get("/api/songs/" + query)
  },

}