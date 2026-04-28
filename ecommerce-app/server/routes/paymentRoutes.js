import express from 'express';
import { createPaymentIntent } from '../controllers/paymentController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create-intent', authMiddleware, createPaymentIntent);

export default router;
