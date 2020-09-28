const router = require('express').Router();
const userController = require('../../controllers/userControllers');

router.route('/')
  .post(userController.addNewUser);

module.exports = router;