const mongoose = require("mongoose");

const orderSchema =
  new mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User"
      },

      items: [
        {
          product: {
            type:
              mongoose.Schema.Types.ObjectId,
            ref: "Product"
          },

          qty: Number,
          price: Number
        }
      ],

      total: Number,

      coupon: String,

      discount: {
        type: Number,
        default: 0
      },

      paymentStatus: {
        type: String,
        default: "Pending"
      },

      orderStatus: {
        type: String,
        default: "Placed"
      },

      shippingAddress: {
        fullName: String,
        phone: String,
        address: String,
        city: String,
        state: String,
        zip: String
      }
    },
    {
      timestamps: true
    }
  );

module.exports =
  mongoose.model(
    "Order",
    orderSchema
  );