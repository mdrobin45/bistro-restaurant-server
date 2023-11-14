const { models } = require("../../models/models");

const getMenuItemsByCategory = async (req, res) => {
   try {
      const { name } = req.query;

      const result = await models.find({ category: name });
      res.send(result);
   } catch {
      res.status(500).json({ message: "There is an internal error" });
   }
};

module.exports = getMenuItemsByCategory;
