const router = require('express').Router();
const songController = require("../../controllers/songController");

router
  .route("/songs")
  .get(songController.findAll);

router.route('/:username')
  .get(userController.findByUsername);

module.exports = router;
