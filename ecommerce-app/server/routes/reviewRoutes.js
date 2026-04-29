const router =
  require("express").Router();

const protect =
  require("../middleware/authMiddleware");

const {
  createReview,
  getProductReviews
} = require(
  "../controllers/reviewController"
);

router.post("/", protect, createReview);
router.get(
  "/:productId",
  getProductReviews
);

module.exports = router;