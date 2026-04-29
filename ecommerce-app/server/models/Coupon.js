const mongoose = require("mongoose");

const couponSchema =
  new mongoose.Schema(
    {
      code: {
        type: String,
        unique: true
      },

      discount: Number,

      active: {
        type: Boolean,
        default: true
      },

      expiry: Date
    },
    {
      timestamps: true
    }
  );

module.exports =
  mongoose.model(
    "Coupon",
    couponSchema
  );