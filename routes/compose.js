const express = require("express");
const router = express.Router();
const config = require("../modules/config");
const Post = require("../models/Post");
const User = require("../models/User");

router.get("/", function(req, res) {
  res.render("compose", {
    startingContent: config.homeStartingContent,
    req:req
  });
});

router.post("/", async function(req, res) {
  
  User.findOne({ username: req.session.loggedInUser })
  .then(user => {
    if (user) {
      const newPost = new Post({
        userId: user._id,
        stressLevel: req.body.stressLevel,
        stressors: req.body.stressors,
        stressReliefMethods: req.body.stressReliefMethods,
        stressReliefPercentage: req.body.stressReliefPercentage,
        date: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
      });

      return newPost.save();
    }
  })
  .then(post => {
    req.session.currentPosts.push(post);

    res.render("home", {
      startingContent: config.homeStartingContent,
      req: req
    });
  })
  .catch(err => {
    console.log(err);
    res.redirect("/compose");
  });

});

module.exports = router;
