const { MenuModel } = require("../../models/menuModel");

const postSingleMenu = async (req, res) => {
   try {
      const menuData = req.body;
      const result = await MenuModel(menuData).save();
      res.status(200).json({ id: result._id, message: "Menu added" });
   } catch {
      res.status(500).json({ message: "There is an internal error" });
   }
};

module.exports = postSingleMenu;
