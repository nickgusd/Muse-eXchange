import axios from "axios";

export default {
  /** Get saved users */
  getSavedUsers: function() {
    return axios.get("/api/users");
  },
  getSavedUsersById: function(userid) {
    return axios.get(`/api/users/${userid}`);
  },
  /** Get saved musicians */
  getUsersByProfession: function(profession) {
    return axios.get(`/api/users/profession/${profession}`)
  },
  AddSongs: function(userid,data) {
    return axios.post(`/api/songs/${userid}`,data)
  },

  //get purchased songs for user 
  GetPurchasedSongs: function(songid, userid) {
    return axios.get(`api/users/purchasedsong/${songid}/${userid}`)
  },


  // axios call for genre, price, title, and author
  getSongsByQuery: function(query) {
    console.log(query)
    return axios.get(`/api/songs/${query}`)
  },

  /** ===== User's Profile ===== */

  // Get user by username
  getUserByUsername: function(username) {
    return axios.get(`/api/users/username/${username}`);
  },

  // Get User Profile
  getProfile: function(userid, field) {
    return axios.get(`/api/users/profile/${userid}/${field}`)
  },

  // Update User Profile
  updateProfile: function(userid, field, data) {
    console.log(data);
    return axios.put(`/api/users/profile/${userid}/${field}`, {field: data});
  },
  signIn(data){
    return axios.post("/api/users/signin", data)
  },
  register(data){
    return axios.post("/api/users/register", data)
  },

  
}