const { ObjectId } = require("mongodb");
var config = require("./../../config/setting.json");
class ContactService {
  databaseConnection = require("./../database/database");
  contact = require("./../model/contact");

  client;
  contactDatabase;
  contactCollection;
  constructor() {
    this.client = this.databaseConnection.getMongoClient();
    this.contactDatabase = this.client.db(config.mongodb.database);
    this.contactCollection = this.contactDatabase.collection("contact");
  }
  async insertContact(contact) {
    return await this.contactCollection.insertOne(contact);
  }
  async getContact(id) {
    return await this.contactCollection.findOne({ _id: new ObjectId(id) }, {});
  }
  async getContactList() {
    const cursor = await this.contactCollection.find({}, {}).skip(0).limit(100);
    return await cursor.toArray();
  }
}
module.exports = ContactService;
