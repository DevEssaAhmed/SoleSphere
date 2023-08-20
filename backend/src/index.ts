import colors from 'colors';
// import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { connectDB } from './config/connectDB';
import { app } from './app';

const port = process.env.PORT || 5000;

connectDB();

app.listen(port, () =>
  console.log(colors.bgYellow(`Server started on port ${port}`))
);
