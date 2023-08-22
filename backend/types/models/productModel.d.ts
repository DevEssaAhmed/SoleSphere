import mongoose, { Document, ObjectId } from 'mongoose';
export interface reviewDocument extends Document {
}
export interface ProductDocument extends Document {
    user: ObjectId;
    name: string;
    image: string;
    brand: string;
    price: number;
    category: string;
    description: string;
    reviews: [];
    numReviews: number;
    rating: number;
    countInStock: number;
    colors: [];
    sizes: [];
}
declare const Product: mongoose.Model<ProductDocument, {}, {}, {}, mongoose.Document<unknown, {}, ProductDocument> & Omit<ProductDocument & {
    _id: mongoose.Types.ObjectId;
}, never>, any>;
export default Product;
