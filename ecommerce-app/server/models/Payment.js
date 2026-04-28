import mongoose from 'mongoose';
const paymentSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
  amount: Number,
  provider: String,
  status: String,
}, { timestamps: true });
const Payment = mongoose.model('Payment', paymentSchema);
export default Payment;
