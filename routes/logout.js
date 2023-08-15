const express = require("express");
const router = express.Router();
const config = require("../modules/config");
const Post = require("../models/Post");
const User = require("../models/User");

router.get("/", function(req, res) {
  req.session.loggedInUser = null;
  req.session.currentPosts = [];

  res.render("home", {
    startingContent: config.homeStartingContent,
    req: req
  });
});

module.exports = router;
