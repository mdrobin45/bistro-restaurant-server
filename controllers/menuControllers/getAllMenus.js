const { models } = require("../../models/models");

const getAllMenus = async (req, res) => {
   try {
      const result = await models.find({});
      res.send(result);
   } catch {
      res.status(500).json({ message: "There is an internal error" });
   }
};

module.exports = getAllMenus;
