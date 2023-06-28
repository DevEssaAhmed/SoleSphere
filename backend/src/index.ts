import path from 'path';
import colors from 'colors';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { connectDB } from './config/connectDB';
import { app } from './app';

const port = process.env.PORT || 5000;

connectDB();
if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.get('*', (_req: Request, res: Response) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  );
} else {
  app.get('/', (_req, res) => {
    res.send('API is running....');
  });
}

app.listen(port, () =>
  console.log(colors.bgYellow(`Server started on port ${port}`))
);
