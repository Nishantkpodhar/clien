const mongoose = require("mongoose");

const schema =
  new mongoose.Schema(
    {
      title: String,
      slug: String,
      description: String,
      price: Number,
      discountPrice: Number,
      stock: Number,
      rating: {
        type: Number,
        default: 0
      },

      brand: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Brand"
      },

      category: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Category"
      },

      seller: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User"
      },

      images: [String]
    },
    {
      timestamps: true
    }
  );

module.exports =
  mongoose.model(
    "Product",
    schema
  );