const router = require("express").Router();
const songController = require("../../controllers/songController");

// // Matches with "/api/books"
// router.route("/")
//   .get(bookController.findAll)
//   .post(bookController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(bookController.findById)
//   .put(bookController.update)
//   .delete(bookController.remove);

module.exports = router;