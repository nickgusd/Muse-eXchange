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

      updateSongTitle: function(req, res) {
        db.Song.findOneAndUpdate({title: req.params.title}, req.body)
        .then(dbUpdateSong => res.json(dbUpdateSong))
      .catch(err => res.status(422).json(err));
      },

      updateSongPrice: function(req, res) {
        db.Song.findOneAndUpdate({price: req.params.price}, req.body)
        .then(dbUpdatePrice => res.json(dbUpdatePrice))
      .catch(err => res.status(422).json(err));

      },

      updateSongAuthor: function(req, res) {
        db.Song.findOneAndUpdate({author: req.params.author}, req.body)
        .then(dbUpdateAuthor => res.json(dbUpdateAuthor))
      .catch(err => res.status(422).json(err));

      },

      updateSongGenre: function(req, res) {
        db.Song.findOneAndUpdate({genre: req.params.genre}, req.body)
        .then(dbUpdateGenre => res.json(dbUpdateGenre))
      .catch(err => res.status(422).json(err));

      },





        
}


        // "profile.about": req.body.about,
        // "profile.profilePic": req.body.profilePic,