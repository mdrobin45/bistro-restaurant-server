const { models } = require("../../models/models");

const postSingleMenu = async (req, res) => {
   try {
      const menuData = req.body;
      const result = await models(menuData).save();
      res.status(200).json({ id: result._id, message: "Menu added" });
   } catch {
      res.status(500).json({ message: "There is an internal error" });
   }
};

module.exports = postSingleMenu;
