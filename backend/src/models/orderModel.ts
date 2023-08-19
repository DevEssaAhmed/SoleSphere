import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        sizes: { type: String, required: true },
        colors: { type: String, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    itemsPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;

// import mongoose, { Document, Model, Schema } from 'mongoose';

// interface OrderItem {
//   name: string;
//   qty: number;
//   price: string;
//   product: mongoose.Schema.Types.ObjectId;
// }

// interface ShippingAddress {
//   address: string;
//   city: string;
//   postalCode: string;
//   country: string;
// }

// interface PaymentResult {
//   id: string;
//   status: string;
//   update_time: string;
//   email_address: string;
// }

// interface OrderBaseDocument extends Document {
//   user: mongoose.Schema.Types.ObjectId;
//   orderItems: OrderItem[];
//   shippingAddress: ShippingAddress;
//   paymentMethod: string;
//   paymentResult: PaymentResult;
//   itemsPrice: number;
//   taxPrice: number;
//   shippingPrice: number;
//   totalPrice: number;
//   isPaid: boolean;
//   paidAt: Date;
//   isDelivered: boolean;
// }

// export interface OrderDocument extends OrderBaseDocument {
//   // Add any additional instance methods or virtual properties here
// }

// interface OrderModel extends Model<OrderDocument> {
//   // Add any static methods here
// }

// const orderSchema = new Schema<OrderDocument, OrderModel>(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//       ref: 'User',
//     },
//     orderItems: [
//       {
//         name: { type: String, required: true },
//         qty: { type: Number, required: true },
//         price: { type: String, required: true },
//         product: {
//           type: mongoose.Schema.Types.ObjectId,
//           required: true,
//           ref: 'Product',
//         },
//       },
//     ],
//     shippingAddress: {
//       address: { type: String, required: true },
//       city: { type: String, required: true },
//       postalCode: { type: String, required: true },
//       country: { type: String, required: true },
//     },
//     paymentMethod: {
//       type: String,
//       required: true,
//     },
//     paymentResult: {
//       id: { type: String },
//       status: { type: String },
//       update_time: { type: String },
//       email_address: { type: String },
//     },
//     itemsPrice: {
//       type: Number,
//       required: true,
//       default: 0.0,
//     },
//     taxPrice: {
//       type: Number,
//       required: true,
//       default: 0.0,
//     },
//     shippingPrice: {
//       type: Number,
//       required: true,
//       default: 0.0,
//     },
//     totalPrice: {
//       type: Number,
//       required: true,
//       default: 0.0,
//     },
//     isPaid: {
//       type: Boolean,
//       required: true,
//       default: false,
//     },
//     paidAt: {
//       type: Date,
//     },
//     isDelivered: {
//       type: Boolean,
//       required: true,
//       default: false,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Order: OrderModel = mongoose.model<OrderDocument, OrderModel>(
//   'Order',
//   orderSchema
// );

// export default Order;
