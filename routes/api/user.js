const router = require('express').Router();
const userController = require('../../controllers/userControllers');

router.route('/')
  .get(userController.findAll)
  .post(userController.addNewUser);

router.route('/:username')
  .get(userController.findByUsername);

router.route('/:userid')
  .put(userController.updateUserProfile);

// Get user by profession
router.route('/profession/:profession')
  .get(userController.findAllByProfession);

router.route('/register')
.post(userController.addNewUser)



module.exports = router;