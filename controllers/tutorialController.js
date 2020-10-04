const db = require("../models");


module.exports = {
    AddUserTutorials: function(req, res) {
        db.Tutorial.create(req.body)
        .then(({_id}) => db.User.findOneAndUpdate({_id: req.params.userid}, {$push: {"profile.tutorials": _id}}, { new: true }))
        .then(dbAddedTutorials => res.json(dbAddedTutorials))
        .catch(err => res.status(422).json(err))
      },
      findUserTutorials: function(req, res) {
        db.Tutorial.find({_id: req.params.userid})
        .populate("tutorials")
        .then(dbUserTutorials => res.json(dbUserTutorials))
        .catch(err => res.status(422).json(err));
      },
      
      
      findAllUserTutorials: function(req, res) {
        db.Tutorial.find({})
        .populate("tutorials")
        .then(dbUserTutorials => res.json(dbUserTutorials))
        .catch(err => res.status(422).json(err));
      }
















}