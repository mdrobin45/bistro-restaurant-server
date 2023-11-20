const { CartModel } = require("../../models/models");

const getProduct = async (req, res) => {
   try {
      const { email } = req.query;
      const result = await CartModel.find({ userEmail: email }).populate(
         "product"
      );
      res.send(result);
   } catch {
      res.status(500).json({ message: "There is an internal error" });
   }
};

module.exports = getProduct;
