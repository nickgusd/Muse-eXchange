const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user");
const songRoutes = require("./songs")

// User routes
router.use("/users", userRoutes);
router.use("/songs", songRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
