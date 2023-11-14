const express = require("express");
const addProduct = require("../controllers/cart/addProduct");
const getProduct = require("../controllers/cart/getProduct");
const cartRoute = express.Router();

// Add product to cart
cartRoute.post("/", addProduct);

// Get Cart product
cartRoute.get("/", getProduct);

// Export cart route
module.exports = cartRoute;
