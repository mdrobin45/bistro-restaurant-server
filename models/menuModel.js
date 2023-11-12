const mongoose = require("mongoose");
const menuSchema = require("../schemas/menuSchema");

// Models
const MenuModel = mongoose.model("Menus", menuSchema);

module.exports = { MenuModel };
