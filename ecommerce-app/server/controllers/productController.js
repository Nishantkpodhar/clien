const Product = require("../models/Product");
const redis =require("../config/redis");
const cloudinary =
  require("../config/cloudinary");

exports.getProducts =
  async (req, res) => {
    const cached =
      await redis.get("products");

    if (cached) {
      return res.json(
        JSON.parse(cached)
      );
    }

    const products =
      await Product.find()
        .populate("brand")
        .populate("category");

    await redis.set(
      "products",
      JSON.stringify(products),
      {
        EX: 3600
      }
    );

    res.json(products);
  };

exports.getProduct = async (
  req,
  res
) => {
  const product = await Product.findById(
    req.params.id
  );

  res.json(product);
};

exports.createProduct = async (
  req,
  res
) => {
  const product =
    await Product.create({
      ...req.body,
      seller: req.user._id,
    });

  res.json(product);
};

exports.updateProduct = async (
  req,
  res
) => {
  const product =
    await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

  res.json(product);
};

exports.deleteProduct = async (
  req,
  res
) => {
  await Product.findByIdAndDelete(
    req.params.id
  );

  res.json({
    message: "Deleted",
  });
};
exports.uploadImage =
  async (req, res) => {
    const result =
      await cloudinary.uploader.upload(
        req.file.path
      );

    res.json({
      url: result.secure_url
    });
  };