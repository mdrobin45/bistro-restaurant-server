const { MenuModel } = require("../../models/menuModel");

const postMultipleMenu = async (req, res) => {
   try {
      const menusData = req.body;
      const result = await MenuModel.insertMany(menusData);
      res.status(200).json({ message: "Menus added" });
   } catch {
      res.status(500).json({ message: "There is an internal error" });
   }
};

module.exports = postMultipleMenu;
