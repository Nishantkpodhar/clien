import mongoose from 'mongoose';
const sellerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  storeName: String,
  verified: Boolean,
}, { timestamps: true });
const Seller = mongoose.model('Seller', sellerSchema);
export default Seller;
