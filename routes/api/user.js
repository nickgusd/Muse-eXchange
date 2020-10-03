const router = require('express').Router();
const userController = require('../../controllers/userControllers');
const user = require('../../models/user');

router.route('/')
  .get(userController.findAll)
  .post(userController.addNewUser);

router.route('/:id')
  .get(userController.findById);

// Get user by profession
router.route('/profession/:profession')
  .get(userController.findAllByProfession);

/** ===== User Profile ===== */

router.route('/username/:username')
  .get(userController.findByUsername)

router.route('/profile/:userid/:field')
  .get(userController.getProfile)
  .put(userController.updateProfile)

// router.route('/profile/firstName/:userid')
//   .put(userController.updateFirstName);

// router.route('/profile/lastName/:userid')
//   .put(userController.updateLastName);
router.route('/register')
.post(userController.addNewUser)



// router.route('/profile/profilePic/:userid')
//   .put(userController.updateProfilePic)

module.exports = router;