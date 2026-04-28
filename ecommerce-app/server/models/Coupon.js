import mongoose from 'mongoose';
const couponSchema = new mongoose.Schema({
  code: String,
  discount: Number,
  expiresAt: Date,
}, { timestamps: true });
const Coupon = mongoose.model('Coupon', couponSchema);
export default Coupon;
