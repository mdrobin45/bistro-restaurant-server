const mongoose = require("mongoose");

const database = async () => {
   try {
      await mongoose.connect(process.env.LOCAL_MONGO_URI);
      console.log("Database connection successful");
   } catch {
      console.log("Database connection error");
   }
};

module.exports = database;
