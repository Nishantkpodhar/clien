const router =
  require("express").Router();

const protect =
  require("../middleware/authMiddleware");
const sellerOnly =
  require("../middleware/sellerMiddleware");

const {
  createSeller,
  dashboard
} = require(
  "../controllers/sellerController"
);

router.post(
  "/register",
  protect,
  createSeller
);

router.get(
  "/dashboard",
  protect,
  sellerOnly,
  dashboard
);

module.exports = router;