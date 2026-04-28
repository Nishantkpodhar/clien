import express from 'express';
import { toggleWishlist } from '../controllers/wishlistController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, toggleWishlist);

export default router;
