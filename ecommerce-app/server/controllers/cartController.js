const Cart =
  require("../models/Cart");

exports.getCart = async (
  req,
  res
) => {
  const cart =
    await Cart.findOne({
      user: req.user._id
    }).populate(
      "items.product"
    );

  res.json(cart);
};

exports.addToCart = async (
  req,
  res
) => {
  const {
    productId,
    qty,
    price
  } = req.body;

  let cart =
    await Cart.findOne({
      user: req.user._id
    });

  if (!cart) {
    cart =
      await Cart.create({
        user: req.user._id,
        items: []
      });
  }

  const existing =
    cart.items.find(
      (item) =>
        item.product.toString() ===
        productId
    );

  if (existing) {
    existing.qty += qty;
  } else {
    cart.items.push({
      product: productId,
      qty,
      price
    });
  }

  await cart.save();

  res.json(cart);
};

exports.removeCartItem =
  async (req, res) => {
    const cart =
      await Cart.findOne({
        user: req.user._id
      });

    cart.items =
      cart.items.filter(
        (item) =>
          item.product.toString() !==
          req.params.id
      );

    await cart.save();

    res.json(cart);
  };