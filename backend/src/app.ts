import cookieParser from 'cookie-parser';
import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { notFound, errorHandler } from './middlewares/errorMiddleware';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';
import orderRoutes from './routes/orderRoutes';
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

app.get('/api/v1/config/paypal', (_req, res) =>
  res.send({
    clientId: process.env.PAYPAL_CLIENT_ID,
  })
);

app.use(notFound);
app.use(errorHandler);

export { app };
