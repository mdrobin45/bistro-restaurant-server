const express = require("express");
const getAllMenus = require("../controllers/menuControllers/getAllMenus");
const postMultipleMenu = require("../controllers/menuControllers/postMultipleMenu");
const postSingleMenu = require("../controllers/menuControllers/postSingleMenu");
const getMenuItemsByCategory = require("../controllers/menuControllers/getMenuItemsByCategory");
const menuRoute = express.Router();

// get menu items by category
menuRoute.get("/category", getMenuItemsByCategory);

// Get all menus
menuRoute.get("/", getAllMenus);

// Post single menu
menuRoute.post("/", postSingleMenu);

// Add multiple menus
menuRoute.post("/multiple", postMultipleMenu);

module.exports = menuRoute;
