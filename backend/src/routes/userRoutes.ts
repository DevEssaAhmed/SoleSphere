import express from 'express';
import { protect, admin } from '../middlewares/authMiddleware';
import {
  loginController,
  registerController,
  logoutController,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController';

// Router object
const router = express.Router();

router.route('/').post(registerController).get(protect, admin, getUsers);
router.post('/auth', loginController);
router.post('/logout', logoutController);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
