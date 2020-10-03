const db = require("../models");

module.exports = {
  addNewUser: function(req, res) {
    const userObj = {
      username: req.body.email,
      email: req.body.email,
      password: req.body.password,
      profile: {
        firstName: req.body.firstName,
        lastName: req.body.lastName
      },
      payPal: {
        email: req.body.email,
        username: req.body.email
      }
    }
    db.User.create(userObj)
      .then(dbUser => res.json(dbUser))
      .catch(err => {
        console.log(err)
      });
  },
  findAll: function(req, res) {
    db.User.find({})
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User.findOne({_id: req.params.id})
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findByUsername: function(req, res) {
    db.User.findOne({username: req.params.username})
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findAllByProfession: function(req, res) {
    db.User.find({"profile.profession": req.params.profession})
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
  },

getPurchasedSongs: function(req, res) {
  const purchases = `profile.purchaseSongs.${req.params.purchases}`
  db.User.findById("profile.purchaseSongs", purchases)
  .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err))
},



  // Ask wilson if theres a way to not separate this
  updateUserProfile: function(req, res) {
    db.User.findOneAndUpdate(
      {_id: req.params.userid}, 
      {$set: 
        {
          // "profile.firstName": req.body.firstName,
          // "profile.lastName": req.body.lastName,
          // "profile.profession": req.body.profession,
          "profile.about": req.body.about,
          // "profile.profilePic": req.body.profilePic,
          "profile.link1": req.body.link1,
          "profile.link2": req.body.link2,
          "profile.link3": req.body.link3
        }   
    })
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
  },

  /** ===== Get User Profile ===== */

  getProfile: function(req, res) {
    const field = `profile.${req.params.field}`;
    db.User.findById(req.params.userid, field)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },

  /** ===== Update User Profile ===== */

  // Updates any profile field
  updateProfile: function(req, res) { 
    console.log(req.body);
    const field = `profile.${req.params.field}`;
    db.User.findOneAndUpdate(
      {_id: req.params.userid}, 
      {$set: { [field]: req.body.field}}
    )
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
  },

  updateProfilePic: function(req, res) { 
    db.User.findOneAndUpdate(
      {_id: req.params.userid}, 
      {$set: { "profile.profilePic": req.body.profilePic }}
    )
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
  },

  AddPurchasedSongs: function(req, res) {
    db.Song.findById(req.params.songid)
    // .then(({_id}) => console.log({_id}))
    .then(({_id}) => db.User.findOneAndUpdate({_id: req.params.userid}, {$push: {"profile.purchaseSongs": _id}}, { new: true }))
    .then(user => res.json(user))
    .catch(err => res.status(422).json(err))
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

// updateFirstName: function(req, res) { 
//   db.User.findOneAndUpdate(
//     {_id: req.params.userid}, 
//     {$set: { "profile.firstName": req.body.firstName }}
//   )
//   .then(dbUser => res.json(dbUser))
//   .catch(err => res.status(422).json(err));
// },

// updateLastName: function(req, res) { 
//   db.User.findOneAndUpdate(
//     {_id: req.params.userid}, 
//     {$set: { "profile.lastName": req.body.lastName }}
//   )
//   .then(dbUser => res.json(dbUser))
//   .catch(err => res.status(422).json(err));
// },

// updateProfession: function(req, res) { 
//   db.User.findOneAndUpdate(
//     {_id: req.params.userid}, 
//     {$set: { "profile.profession": req.body.profession }}
//   )
//   .then(dbUser => res.json(dbUser))
//   .catch(err => res.status(422).json(err));
// },

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