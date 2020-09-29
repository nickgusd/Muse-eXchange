const db = require("../models");

module.exports = {
    AddUserSongs: function(req, res) {
        db.Song.create(req.body)
        .then(({_id}) => db.User.findOneAndUpdate({_id: req.params.userid}, {$push: {"profile.songs": _id}}, { new: true }))
        .then(dbAddedSongs => res.json(dbAddedSongs))
        .catch(err => res.status(422).json(err))
      },
      findUserSongs: function(req, res) {
        db.Song.find({})
        .populate("songs")
        .then(dbUserSongs => res.json(dbUserSongs))
        .catch(err => res.status(422).json(err));
      },

      findSongsGenre: function(req, res) {
        db.Song.find({genre: req.params.genre})
        .then(dbGenre => res.json(dbGenre))
        .catch(err => res.status(422).json(err))
      },

      findSongsPrice: function(req, res) {
        db.Song.find({price: req.params.price})
        .then(dbPrice => res.json(dbPrice))
        .catch(err => res.status(422).json(err))
      },

      findSongsTitle: function(req, res) {
        db.Song.find({title: req.params.title})
        .then(dbTitle => res.json(dbTitle))
        .catch(err => res.status(422).json(err))
      },

      findSongsAuthor: function(req, res) {
        db.Song.find({author: req.params.author})
        .then(dbAuthor => res.json(dbAuthor))
        .catch(err => res.status(422).json(err))
      },





}


        // "profile.about": req.body.about,
        // "profile.profilePic": req.body.profilePic,