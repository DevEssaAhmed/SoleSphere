import express from 'express';
import {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct
} from '../controllers/productController';
import { protect, admin } from '../middlewares/authMiddleware';

// Router object
const router = express.Router();

router
  .route('/')
  .get(getAllProducts)
  .post(protect, admin, createProduct)

router
  .route('/:id')
  .get(getSingleProduct)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);;

export default router;
