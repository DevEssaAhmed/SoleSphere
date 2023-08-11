import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';
import Product, { ProductDocument } from '../models/productModel';

interface CustomRequest extends Request {
  product?: ProductDocument | null;
}

// @desc    Get all products
// @route   GET /api/v1/products
// @access  Public
const getAllProducts = asyncHandler(async (_req, res: Response) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    Get single product
// @route   GET /api/v1/products/:id
// @access  Public
const getSingleProduct = asyncHandler(
  async (req: CustomRequest, res: Response) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
      res.status(404);
      throw new Error('Product not found');
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  }
);

export { getAllProducts, getSingleProduct };
