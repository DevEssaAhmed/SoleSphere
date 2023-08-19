import { Response } from 'express';
import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel';

// @desc    Create a new order
// @route   POST /api/v1/orders
// @access  Private
const addOrderItems = asyncHandler(async (req: any, res: any) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    userId,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    const orderItemsArray: any = orderItems;
    const order = new Order({
      orderItems: orderItemsArray.map((x) => ({
        ...x,
        product: x._id,
        _id: undefined,
      })),
      user: userId,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

// @desc    Get logged in user orders
// @route   GET /api/v1/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req: any, res: Response) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

// @desc    Get Order By Id
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req: any, res: Response) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );
  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc    Update Order to Paid
// @route   PUT /api/v1/orders/:id/pay
// @access  Private/Admin
const updateOrderToPaid = asyncHandler(async (req: any, res: Response) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = new Date();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address,
    };

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc    Update Order to Delivered
// @route   PUT /api/v1/orders/:id/delivered
// @access  Private
const updateOrderToDelivered = asyncHandler(async (req: any, res: Response) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = new Date();

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc    Get all orders
// @route   GET /api/v1/orders
// @access  Private/Admin
const getAllOrders = asyncHandler(async (_req: any, res: Response) => {
  const orders = await Order.find({}).populate('user', 'id name');
  res.status(200).json(orders);
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getAllOrders,
};
