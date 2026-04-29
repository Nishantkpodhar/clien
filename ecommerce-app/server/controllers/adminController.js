const User =
  require("../models/User");
const Product =
  require("../models/Product");
const Order =
  require("../models/Order");
const Review =
  require("../models/Review");

exports.dashboard =
  async (req, res) => {
    const users =
      await User.countDocuments();

    const products =
      await Product.countDocuments();

    const orders =
      await Order.countDocuments();

    const reviews =
      await Review.countDocuments();

    const revenue =
      await Order.aggregate([
        {
          $group: {
            _id: null,
            total: {
              $sum: "$total"
            }
          }
        }
      ]);

    res.json({
      users,
      products,
      orders,
      reviews,
      revenue:
        revenue[0]?.total || 0
    });
  };

exports.getAllOrders =
  async (req, res) => {
    const orders =
      await Order.find()
        .populate(
          "user",
          "name email"
        )
        .sort({
          createdAt: -1
        });

    res.json(orders);
  };