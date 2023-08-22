import cookieParser from 'cookie-parser';
import path from 'path';

import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { notFound, errorHandler } from './middlewares/errorMiddleware';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';
import orderRoutes from './routes/orderRoutes';
import uploadRoutes from './routes/uploadRoutes';
const app: Express = express();

// Middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));

// // Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/upload', uploadRoutes);

app.get('/api/v1/config/paypal', (_req, res) =>
  res.send({
    clientId: process.env.PAYPAL_CLIENT_ID,
  })
);

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use('/uploads', express.static('/var/data/uploads'));
  app.use(express.static(path.join(__dirname, './frontend/dist')));

  app.get('*', (_req, res) =>
    res.sendFile(
      path.resolve(__dirname, './frontend', 'dist', 'index.html')
    )
  );
} else {
  app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
  app.get('/', (_req, res) => {
    res.send('API is running....');
  });
}
// const __dirname = path.resolve();
// console.log(path.resolve(__dirname, '../../frontend', 'dist'));
app.use(notFound);
app.use(errorHandler);

export { app };
