const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
   userEmail: { type: String },
   quantity: { type: Number },
   product: { type: mongoose.Schema.Types.ObjectId, ref: "Menus" },
});

// Export cart schema
module.exports = cartSchema;
