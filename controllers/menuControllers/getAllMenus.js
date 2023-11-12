const { MenuModel } = require("../../models/menuModel");

const getAllMenus = async (req, res) => {
   try {
      const result = await MenuModel.find({});
      res.send(result);
   } catch {
      res.status(500).json({ message: "There is an internal error" });
   }
};

module.exports = getAllMenus;
