var express = require("express");
var app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
// var bodyParser = require("body-parser");
var controller = require(__dirname + "/apps/controllers");
app.use(controller);
// app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", __dirname + "/apps/views");
app.use("/particle", express.static(__dirname + "/views/particle"));
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));
var server = app.listen(3333, function () {
  console.log("server is running");
});
