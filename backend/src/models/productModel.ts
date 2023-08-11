import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface reviewDocument extends Document {}

export interface ProductDocument extends Document {
  user: ObjectId;
  name: string;
  image: string;
  brand: string;
  price: number;
  category: string;
  description: string;
  reviews: [];
  rating: number;
  countInStock: number;
  colors: [];
  sizes: [];
}

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const productSchema: Schema<ProductDocument> = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    colors: {
      type: [],
      required: true,
    },
    sizes: {
      type: [],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model<ProductDocument>('Product', productSchema);

export default Product;
