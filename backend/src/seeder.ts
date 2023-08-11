// import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import colors from 'colors';
import users from './data/users';
import { products } from './data/products';
import User from './models/userModel';
import Product from './models/productModel';
import Order from './models/orderModel';
import { connectDB } from './config/connectDB';

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log('Data Imported!'.green);
    console.log(colors.green.inverse(`Data Imported!`));

    process.exit();
  } catch (error) {
    console.error(`${error}`.red);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
