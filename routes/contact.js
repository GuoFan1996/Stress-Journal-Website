const express = require("express");
const router = express.Router();
const config = require("../modules/config");

router.get("/", function(req, res) {
  res.render("contact", {
    contactContent: config.contactContent,
    req: req
  });
});

module.exports = router;
