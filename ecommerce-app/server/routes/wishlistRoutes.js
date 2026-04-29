const router =
  require("express").Router();

const protect =
  require("../middleware/authMiddleware");

const {
  getWishlist,
  toggleWishlist
} = require(
  "../controllers/wishlistController"
);

router.get("/", protect, getWishlist);
router.post(
  "/toggle",
  protect,
  toggleWishlist
);

module.exports = router;