const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user");
const songRoutes = require("./songs")
const tutorialRoutes = require("./tutorials")

// User routes
router.use("/users", userRoutes);
router.use("/songs", songRoutes);
router.use("/tutorials",tutorialRoutes);


// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
