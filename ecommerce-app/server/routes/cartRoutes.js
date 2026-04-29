const router =
  require("express").Router();

const protect =
  require("../middleware/authMiddleware");

const {
  getCart,
  addToCart,
  removeCartItem
} = require(
  "../controllers/cartController"
);

router.get("/", protect, getCart);
router.post("/", protect, addToCart);
router.delete(
  "/:id",
  protect,
  removeCartItem
);

module.exports = router;