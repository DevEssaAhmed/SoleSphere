import cookieParser from 'cookie-parser';
import express, { Express } from 'express';
import morgan from 'morgan';
import { notFound, errorHandler } from './middleware/errorMiddleware';
import userRoutes from '../src/routes/userRoutes';
const app: Express = express();

// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(notFound);
app.use(errorHandler);

// Routes
app.use('/api/v1/users', userRoutes);

export { app };
