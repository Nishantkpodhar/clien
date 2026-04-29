const router =
  require("express").Router();

const protect =
  require("../middleware/authMiddleware");

const {
  createOrder,
  getMyOrders,
  updateStatus
} = require(
  "../controllers/orderController"
);

router.post("/", protect, createOrder);
router.get("/my", protect, getMyOrders);
router.put(
  "/:id",
  protect,
  updateStatus
);

module.exports = router;