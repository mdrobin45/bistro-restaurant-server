const { CartModel } = require("../../models/models");

const getProduct = async (req, res) => {
   try {
      const result = await CartModel.find({}).populate("product");
      res.send(result);
   } catch (err) {
      console.log(err);
      res.status(500).json({ message: "There is an internal error" });
   }
};

module.exports = getProduct;
