const db = require("../models");
const Song = require("../models/song");

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
      }
}
