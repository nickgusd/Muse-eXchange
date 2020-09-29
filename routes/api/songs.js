const router = require('express').Router();
const songController = require("../../controllers/songController");

// router
//   .route("/")
//   .get(songController.findAll);

router.route('/:userid')
.get(songController.findUserSongs)
.post(songController.AddUserSongs)

router.route('/genre/:genre')
.get(songController.findSongsGenre)


router.route('/price/:price')
.get(songController.findSongsPrice)

router.route('/title/:title')
.get(songController.findSongsTitle)

router.route('/author/:author')
.get(songController.findSongsAuthor)


module.exports = router;
