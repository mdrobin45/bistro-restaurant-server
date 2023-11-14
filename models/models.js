const mongoose = require("mongoose");
const menuSchema = require("../schemas/menuSchema");
const cartSchema = require("../schemas/cartSchema");

// Models
const models = mongoose.model("Menus", menuSchema);
const CartModel = mongoose.model("Cart", cartSchema);

module.exports = { models, CartModel };
