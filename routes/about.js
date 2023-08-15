const express = require("express");
const router = express.Router();
const config = require("../modules/config");
const Post = require("../models/Post");
const User = require("../models/User");

router.get("/", function(req, res) {
  res.render("about", {
    aboutContent: config.aboutContent,
    req: req
  });
});

module.exports = router;
