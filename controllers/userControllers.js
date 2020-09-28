const db = require("../models");
// const User = require("../models/user");

module.exports = {
  addNewUser: function(req, res) {
    db.User.create(req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db.User.find({})
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findByUsername: function(req, res) {
    db.User.findOne({username: req.params.username})
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },

// AddUserSongs: function(req, res) {
//     db.User.create(req.body)
//     .then(({_id}) => db.Song.findOneAndUpdate({_id: req.params.userID}, {$push: {songs: _id}}, { new: true }))
//     .then(dbAddedSongs => res.json(dbAddedSongs))
//     .catch(err => res.status(422).json(err))
//   },

//   findUserSongs: function(req, res) {
//     db.User.find({})
//     .populate("songs")
//     .then(dbUserSongs => res.json(dbUserSongs))
//     .catch(err => res.status(422).json(err));
//   }

};











// Another way to create/save users. Might use this
// module.exports = {
//   addNewUser: async function(req, res) {
//     const newUser = new db.User(req.body);
//     await newUser.save((err, User) => {
//       if (err) res.send(err);
//       res.json(User);
//     });  
//   }
// }