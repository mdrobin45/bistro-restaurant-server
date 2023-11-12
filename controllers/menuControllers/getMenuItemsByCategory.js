const { MenuModel } = require("../../models/menuModel");

const getMenuItemsByCategory = async (req, res) => {
   try {
      const { category } = req.query;

      const result = await MenuModel.find({ category: category });
      res.send(result);
   } catch (err) {
      console.log(err);
      res.status(500).json({ message: "There is an internal error" });
   }
};

module.exports = getMenuItemsByCategory;
