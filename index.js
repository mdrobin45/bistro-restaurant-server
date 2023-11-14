const express = require("express");
const app = express();
const cors = require("cors");
const database = require("./database");
const menuRoute = require("./routes/menu");
const cartRoute = require("./routes/cart");
require("dotenv").config();
const port = process.env.PORT || 3000;

// middlewares
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());

// Database connection
database();

// application routes
app.use("/menu", menuRoute);
app.use("/cart", cartRoute);

// Listen server
app.listen(port, () => console.log(`Server is running in port ${port}!`));
