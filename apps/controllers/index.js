var express = require("express");
var router = express.Router();
router.use("/contact", require(__dirname + "/contactController"));
router.get("/", function (req, res) {
  res.render("index");
  //res.json({ message: "this is index page" });
});
router.get("/index", function (req, res) {
  res.render("index");
  //res.json({ message: "this is index page" });
});
module.exports = router;
