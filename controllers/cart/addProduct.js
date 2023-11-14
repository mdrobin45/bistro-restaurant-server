const { CartModel } = require("../../models/models");

const addProduct = async (req, res) => {
   try {
      const cartData = req.body;
      const result = await CartModel(cartData).save();
      res.status(200).json({ id: result._id, message: "Added to cart" });
   } catch {
      res.status(500).json({ message: "There is an internal error" });
   }
};

module.exports = addProduct;
