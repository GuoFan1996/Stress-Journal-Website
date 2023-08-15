const express = require("express");
const router = express.Router();
const config = require("../modules/config");
const Post = require("../models/Post");
const User = require("../models/User");

router.get("/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    res.render("post", {
      req:req,
      post:post,
      stressLevel: post.stressLevel,
      stressors: post.stressors,
      stressReliefMethods: post.stressReliefMethods,
      stressReliefPercentage: post.stressReliefPercentage
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = router;
