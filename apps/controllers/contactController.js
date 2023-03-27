var express = require("express");
var router = express();
const { ObjectId } = require("mongodb");
var Contact = require("../model/contact");
var ContactService = require("../services/contactService");
router.get("/", function (req, res) {
  res.render("C:/demo-buoi4/apps/views/contact.ejs");
});
router.get("/contact-list", async function (req, res) {
  var contactService = new ContactService();
  var query = {};

  if (req.query.name) {
    query.Name = req.query.name;
  }
  if (req.query.email) {
    query.Email = req.query.email;
  }
  if (req.query.phone) {
    query.PhoneNumber = req.query.phone;
  }
  if (req.query.message) {
    query.Message = req.query.message;
  }

  var contact = await contactService.getContactList();
  res.render("C:/demo-buoi4/apps/views/list-contact.ejs", { contact: contact });
});
router.post("/insert-contact", async function (req, res) {
  var contactService = new ContactService();
  var cont = new Contact();
  cont.Name = req.body.Name;
  cont.Email = req.body.Email;
  cont.PhoneNumber = req.body.PhoneNumber;
  cont.Message = req.body.Message;
  var result = await contactService.insertContact(cont);
  res.redirect("/");
});
module.exports = router;
