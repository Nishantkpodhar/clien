import express from 'express';
import { getSellerDashboard } from '../controllers/sellerController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { sellerMiddleware } from '../middleware/sellerMiddleware.js';

const router = express.Router();

router.get('/dashboard', authMiddleware, sellerMiddleware, getSellerDashboard);

export default router;
