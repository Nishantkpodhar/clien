const mongoose = require("mongoose");

const sellerSchema =
  new mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
      },

      storeName: {
        type: String,
        required: true
      },

      gstNumber: String,
      logo: String,
      description: String,

      rating: {
        type: Number,
        default: 0
      },

      revenue: {
        type: Number,
        default: 0
      },

      verified: {
        type: Boolean,
        default: false
      }
    },
    {
      timestamps: true
    }
  );

module.exports =
  mongoose.model(
    "Seller",
    sellerSchema
  );