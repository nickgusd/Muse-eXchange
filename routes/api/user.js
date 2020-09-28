const router = require('express').Router();
const userController = require('../../controllers/userControllers');
const user = require('../../models/user');

router.route('/')
  .get(userController.findAll)
  .post(userController.addNewUser);

router.route('/:username')
  .get(userController.findByUsername);


router.route('/:username')
  .get(userController.findUserSongs)
  .post(userController.AddUserSongs)




module.exports = router;