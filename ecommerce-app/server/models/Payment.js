const mongoose = require("mongoose");

const paymentSchema =
  new mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User"
      },

      order: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Order"
      },

      amount: Number,
      currency: {
        type: String,
        default: "INR"
      },

      method: String,
      transactionId: String,

      status: {
        type: String,
        default: "Success"
      }
    },
    {
      timestamps: true
    }
  );

module.exports =
  mongoose.model(
    "Payment",
    paymentSchema
  );