const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const cartRoutes =
  require("./routes/cartRoutes");
const wishlistRoutes =
  require("./routes/wishlistRoutes");
const reviewRoutes =
  require("./routes/reviewRoutes");
const sellerRoutes =
  require("./routes/sellerRoutes");

const adminRoutes =
  require("./routes/adminRoutes");
const helmet =
  require("helmet");
const compression =
  require("compression");
const morgan =
  require("morgan");
const rateLimit =
  require(
    "express-rate-limit"
  );

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payments", paymentRoutes);

app.use("/api/cart", cartRoutes);
app.use(
  "/api/wishlist",
  wishlistRoutes
);
app.use("/api/reviews", reviewRoutes);
app.use("/api/seller", sellerRoutes);


app.use("/api/admin", adminRoutes);
app.use(helmet());
app.use(compression());
app.use(morgan("dev"));

app.use(
  rateLimit({
    windowMs:
      15 * 60 * 1000,
    max: 200
  })
);

module.exports = app;