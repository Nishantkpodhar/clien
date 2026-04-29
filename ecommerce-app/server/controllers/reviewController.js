const Review =
  require("../models/Review");

exports.createReview =
  async (req, res) => {
    const review =
      await Review.create({
        ...req.body,
        user: req.user._id
      });

    res.status(201).json(review);
  };

exports.getProductReviews =
  async (req, res) => {
    const reviews =
      await Review.find({
        product:
          req.params.productId,
        approved: true
      }).populate(
        "user",
        "name"
      );

    res.json(reviews);
  };