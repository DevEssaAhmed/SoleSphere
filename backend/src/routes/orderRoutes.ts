import express from 'express';
import { protect, admin } from '../middlewares/authMiddleware';
import {
  addOrderItems,
  getAllOrders,
  getMyOrders,
  getOrderById,
  updateOrderToDelivered,
  updateOrderToPaid,
} from '../controllers/orderController';

const router = express.Router();

router.route('/').post(addOrderItems).get(protect, admin, getAllOrders);

router.route('/myorders').get(protect, getMyOrders);

router.route('/:id').get(protect, admin, getOrderById);
router.route('/:id/pay').put(protect, admin, updateOrderToPaid);
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);

export default router;
