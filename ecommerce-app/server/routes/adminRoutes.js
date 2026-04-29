const router =
  require("express").Router();

const protect =
  require("../middleware/authMiddleware");
const adminOnly =
  require("../middleware/adminMiddleware");

const {
  dashboard,
  getAllOrders
} = require(
  "../controllers/adminController"
);

router.get(
  "/dashboard",
  protect,
  adminOnly,
  dashboard
);

router.get(
  "/orders",
  protect,
  adminOnly,
  getAllOrders
);

module.exports = router;