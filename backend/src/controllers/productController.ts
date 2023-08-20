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

// @desc    Create a product
// @route   POST /api/v1/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req: any, res: Response) => {
  const product = new Product({
    name: 'Sample name',
    price: 100,
    user: req.user._id,
    image: '/nike.png',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 1,
    numReviews: 0,
    description: 'Sample description',
    sizes: ['8'],
    colors: ['Red'],
  });

  const createProduct = await product.save();
  res.status(201).json(createProduct);
});

// @desc    Update a product
// @route   PUT /api/v1/products/:id
// @access  Private/Admin

const updateProduct = asyncHandler(async (req: any, res: any) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
    sizes,
    colors,
  } = req.body;

  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;
    product.sizes = sizes;
    product.colors = colors;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
});

// @desc    Delete a product
// @route   Delete /api/v1/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await Product.deleteOne({ _id: product._id });
    res.json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
