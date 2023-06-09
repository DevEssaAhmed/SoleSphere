import cookieParser from 'cookie-parser';
import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { notFound, errorHandler } from './middleware/errorMiddleware';
import userRoutes from '../src/routes/userRoutes';
const app: Express = express();

// Middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));

// // Routes
app.use('/api/v1/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

export { app };
