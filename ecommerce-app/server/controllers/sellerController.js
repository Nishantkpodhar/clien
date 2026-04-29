const Seller =
  require("../models/Seller");
const Product =
  require("../models/Product");

exports.createSeller =
  async (req, res) => {
    const seller =
      await Seller.create({
        user: req.user._id,
        ...req.body
      });

    res.status(201).json(seller);
  };

exports.dashboard =
  async (req, res) => {
    const seller =
      await Seller.findOne({
        user: req.user._id
      });

    const products =
      await Product.find({
        seller: req.user._id
      });

    const revenue =
      products.reduce(
        (sum, p) =>
          sum +
          p.discountPrice *
            (p.sold || 0),
        0
      );

    res.json({
      seller,
      totalProducts:
        products.length,
      revenue,
      inventory: products
    });
  };