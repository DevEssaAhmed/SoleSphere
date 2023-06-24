import cookieParser from 'cookie-parser';
import express, {Express} from 'express';

const app: Express = express();

// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(notFound);
// app.use(errorHandler);
// Routes
// app.use('/api/v1/users', userRouter);

export { app };
