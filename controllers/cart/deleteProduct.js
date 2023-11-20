const { CartModel } = require("../../models/models");

const deleteProduct = async (req, res) => {
   try {
      const productId = req.params.id;
      const result = await CartModel.findByIdAndDelete(productId);

      if (result) {
         res.status(200).json({ message: "Product removed from cart" });
      } else {
         res.status(404).json({ message: "Product not found" });
      }
   } catch {
      res.status(500).json({ message: "There is an internal error" });
   }
};

module.exports = deleteProduct;
