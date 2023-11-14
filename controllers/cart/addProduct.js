const { CartModel } = require("../../models/models");

const addProduct = async (req, res) => {
   try {
      const cartData = req.body;
      const exist = await CartModel.find({
         product: cartData.product,
         userEmail: cartData.userEmail,
      });
      if (!exist.length) {
         const result = await CartModel(cartData).save();
         res.status(200).json({ id: result._id, message: "Added to cart" });
      } else {
         res.status(409).json({ message: "Already exist" });
      }
   } catch {
      res.status(500).json({ message: "There is an internal error" });
   }
};

module.exports = addProduct;
