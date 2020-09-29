const router = require('express').Router();
const songController = require("../../controllers/songController");

// router
//   .route("/")
//   .get(songController.findAll);

router.route('/:userid')
.get(songController.findUserSongs)
.post(songController.AddUserSongs)

// router.route('/:query')
// .get(songController, findSongsGenre)
// .get(songController, findSongsPrice)
// .get(songController, findSongsTitle)
// .get(songController, findSongsAuthor)

// router.route('/:price')
// .get(songController, findSongsPrice)

// router.route('/:title')
// .get(songController, findSongsTitle)

// router.route('/:author')
// .get(songController, findSongsAuthor)


module.exports = router;
