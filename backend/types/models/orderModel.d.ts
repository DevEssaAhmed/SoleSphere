import mongoose from 'mongoose';
declare const Order: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: mongoose.Types.ObjectId;
    orderItems: {
        name: string;
        image: string;
        price: number;
        colors: string;
        sizes: string;
        qty: number;
        product: mongoose.Types.ObjectId;
    }[];
    paymentMethod: string;
    itemsPrice: number;
    taxPrice: number;
    shippingPrice: number;
    totalPrice: number;
    isPaid: boolean;
    isDelivered: boolean;
    shippingAddress?: {
        address: string;
        city: string;
        postalCode: string;
        country: string;
    } | undefined;
    paymentResult?: {
        id?: string | undefined;
        status?: string | undefined;
        update_time?: string | undefined;
        email_address?: string | undefined;
    } | undefined;
    paidAt?: Date | undefined;
    deliveredAt?: Date | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: mongoose.Types.ObjectId;
    orderItems: {
        name: string;
        image: string;
        price: number;
        colors: string;
        sizes: string;
        qty: number;
        product: mongoose.Types.ObjectId;
    }[];
    paymentMethod: string;
    itemsPrice: number;
    taxPrice: number;
    shippingPrice: number;
    totalPrice: number;
    isPaid: boolean;
    isDelivered: boolean;
    shippingAddress?: {
        address: string;
        city: string;
        postalCode: string;
        country: string;
    } | undefined;
    paymentResult?: {
        id?: string | undefined;
        status?: string | undefined;
        update_time?: string | undefined;
        email_address?: string | undefined;
    } | undefined;
    paidAt?: Date | undefined;
    deliveredAt?: Date | undefined;
}> & Omit<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: mongoose.Types.ObjectId;
    orderItems: {
        name: string;
        image: string;
        price: number;
        colors: string;
        sizes: string;
        qty: number;
        product: mongoose.Types.ObjectId;
    }[];
    paymentMethod: string;
    itemsPrice: number;
    taxPrice: number;
    shippingPrice: number;
    totalPrice: number;
    isPaid: boolean;
    isDelivered: boolean;
    shippingAddress?: {
        address: string;
        city: string;
        postalCode: string;
        country: string;
    } | undefined;
    paymentResult?: {
        id?: string | undefined;
        status?: string | undefined;
        update_time?: string | undefined;
        email_address?: string | undefined;
    } | undefined;
    paidAt?: Date | undefined;
    deliveredAt?: Date | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: mongoose.Types.ObjectId;
    orderItems: {
        name: string;
        image: string;
        price: number;
        colors: string;
        sizes: string;
        qty: number;
        product: mongoose.Types.ObjectId;
    }[];
    paymentMethod: string;
    itemsPrice: number;
    taxPrice: number;
    shippingPrice: number;
    totalPrice: number;
    isPaid: boolean;
    isDelivered: boolean;
    shippingAddress?: {
        address: string;
        city: string;
        postalCode: string;
        country: string;
    } | undefined;
    paymentResult?: {
        id?: string | undefined;
        status?: string | undefined;
        update_time?: string | undefined;
        email_address?: string | undefined;
    } | undefined;
    paidAt?: Date | undefined;
    deliveredAt?: Date | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: mongoose.Types.ObjectId;
    orderItems: {
        name: string;
        image: string;
        price: number;
        colors: string;
        sizes: string;
        qty: number;
        product: mongoose.Types.ObjectId;
    }[];
    paymentMethod: string;
    itemsPrice: number;
    taxPrice: number;
    shippingPrice: number;
    totalPrice: number;
    isPaid: boolean;
    isDelivered: boolean;
    shippingAddress?: {
        address: string;
        city: string;
        postalCode: string;
        country: string;
    } | undefined;
    paymentResult?: {
        id?: string | undefined;
        status?: string | undefined;
        update_time?: string | undefined;
        email_address?: string | undefined;
    } | undefined;
    paidAt?: Date | undefined;
    deliveredAt?: Date | undefined;
}>> & Omit<mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: mongoose.Types.ObjectId;
    orderItems: {
        name: string;
        image: string;
        price: number;
        colors: string;
        sizes: string;
        qty: number;
        product: mongoose.Types.ObjectId;
    }[];
    paymentMethod: string;
    itemsPrice: number;
    taxPrice: number;
    shippingPrice: number;
    totalPrice: number;
    isPaid: boolean;
    isDelivered: boolean;
    shippingAddress?: {
        address: string;
        city: string;
        postalCode: string;
        country: string;
    } | undefined;
    paymentResult?: {
        id?: string | undefined;
        status?: string | undefined;
        update_time?: string | undefined;
        email_address?: string | undefined;
    } | undefined;
    paidAt?: Date | undefined;
    deliveredAt?: Date | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default Order;
