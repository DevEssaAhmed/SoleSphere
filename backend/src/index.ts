// eslint-disable-next-line @typescript-eslint/no-var-requires, no-global-assign


import path from 'path';
import express from 'express';

import dotenv from 'dotenv';
dotenv.config();

import { connectDB } from './config/connectDB';
import { app } from './app';

const port = process.env.PORT || 5000;

connectDB();
if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

app.listen(port, () => console.log(`Server started on port ${port}`));
