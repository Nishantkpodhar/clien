import express from 'express';
import { getAdminDashboard } from '../controllers/adminController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { adminMiddleware } from '../middleware/adminMiddleware.js';

const router = express.Router();

router.get('/dashboard', authMiddleware, adminMiddleware, getAdminDashboard);

export default router;
