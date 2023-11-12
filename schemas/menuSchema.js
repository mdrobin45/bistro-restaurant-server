const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
   name: { type: String },
   recipe: { type: String },
   image: { type: String },
   category: { type: String },
   price: { type: String },
});

module.exports = menuSchema;
