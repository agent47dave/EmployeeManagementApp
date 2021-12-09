const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
  Name: {
    type: String
  },
  Date_of_birth: {
    type: Date
  },
  Gender: {
    type: String
  },
  Salary: {
    type: Number
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);
