const Order = require("../models/Order");

exports.createOrder =
  async (req, res) => {
    const order =
      await Order.create({
        ...req.body,
        user: req.user._id
      });

    res.status(201).json(order);
  };

exports.getMyOrders =
  async (req, res) => {
    const orders =
      await Order.find({
        user: req.user._id
      }).populate(
        "items.product"
      );

    res.json(orders);
  };

exports.updateStatus =
  async (req, res) => {
    const order =
      await Order.findById(
        req.params.id
      );

    order.orderStatus =
      req.body.status;

    await order.save();

    res.json(order);
  };