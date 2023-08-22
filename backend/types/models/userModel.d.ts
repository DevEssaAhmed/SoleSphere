import mongoose, { Document } from 'mongoose';
export interface UserDocument extends Document {
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    isAdmin: boolean;
    matchPassword: (enteredPassword: string) => Promise<boolean>;
}
declare const User: mongoose.Model<UserDocument, {}, {}, {}, mongoose.Document<unknown, {}, UserDocument> & Omit<UserDocument & {
    _id: mongoose.Types.ObjectId;
}, never>, any>;
export default User;
