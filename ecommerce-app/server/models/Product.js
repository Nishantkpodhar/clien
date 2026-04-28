import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  stock: Number,
  images: [String],
  category: String,
  brand: String,
  rating: Number,
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
export default Product;
