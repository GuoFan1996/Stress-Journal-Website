const express = require("express");
const router = express.Router();
const config = require("../modules/config");
const Post = require("../models/Post");
const User = require("../models/User");

router.get("/", function(req, res) {
  res.render("home", {
    startingContent: config.homeStartingContent,
    req: req
  });
});

module.exports = router;
