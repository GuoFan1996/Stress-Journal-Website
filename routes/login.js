const express = require("express");
const router = express.Router();
const config = require("../modules/config");
const Post = require("../models/Post");
const User = require("../models/User");

router.get("/", function(req, res) {
  res.render("login", {
    startingContent: config.homeStartingContent,
    req: req
  });
});

router.post("/", function(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username: username, password: password })
    .then(user => {
      req.session.loggedInUser = username;
      if (user) {
        return Post.find({ userId: user._id }); 
      } else {
        const newUser = new User({ username: username, password: password });
        return newUser.save();
      }
    })
    .then(posts => {
      if (Array.isArray(posts)) {
        req.session.currentPosts = posts;
      }
      res.render("home", {
        startingContent: config.homeStartingContent,
        req: req
      });
    })
    .catch(err => {
      console.log(err);
      res.redirect("/");
    });
});




module.exports = router;
