import jwt, { SignOptions } from 'jsonwebtoken';
import { Response } from 'express';

const generateToken = (res: Response, userId: string): void => {
  const token = jwt.sign(
    { userId },
    process.env.JWT_SECRET as string,
    {
      expiresIn: '30d',
    } as SignOptions
  );

  // Set JWT as an HTTP-Only cookie
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
    sameSite: 'strict', // Prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
};

export default generateToken;
