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


router.route('/price/:id')
.get(songController.findSongsPrice)
.put(songController.updateSongPrice)

router.route('/title/:title')
.get(songController.findSongsTitle)
.put(songController.updateSongTitle)

router.route('/author/:author')
.get(songController.findSongsAuthor)
.put(songController.updateSongAuthor)

router.route('/genre/:genre')
.get(songController.findSongsGenre)
.put(songController.updateSongTitle)


// router.route(`/:songid/:userid`)
// .post(songController.AddPurchasedSongs)
router.route('/ide/:songid')
  .get(songController.findSongById)






module.exports = router;
