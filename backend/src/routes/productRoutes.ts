import express from 'express';
import {
  createProduct,
  getAllProducts,
  getSingleProduct,
} from '../controllers/productController';
import { protect, admin } from '../middlewares/authMiddleware';

// Router object
const router = express.Router();

router.route('/').get(getAllProducts).post(protect, admin, createProduct);
router.route('/:id').get(getSingleProduct);

export default router;
